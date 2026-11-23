import { useEffect, useRef, useState } from "react";
import "./CircularCarousel.css";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const wrap = degrees => ((((degrees + 180) % 360) + 360) % 360) - 180;

export default function CircularCarousel({ items }) {
  const stage = useRef(null);
  const controls = useRef(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const root = stage.current;
    const cards = [...root.querySelectorAll(".deck-plane")];
    const step = 360 / cards.length;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let angle = 0, target = null, velocity = 0, frame = 0, last = 0;
    let playing = false;
    let radius = 1, degreesPerPixel = 1, press = null, suppressClick = false, wheelTimer;
    let current = 0;

    function render() {
      cards.forEach((card, index) => {
        const world = wrap(index * step + angle);
        const facing = Math.cos(world * Math.PI / 180);
        card.style.transform = `rotateY(${world}deg) translateZ(${radius}px) rotateY(${-world}deg)`;
        card.style.setProperty("--depth", ((1 - facing) * 0.22).toFixed(3));
      });
      const next = ((Math.round(-angle / step) % cards.length) + cards.length) % cards.length;
      if (next !== current) {
        current = next;
        setActive(next);
      }
    }

    function tick(now) {
      frame = 0;
      let dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (target === null) {
        if (!playing || preference.matches) return;
        angle = wrap(angle - 14 * dt);
      } else if (preference.matches) {
        angle = target;
      } else {
        while (dt > 0) {
          const h = Math.min(dt, 1 / 240);
          velocity += (118 * (target - angle) - 2 * Math.sqrt(118) * velocity) * h;
          angle += velocity * h;
          dt -= h;
        }
      }
      if (target !== null && (preference.matches || (Math.abs(target - angle) < 0.025 && Math.abs(velocity) < 0.1))) {
        angle = target;
        target = null;
        velocity = 0;
      }
      render();
      if (target !== null || (playing && !preference.matches)) frame = requestAnimationFrame(tick);
    }

    function wake() {
      if (!frame) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      }
    }

    function settle(next) { target = next; wake(); }
    function by(delta) { settle((Math.round((target ?? angle) / step) - delta) * step); }
    function focus(index) { settle(angle + wrap(-index * step - angle)); }
    controls.current = { by, setPlaying(value) {
      playing = value;
      if (value && !press?.moved && !wheelTimer) wake();
    } };

    function measure() {
      const width = root.clientWidth;
      radius = Math.min(width * 0.37, 370);
      degreesPerPixel = step / Math.max(1, cards[0].firstElementChild.offsetWidth * 0.8);
      root.style.setProperty("--radius", `${radius}px`);
      render();
    }

    function stop() {
      cancelAnimationFrame(frame);
      clearTimeout(wheelTimer);
      wheelTimer = undefined;
      frame = 0;
      velocity = 0;
      target = null;
    }

    function down(event) {
      suppressClick = false;
      if (!event.isPrimary || event.button !== 0 || event.target.closest("a")) return;
      press = { id: event.pointerId, x: event.clientX, y: event.clientY, moved: false, samples: [] };
    }
    function move(event) {
      if (!press || press.id !== event.pointerId) return;
      const delta = event.clientX - press.x;
      if (!press.moved) {
        if (Math.abs(delta) < 5) return;
        if (Math.abs(event.clientY - press.y) > Math.abs(delta) * 1.2) { press = null; return; }
        stop();
        press.origin = angle;
        press.moved = true;
        root.setPointerCapture(event.pointerId);
        root.dataset.dragging = "";
      }
      angle = press.origin + delta * degreesPerPixel;
      const now = performance.now();
      press.samples.push({ time: now, angle });
      while (press.samples.length > 2 && now - press.samples[0].time > 110) press.samples.shift();
      if (!preference.matches) render();
    }
    function release(event) {
      if (!press || press.id !== event.pointerId) return;
      if (press.moved) {
        const first = press.samples[0], end = press.samples.at(-1);
        const span = (end.time - first.time) / 1000;
        velocity = span > 0.008 && performance.now() - end.time < 110 ? clamp((end.angle - first.angle) / span, -600, 600) : 0;
        suppressClick = true;
        settle(Math.round((angle + velocity * 0.16) / step) * step);
      }
      delete root.dataset.dragging;
      press = null;
    }
    function click(event) {
      if (suppressClick) { suppressClick = false; event.preventDefault(); return; }
      const card = event.target.closest("[data-index]");
      if (card && !event.target.closest("a")) {
        focus(Number(card.dataset.index));
      }
    }
    function wheel(event) {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY) || event.ctrlKey) return;
      event.preventDefault();
      stop();
      angle -= event.deltaX * 180 / (Math.PI * radius);
      if (!preference.matches) render();
      wheelTimer = setTimeout(() => {
        wheelTimer = undefined;
        settle(Math.round(angle / step) * step);
      }, 140);
    }
    function syncPreference() { setReduced(preference.matches); }
    syncPreference();
    preference.addEventListener("change", syncPreference);
    const resize = new ResizeObserver(measure);
    resize.observe(root);
    measure();
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) root.dataset.entered = "";
    }, { threshold: 0.2 });
    observer.observe(root);
    const handlers = { pointerdown: down, pointermove: move, pointerup: release, pointercancel: release, click, wheel };
    for (const [type, fn] of Object.entries(handlers)) root.addEventListener(type, fn, { passive: false });
    return () => {
      stop();
      resize.disconnect();
      observer.disconnect();
      preference.removeEventListener("change", syncPreference);
      for (const [type, fn] of Object.entries(handlers)) root.removeEventListener(type, fn);
      controls.current = null;
    };
  }, [items]);

  useEffect(() => {
    controls.current?.setPlaying(visible && !paused && !reduced);
  }, [visible, paused, reduced, items]);

  function stepBy(delta) { controls.current?.by(delta); }

  return (
    <div className="project-deck" role="region" aria-label="Projects" aria-roledescription="carousel">
      <div className="deck-stage" ref={stage} tabIndex={0} aria-label="Browse projects with the left and right arrow keys"
        onKeyDown={event => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            stepBy(event.key === "ArrowRight" ? 1 : -1);
          }
        }}>
        <div className="deck-camera">
          {items.map((project, index) => (
            <div className="deck-plane" data-index={index} key={project.title}>
              <article className="collectible" aria-hidden={active !== index}>
                <header><span>Project</span><span>{String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span></header>
                <h3>{project.title}</h3>
                <img src={`/assets/projects/${project.img}`} alt={`${project.title} website preview`} draggable={false} />
                <p>{project.desc}</p>
                <footer>
                  <small>{project.tags.join(" / ")}</small>
                  {project.link && <a href={project.link} tabIndex={active === index ? 0 : -1} target="_blank" rel="noopener noreferrer">Visit website &#8599;</a>}
                </footer>
              </article>
            </div>
          ))}
        </div>
      </div>
      <div className="deck-controls">
        <button type="button" aria-label="Previous project" onClick={() => stepBy(-1)}>&#8592;</button>
        <span aria-live={paused || reduced ? "polite" : "off"}>{active + 1} / {items.length}</span>
        <button type="button" aria-label="Next project" onClick={() => stepBy(1)}>&#8594;</button>
        {!reduced && <button type="button" onClick={() => setPaused(!paused)}>{paused ? "Play" : "Pause"}</button>}
      </div>
    </div>
  );
}
