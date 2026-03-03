import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProjectsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/campaigns", label: "Campaigns" },
    { to: "/collaborations", label: "Collaborations" },
    { to: "/media", label: "Media" },
  ];

  const projectLinks = [
    { to: "/projects/brij-surabhi", label: "Brij-Surabhi" },
    { to: "/projects/brij-hunar", label: "Brij-Hunar" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <img src={logo} alt="Khajani Welfare Society" className="h-16 object-contain group-hover:scale-105 transition-transform" />
          </Link>

          <nav className="hidden lg:flex space-x-6 items-center h-full">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  location.pathname === link.to
                    ? "text-accent border-b-2 border-accent pb-1"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProjectsOpen(!projectsOpen)}
                className={`text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1 ${
                  location.pathname.startsWith("/projects")
                    ? "text-accent border-b-2 border-accent pb-1"
                    : "text-foreground hover:text-accent"
                }`}
              >
                Projects
              </button>
              {projectsOpen && (
                <div className="absolute top-full mt-2 left-0 bg-card border border-border rounded-lg shadow-xl py-2 min-w-[180px] z-50">
                  {projectLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setProjectsOpen(false)}
                      className={`block px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                        location.pathname === link.to ? "text-accent bg-accent/5" : "text-foreground hover:text-accent hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  location.pathname === link.to
                    ? "text-accent border-b-2 border-accent pb-1"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/donate"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full font-bold shadow-lg transition transform hover:-translate-y-0.5 text-sm tracking-wide"
            >
              Donate Now
            </Link>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-foreground text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors px-2 py-1 ${
                    location.pathname === link.to ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-2">
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground py-1">Projects</p>
                {projectLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-sm font-bold uppercase tracking-widest transition-colors pl-4 py-1 ${
                      location.pathname === link.to ? "text-accent" : "text-foreground hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors px-2 py-1 ${
                    location.pathname === link.to ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
