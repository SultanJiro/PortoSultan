function App() {
  return (
    <div className="min-h-screen w-full bg-[#121212] text-white font-sans overflow-x-hidden">
      <main className="w-full px-6 md:px-12 lg:px-20">
        {/* SECTION HERO */}
        <section className="min-h-screen flex items-center pt-20 md:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            {/* KOLOM KIRI: TEKS & CTA */}
            <div className="lg:col-span-7">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for Internship
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
                HI, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">SAYA SULTAN</span> <br />
                MAULANA F.A.
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                Saya seorang mahasiswa Universitas Gunadarma, saat ini berada di semester 8. Saya tertarik di bidang programming dan designer terutama pada pembuatan website dan desain Web (UI/UX), selain itu saya berminat di bidang analyst
                seperti system analyst dan data analyst.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-5">
                <a href="#proyek" className="group relative px-8 py-4 bg-white text-black rounded-full font-bold transition-all hover:pr-12">
                  Lihat Proyek
                  <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all">→</span>
                </a>
                <a href="#kontak" className="px-8 py-4 bg-transparent border border-gray-700 hover:border-gray-400 text-white rounded-full font-bold transition-all">
                  Kontak
                </a>
              </div>
            </div>

            {/* KOLOM KANAN: FOTO (Gede, Setengah Badan, Clean Tanpa Box) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-lg h-[480px] sm:h-[520px] lg:h-[580px] group flex items-center justify-center overflow-hidden">
                {/* Glow Blue Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/25 via-cyan-500/15 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition duration-500"></div>

                {/* Foto Setengah Badan (Presisi Center & Large) */}
                <img
                  src="/assets/projects/foto-gw.jpeg"
                  alt="Sultan Maulana F.A."
                  className="relative z-10 w-full h-full object-cover [object-position:60%_10%] scale-[1.75] translate-x-4 sm:translate-x-6 group-hover:scale-[1.85] grayscale hover:grayscale-0 transition-all duration-500 drop-shadow-[0_20px_50px_rgba(59,130,246,0.3)]"
                />
              </div>
            </div>
          </div>
        </section>
        {/* HERO END */}

        {/* TENTANG */}
        <section id="tentang" className="py-24">
          <div className="bg-[#222] rounded-2xl p-8 md:p-12 shadow-2xl border border-white/5 relative overflow-hidden group">
            {/* Efek Gradasi Halus di Background */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700"></div>

            <div className="relative z-10">
              {/* Teks Deskripsi */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
                Hi, perkenalkan saya <span className="text-white font-semibold">Sultan Maulana Fandi Achmad</span>, seorang mahasiswa Universitas Gunadarma semester 8 yang tertarik di bidang{" "}
                <span className="font-bold text-white">programming dan designer</span> terutama pada pembuatan website dan desain seperti web design, poster, dan pamflet. Saya yakin dengan kedua skill saya ini sangat berhubungan, karena
                website akan menarik tidak hanya karena desain yang menarik tapi juga memberikan informasi dan pengalaman yang baik ke pengguna.
              </p>

              {/* Baris Bawah: Foto & Stats */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Foto Profil Mini */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-blue-500/30 shadow-lg shadow-blue-500/10">
                    <img src="/assets/pas 4x6.png" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Sultan Maulana F.A.</h4>
                    <p className="text-sm text-gray-500">Based in Indonesia</p>
                  </div>
                </div>

                {/* Statistik */}
                <div className="flex gap-12 text-center md:text-left">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-1">
                      1<span className="text-blue-500">+</span>
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-bold">Tahun Pengalaman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* TENTANG END */}

        {/* TOOLS */}
        <section id="tools" className="py-24">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Tools yang dipakai</h2>
            <p className="text-gray-400 max-w-xl">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan Website ataupun Design.</p>
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
              <div key={index} className="flex items-center gap-4 p-4 bg-[#222]/50 border border-white/5 rounded-xl hover:border-blue-500/50 hover:bg-[#222] transition-all group">
                {/* Container Logo */}
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#1a1a1a] rounded-lg p-2 group-hover:scale-110 transition-transform">
                  <img src={`/assets/tools/${tool.img}`} alt={tool.name} className="w-full h-full object-contain" />
                </div>

                {/* Info Tool */}
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base">{tool.name}</h4>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* TOOLS END */}

        {/* PROJEK */}
        <section id="proyek" className="py-24 scroll-mt-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Project</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Berikut adalah beberapa proyek yang telah saya kerjakan.</p>
          </div>

          {/* Grid Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CHATBOT AI LEARNING BUDDY",
                desc: "Chatbot AI ini dibuat saat saya mengikuti program ASAH by Dicoding, chatbot ini bertujuan untuk membantu user Dicoding saat belajar di Web Dicoding",
                tags: ["HTML", "CSS", "Javascript", "React", "NodeJS", "expressJS"],
                img: "chabtotai.png",
                link: "https://learning-buddy-tau.vercel.app/",
              },
              {
                title: "E-Commerce Mantra Perfume",
                desc: "Website E-Commerce untuk brand parfum Mantra, digunakan untuk melakukan penjualan online, dan mengatur manajemen bisnis bagi admin",
                tags: ["Next JS", "Tailwind CSS", "Javascript", "Express JS"],
                img: "about.png",
                link: "https://mantrascent.vercel.app/",
              },
              {
                title: "Company Profile",
                desc: "Landing Page untuk profil perusahaan",
                tags: ["Laravel", "PHP", "JavaScript", "HTML", "CSS"],
                img: "piel.png",
                link: "#",
              },
            ].map((project, index) => (
              <div key={index} className="bg-[#222] rounded-2xl overflow-hidden border border-white/5 group hover:border-purple-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
                <div>
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img src={`/assets/projects/${project.img}`} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#222] to-transparent opacity-60"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.desc}</p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Button CTA */}
                <div className="p-6 pt-0">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-center rounded-xl font-bold transition-colors shadow-lg shadow-purple-500/20">
                    Lihat Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* PROJEK END */}

        {/* KONTAK */}
        <section id="kontak" className="py-24 scroll-mt-24 border-t border-white/5">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">Kontak</h2>
            <p className="text-gray-400 mb-12 text-lg">Tertarik untuk berkolaborasi atau punya pertanyaan? Yuk, hubungi saya lewat media sosial di bawah ini!</p>

            <div className="flex justify-center items-center gap-8">
              {/* Instagram */}
              <a href="https://www.instagram.com/sltnnnnn_/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 transition-all hover:-translate-y-2">
                <div className="w-16 h-16 p-4 bg-[#222] border border-white/5 rounded-2xl group-hover:border-pink-500/50 group-hover:bg-pink-500/10 transition-all shadow-xl">
                  <img
                    src="/assets/icon/instagram.png"
                    alt="Instagram"
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                    onError={(e) => {
                      e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/2111/2111463.png";
                    }}
                  />
                </div>
                <span className="text-xs font-bold text-gray-500 group-hover:text-white uppercase tracking-widest">Instagram</span>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/628xxxxxxxxxx" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 transition-all hover:-translate-y-2">
                <div className="w-16 h-16 p-4 bg-[#222] border border-white/5 rounded-2xl group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-all shadow-xl">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <span className="text-xs font-bold text-gray-500 group-hover:text-white uppercase tracking-widest">WhatsApp</span>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/sultan-maulana-a40809252/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 transition-all hover:-translate-y-2">
                <div className="w-16 h-16 p-4 bg-[#222] border border-white/5 rounded-2xl group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all shadow-xl">
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <span className="text-xs font-bold text-gray-500 group-hover:text-white uppercase tracking-widest">LinkedIn</span>
              </a>
            </div>

            {/* Email Link */}
            <div className="mt-16">
              <p className="text-gray-500 text-sm mb-2 uppercase tracking-widest">Atau kirim pesan ke:</p>
              <a href="mailto:sultanmaulana.fa@gmail.com" className="text-xl md:text-2xl font-bold hover:text-blue-500 transition-colors">
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
