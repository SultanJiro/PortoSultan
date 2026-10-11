import { useState, useEffect } from "react";

const navigationLinks = [
  { label: "Home", href: "#" },
  { label: "Experience", href: "#tentang" },
  { label: "Projects", href: "#proyek" },
  { label: "Contact", href: "#kontak" },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 50);

      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
        setIsOpen(false);
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
      aria-label="Main navigation"
      onKeyDown={(event) => {
        if (event.key === "Escape") setIsOpen(false);
      }}
      className={`fixed inset-x-0 top-0 z-[100] px-4 pt-4 sm:px-6 transition-transform duration-500 motion-reduce:transition-none ${show ? "translate-y-0" : "-translate-y-[150%]"}`}
    >
      <div className="relative mx-auto max-w-6xl">
        <div
          className={`relative flex items-center justify-between gap-4 rounded-2xl border px-4 py-3 backdrop-blur-xl transition-colors duration-300 sm:px-5 ${active ? "border-blue-400/20 bg-[#111827]/95 shadow-[0_12px_40px_rgba(0,0,0,0.35)]" : "border-white/10 bg-[#151b27]/80 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"}`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"
          ></div>

          <a
            href="#"
            onClick={() => setIsOpen(false)}
            aria-label="Sultan Maulana home"
            className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            {/* <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-gradient-to-br from-blue-500/25 to-cyan-400/10 text-sm font-black tracking-tight text-cyan-200 transition-colors group-hover:border-cyan-300/60">
              SM<span className="text-blue-400">.</span>
            </span> */}
            <span>
              <span className="block text-sm font-bold tracking-tight text-white">
                Sultan Maulana<span className="text-blue-400">.</span>
              </span>
              <span className="block text-[9px] font-medium uppercase tracking-[0.2em] text-gray-400">
                Developer Portfolio
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex lg:gap-2">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`group inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${link.label === "Contact" ? "ml-2 border border-blue-400/30 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/15 hover:from-blue-500 hover:to-cyan-500" : "text-gray-300 hover:bg-blue-400/10 hover:text-cyan-200"}`}
                >
                  {link.label}
                  {link.label === "Contact" && (
                    <span
                      aria-hidden="true"
                      className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-200 transition-colors hover:border-blue-400/40 hover:bg-blue-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:hidden"
          >
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {isOpen ? (
                <path d="m6 6 12 12M6 18 18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h10" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full mt-3 rounded-2xl border border-blue-400/20 bg-[#111827]/95 p-2 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-1">
              {navigationLinks.map((link, index) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium text-gray-200 transition-colors hover:bg-blue-400/10 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono text-[10px] text-blue-400"
                    >
                      0{index + 1}
                    </span>
                    {link.label}
                    <span
                      aria-hidden="true"
                      className="ml-auto text-gray-500 group-hover:text-cyan-300"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
