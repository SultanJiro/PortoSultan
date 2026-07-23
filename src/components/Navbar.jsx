import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // MENU MOBILE
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 50);

      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
        setIsOpen(false); // Otomatis tutup menu pas di-scroll ke bawah
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 py-4
        ${active ? "bg-[#111]/90 backdrop-blur-md shadow-md text-white" : "bg-transparent text-white"}
        ${show ? "top-0" : "-top-full"}
      `}
    >
      <div className="w-full px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <h1 className="text-2xl font-bold tracking-tighter uppercase">Portofolio</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <a href="#" className="text-lg font-medium hover:text-zinc-600 transition">
              Beranda
            </a>
          </li>
          <li>
            <a href="#tentang" className="text-lg font-medium hover:text-zinc-600 transition">
              Tentang
            </a>
          </li>
          <li>
            <a href="#proyek" className="text-lg font-medium hover:text-zinc-600 transition">
              Proyek
            </a>
          </li>
          <li>
            <a href="#kontak" className="text-lg font-medium hover:text-zinc-600 transition">
              Kontak
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl focus:outline-none">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
        absolute top-full left-0 w-full transition-all duration-300 overflow-hidden md:hidden
        ${isOpen ? "max-h-64 opacity-100 border-b border-white/10" : "max-h-0 opacity-0"}
        bg-[#111] text-white
      `}
      >
        <ul className="flex flex-col items-center gap-6 py-8 font-semibold uppercase tracking-widest text-sm">
          <li>
            <a href="#" onClick={() => setIsOpen(false)}>
              Beranda
            </a>
          </li>
          <li>
            <a href="#tentang" onClick={() => setIsOpen(false)}>
              Tentang
            </a>
          </li>
          <li>
            <a href="#proyek" onClick={() => setIsOpen(false)}>
              Proyek
            </a>
          </li>
          <li>
            <a href="#kontak" onClick={() => setIsOpen(false)}>
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
