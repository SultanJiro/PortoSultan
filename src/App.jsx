import Projects from "./components/Projects";
import HoloCard from "./components/HoloCard";
import ElectricBorder from "./components/ElectricBorder";
import { useEffect, useRef } from "react";

const kalbeProjects = [
  {
    title: "Cash Advance",
    contributions: [
      "Helped migrate Cash Advance to the central application portal so employees could sign in there and continue working on their cash advance requests.",
      "Supported the JumpCloud single sign-on integration, including the handoff from the portal back to Cash Advance and the use of Redis to manage application sessions.",
      "Helped connect portal accounts to existing employee records and Cash Advance roles so users could access the right documents and approval actions after signing in.",
      "Worked on the React interface and Node.js APIs that employees use to review request details, find documents awaiting approval, and track a request through its approval steps.",
      "Helped troubleshoot access issues by tracing requests from the browser through Express routes to employee and role records in SQL Server.",
      "Project stack included React, Chakra UI, and Redux Toolkit on the frontend, Node.js and Express on the backend, Prisma with SQL Server for application data, and Redis for sessions.",
    ],
  },
  {
    title: "Monthly Expense Planning",
    contributions: [
      "Helped migrate Monthly Expense Planning (MEP) to the central application portal so employees could use a single sign-on to access their planning documents.",
      "Worked on session renewal between MEP and the portal so employees could continue working while their portal session was valid and sign in again when it expired.",
      "Updated the configuration form to show suppliers and accounts payable types for the selected country when administrators set expense planning limits.",
      "Updated the document dashboard so administrators could review plans across users and see the roles used to create and update each document.",
      "Preserved the original creator's employee ID when another user edited a plan, so reviewers could distinguish the person who created it from the person who last updated it.",
      "The frontend used React, Chakra UI, and Redux Toolkit. The backend used Node.js and Express, with Prisma for SQL Server access and Redis for session storage.",
    ],
  },
  {
    title: "KIAT (Kalbe International Approval Tree)",
    contributions: [
      "Helped build the Cash Advance approval path form in KIAT so users could select a creator, choose a requestor, and define the order of approvers.",
      "Fixed the creator search in the approval path list and updated role selection so users could choose roles by name while the backend validated their IDs.",
    ],
  },
  {
    title: "Across projects",
    subheading: "Application maintenance, repository migration and security",
    contributions: [
      "Built and maintained internal application features with React.js, Express.js and SQL databases. Updated interfaces to follow enterprise UI standards.",
      "Helped migrate nine application repositories from GitHub to GitLab and configure them in their new location.",
      "Scanned code with I3GIS and worked with the security team to address vulnerabilities.",
      "Troubleshot application issues and tested fixes with other developers.",
    ],
  },
];

