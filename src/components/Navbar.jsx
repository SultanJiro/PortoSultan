import { useEffect, useRef, useState } from "react";

const sections = [
  ["Home", "#home"],
  ["Experience", "#tentang"],
  ["Tools", "#tools"],
  ["Projects", "#proyek"],
  ["Contact", "#kontak"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const menuButton = useRef(null);

  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setVisible(current <= 100 || current < previous);
      previous = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={visible || open ? "site-nav" : "site-nav nav-away"}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="nav-shell">
        <a href="#home" className="nav-wordmark" onClick={() => setOpen(false)}>Sultan Maulana<span>.</span></a>
        <button ref={menuButton} className="nav-menu" type="button" aria-controls="section-links" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
        <ul id="section-links" className={open ? "nav-links is-open" : "nav-links"}>
          {sections.map(([label, href]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)}>{label}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
