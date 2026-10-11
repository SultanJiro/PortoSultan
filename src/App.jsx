function App() {
  return (
    <div className="min-h-screen w-full bg-[#121212] text-white font-sans overflow-x-hidden">
      <main className="w-full px-6 md:px-12 lg:px-20">
        {/* SECTION HERO */}
        <section className="min-h-screen flex items-center pt-32 pb-12 md:pt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            {/* KOLOM KIRI: TEKS & CTA */}
            <div className="lg:col-span-7">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for Full time or Internship Opportunities
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
                HI, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                  I&apos;M SULTAN
                </span>{" "}
                <br />
                MAULANA F.A.
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                I am a recent graduate of Gunadarma University, currently
                seeking opportunities to grow as an IT Developer. I am also
                interested in functional IT roles, such as System Analyst and
                Business Analyst.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-5">
                <a
                  href="#proyek"
                  className="group relative px-8 py-4 bg-white text-black rounded-full font-bold transition-all hover:pr-12"
                >
                  View Projects
                  <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all">
                    →
                  </span>
                </a>
                <a
                  href="#kontak"
                  className="px-8 py-4 bg-transparent border border-gray-700 hover:border-gray-400 text-white rounded-full font-bold transition-all"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* HERO PORTRAIT */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center py-8">
              <div className="relative isolate w-full max-w-[400px] group">
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 rounded-full bg-blue-500/20 blur-3xl transition-opacity duration-700 group-hover:opacity-80"
                ></div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rotate-6 rounded-[2.5rem] border border-cyan-400/20 bg-blue-500/5 transition-transform duration-500 motion-safe:group-hover:rotate-3"
                ></div>

                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#101a2a] shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_35%,rgba(59,130,246,0.3),transparent_65%)]"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-[18%] h-[65%] w-[80%] -translate-x-1/2 rounded-full border border-cyan-300/20 shadow-[0_0_50px_rgba(34,211,238,0.08)]"
                  ></div>

                  <img
                    src="/assets/projects/foto-gw.jpeg"
                    alt="Sultan Maulana F.A."
                    className="absolute inset-0 h-full w-full object-cover [object-position:45%_20%] origin-[44%_55%] translate-x-[10%] scale-[1.65] mix-blend-lighten transition-transform duration-700 motion-safe:group-hover:scale-[1.7]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent"
                  ></div>

                  <div className="absolute left-6 top-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-200/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                    Developer / Portfolio
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-mono text-lg text-cyan-300 backdrop-blur-md"
                  >
                    &lt;/&gt;
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-300">
                      Building ideas into reality
                    </p>
                    <p className="text-2xl font-bold tracking-tight text-white">
                      Sultan Maulana
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Next.js", "React.js", "SQL"].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-gray-300 backdrop-blur-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 right-3 sm:-right-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#172131]/90 px-4 py-3 shadow-xl backdrop-blur-xl transition-transform duration-500 motion-safe:group-hover:-translate-y-1">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 font-mono text-sm font-bold text-blue-400"
                  >
                    &#123; &#125;
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      IT Developer Intern
                    </p>
                    <p className="mt-0.5 text-[10px] text-gray-400">
                      Kalbe International
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* HERO END */}

        {/* WORK EXPERIENCE */}
        <section id="tentang" className="py-16">
          <div className="bg-[#222] rounded-2xl p-6 md:p-8 shadow-2xl border border-white/5 relative overflow-hidden group">
            {/* Efek Gradasi Halus di Background */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Work Experience
              </h2>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                IT Developer Intern — Kalbe International
              </h3>
              <p className="text-sm text-blue-400 italic mb-4">
                August 2026 – Present
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-300 leading-relaxed mb-8 marker:text-blue-400">
                <li>
                  Assisted in the development, maintenance, and enhancement of
                  satellite applications to support enterprise business
                  operations and system functionality.
                </li>
                <li>
                  Supported the integration of the Cash Advance application into
                  the Work Hub enterprise portal, including backend API
                  integration, database operations, and application
                  functionality improvements.
                </li>
                <li>
                  Developed and maintained web application features using
                  Next.js, Node.js, Express.js, and SQL-based databases.
                </li>
                <li>
                  Enhanced front-end interfaces to align with enterprise UI
                  standards, improving application consistency and usability.
                </li>
                <li>
                  Assisted in migrating 9 application source-code repositories
                  from GitHub to GitLab, ensuring proper repository
                  configuration and code management.
                </li>
                <li>
                  Conducted security code scanning using I3GIS and collaborated
                  with the security team to identify and remediate code
                  vulnerabilities.
                </li>
                <li>
                  Troubleshot application issues, performed functional testing,
                  and collaborated with developers to support application
                  stability and continuous improvement.
                </li>
              </ul>

              {/* Baris Bawah: Foto & Stats */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Foto Profil Mini */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-blue-500/30 shadow-lg shadow-blue-500/10">
                    <img
                      src="/assets/pas 4x6.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">
                      Sultan Maulana F.A.
                    </h4>
                    <p className="text-sm text-gray-500">Based in Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* WORK EXPERIENCE END */}

        {/* TOOLS */}
        <section id="tools" className="py-24">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Tools I Use
            </h2>
            <p className="text-gray-400 max-w-xl">
              Here are some of the tools I use for web development and design.
            </p>
          </div>

          {/* Grid System */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-[#222]/50 border border-white/5 rounded-xl hover:border-blue-500/50 hover:bg-[#222] transition-all group"
              >
                {/* Container Logo */}
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#1a1a1a] rounded-lg p-2 group-hover:scale-110 transition-transform">
                  <img
                    src={`/assets/tools/${tool.img}`}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Info Tool */}
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                    {tool.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* TOOLS END */}

        {/* PROJEK */}
        <section id="proyek" className="py-24 scroll-mt-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">
              Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Here are some of the projects I have worked on.
            </p>
          </div>

          {/* Grid Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CHATBOT AI LEARNING BUDDY",
                desc: "An AI chatbot developed during the ASAH by Dicoding program to support users learning on the Dicoding platform.",
                tags: [
                  "HTML",
                  "CSS",
                  "Javascript",
                  "React",
                  "NodeJS",
                  "expressJS",
                ],
                img: "chabtotai.png",
                link: "https://learning-buddy-tau.vercel.app/",
              },
              {
                title: "Mantra Perfume E-Commerce",
                desc: "An e-commerce website for the Mantra perfume brand, supporting online sales and business management for administrators.",
                tags: ["Next JS", "Tailwind CSS", "Javascript", "Express JS"],
                img: "web-1.png",
                link: "https://mantrascent.vercel.app/",
              },
              {
                title: "Company Profile",
                desc: "A landing page showcasing a company profile.",
                tags: ["Laravel", "PHP", "JavaScript", "HTML", "CSS"],
                img: "piel.png",
                link: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-[#222] rounded-2xl overflow-hidden border border-white/5 group hover:border-purple-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={`/assets/projects/${project.img}`}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#222] to-transparent opacity-60"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                      {project.desc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Button CTA */}
                <div className="p-6 pt-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-center rounded-xl font-bold transition-colors shadow-lg shadow-purple-500/20"
                  >
                    View Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* PROJEK END */}

        {/* KONTAK */}
        <section
          id="kontak"
          className="py-24 scroll-mt-24 border-t border-white/5"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
              Contact
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              Interested in collaborating or have a question? Get in touch
              through my social media channels below!
            </p>

            <div className="flex justify-center items-center gap-8">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/sltnnnnn_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 p-4 bg-[#222] border border-white/5 rounded-2xl group-hover:border-pink-500/50 group-hover:bg-pink-500/10 transition-all shadow-xl">
                  <img
                    src="/assets/icon/instagram.png"
                    alt="Instagram"
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://cdn-icons-png.flaticon.com/512/2111/2111463.png";
                    }}
                  />
                </div>
                <span className="text-xs font-bold text-gray-500 group-hover:text-white uppercase tracking-widest">
                  Instagram
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/628xxxxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 p-4 bg-[#222] border border-white/5 rounded-2xl group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-all shadow-xl">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                    alt="WhatsApp"
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <span className="text-xs font-bold text-gray-500 group-hover:text-white uppercase tracking-widest">
                  WhatsApp
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sultan-maulana-a40809252/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 p-4 bg-[#222] border border-white/5 rounded-2xl group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all shadow-xl">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="LinkedIn"
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <span className="text-xs font-bold text-gray-500 group-hover:text-white uppercase tracking-widest">
                  LinkedIn
                </span>
              </a>
            </div>

            {/* Email Link */}
            <div className="mt-16">
              <p className="text-gray-500 text-sm mb-2 uppercase tracking-widest">
                Or email me at:
              </p>
              <a
                href="mailto:sultanmaulana.fa@gmail.com"
                className="text-xl md:text-2xl font-bold hover:text-blue-500 transition-colors"
              >
                sultanmaulana.fa@gmail.com
              </a>
            </div>
          </div>
        </section>
        {/* KONTAK END */}
      </main>
    </div>
  );
}

export default App;