function App() {
  const toolList = useRef(null);

  useEffect(() => {
    if (!window.IntersectionObserver) return;

    const list = toolList.current;
    list.classList.add("tool-motion-ready");
    const observer = new IntersectionObserver((entries) => {
      let order = 0;
      for (const { target, isIntersecting, intersectionRatio } of entries) {
        if (!isIntersecting) {
          target.classList.remove("tool-revealed");
        } else if (intersectionRatio >= 0.3 && !target.classList.contains("tool-revealed")) {
          target.style.setProperty("--tool-delay", `${order * 85}ms`);
          target.classList.add("tool-revealed");
          order++;
        }
      }
    }, { threshold: [0, 0.3] });

    for (const item of list.children) observer.observe(item);
    return () => {
      observer.disconnect();
      list.classList.remove("tool-motion-ready");
    };
  }, []);

  return (
    <div className="portfolio-page min-h-screen w-full text-white font-sans overflow-x-hidden">
      <div className="portfolio-backdrop" aria-hidden="true">
        <img src="/assets/miami-dusk.webp" alt="" width="1672" height="941" />
      </div>
      <main className="portfolio-content">
        <section id="home" className="intro" aria-labelledby="intro-name">
          <div>
            <h1 id="intro-name">Sultan<br /><span>Maulana F.A.</span></h1>
            <p className="intro-bio">
              I am a recent graduate of Gunadarma University, currently seeking
              opportunities to grow as an IT Developer. I am also interested in
              functional IT roles, such as System Analyst and Business Analyst.
            </p>
            <p className="availability">Available for full-time roles or internships</p>
            <div className="intro-actions">
              <a className="bevel-button" href="#proyek">View projects</a>
              <a className="text-link" href="#kontak">Contact</a>
            </div>
          </div>
          <HoloCard className="hero-holo" preset="bursts" intensity={0.48}
            glare={0.2} frame={2} radius={6} tiltMax={11} hoverScale={1.025} shadow={false}>
            <figure className="portrait">
              <img className="portrait-photo" src="/assets/projects/sultan-miami-poster.webp"
                alt="Illustrated portrait of Sultan Maulana at sunset in Miami" width="1122" height="1402" />
              <figcaption>
                <strong>IT Developer</strong>
                <span>Open to developer and analyst roles</span>
              </figcaption>
            </figure>
          </HoloCard>
        </section>
        {/* HERO END */}

        <section
          id="tentang"
          className="py-16"
          aria-labelledby="experience-title"
        >
          <ElectricBorder
            className="console-panel"
            color="#ff549e"
            glowColor="#ee2984"
            speed={0.55}
            chaos={0.28}
            spread={0.26}
            strands={2}
            thickness={1.25}
            glow={0.4}
            intensity={0.75}
            arcs={0.12}
            flicker={0}
            borderRadius={12}
          >
            <h2 id="experience-title" className="console-title">
              Work Experience
            </h2>
            <details className="experience-company">
              <summary className="experience-row company-row">
                <span>
                  <strong className="block text-xl">Kalbe International</strong>
                  <span className="mt-1 block text-sm text-gray-300">
                    IT Developer Intern · August 2026 – Present
                  </span>
                </span>
                <span className="company-action" aria-hidden="true">
                  <span className="when-closed">View projects</span>
                  <span className="when-open">Hide projects</span>
                  <span className="action-chevron" />
                </span>
              </summary>
              <div className="mt-3 grid gap-2 sm:ml-5">
                {kalbeProjects.map(({ title, subheading = "Internal application", contributions }) => (
                  <details key={title} className="experience-project">
                    <summary className="experience-row project-row">
                      <span>
                        <strong className="block">{title}</strong>
                        <span className="mt-1 block text-sm text-gray-400">
                          {subheading}
                        </span>
                      </span>
                      <span className="project-toggle" aria-hidden="true" />
                    </summary>
                    <ul className="mx-4 max-w-3xl list-disc space-y-2 border-t border-white/10 py-4 pl-5 text-sm leading-relaxed text-gray-300">
                      {contributions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </details>
          </ElectricBorder>
        </section>

        {/* TOOLS */}
        <section id="tools" aria-labelledby="tools-title" className="my-16 scroll-mt-24">
          <h2 id="tools-title" className="tool-title">Tools I Use</h2>
          <ul ref={toolList} className="tool-directory">
            {[
              {
                name: "Visual Studio Code",
                desc: "Code Editor",
                img: "vscode.png",
              },
              { name: "React JS", desc: "Framework", img: "reactjs.png" },
              { name: "Next JS", desc: "Framework", img: "nextjs.png" },
              { name: "Express JS", desc: "Framework", img: "expressjs.png" },
              { name: "Laravel", desc: "Framework", img: "Laravel.svg" },
              { name: "Tailwind CSS", desc: "Framework", img: "tailwind.png" },
              { name: "Bootstrap", desc: "Framework", img: "bootstrap.png" },
              { name: "Javascript", desc: "Language", img: "js.png" },
              {
                name: "Node JS",
                desc: "Javascript Runtime",
                img: "nodejs.png",
              },
              { name: "Github", desc: "Repository", img: "github.png" },
              { name: "Adobe Illustrator", desc: "Design App", img: "ai.png" },
              { name: "Adobe Photoshop", desc: "Design App", img: "ps.png" },
              { name: "Canva", desc: "Design App", img: "canva.png" },
              { name: "Figma", desc: "Design App", img: "figma.png" },
            ].map((tool, index) => (
              <li
                key={tool.name}
                className="tool-entry"
                style={{
                  "--float-period": `${3.4 + (index % 4) * 0.4}s`,
                  "--float-phase": `${-index * 0.67}s`,
                }}
              >
                <div className="tool-icon">
                  <img
                    src={`/assets/tools/${tool.img}`}
                    alt=""
                    width="32"
                    height="32"
                    className="size-8 object-contain"
                  />
                </div>
                <div>
                  <p className="font-bold leading-tight">{tool.name}</p>
                  <p className="mt-1 font-mono text-xs text-[#42565c]">{tool.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
        {/* TOOLS END */}

        <Projects />

        <section id="kontak" className="contact-postcard" aria-labelledby="contact-title">
          <div className="postcard-front">
            <img className="postcard-stamp" src="/assets/projects/sultan-miami-poster.webp" alt="" width="1122" height="1402" loading="lazy" />
            <h2 id="contact-title">Contact</h2>
          </div>
          <div className="postcard-address">
            <a className="mail-link" href="mailto:sultanmaulana.fa@gmail.com">
              <span className="postcard-label">Send an email</span>
              <strong>sultanmaulana.fa<wbr />@gmail.com</strong>
            </a>
            <a className="profile-link" href="https://www.linkedin.com/in/sultan-maulana-a40809252/" target="_blank" rel="noopener noreferrer">
              <span>LinkedIn</span><span>Sultan Maulana</span><span aria-hidden="true">↗</span>
            </a>
            <a className="profile-link" href="https://www.instagram.com/sltnnnnn_/" target="_blank" rel="noopener noreferrer">
              <span>Instagram</span><span>@sltnnnnn_</span><span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
