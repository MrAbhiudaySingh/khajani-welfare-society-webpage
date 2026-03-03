import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/campaigns", label: "Campaigns" },
    { to: "/projects/brij-surabhi", label: "Brij-Surabhi" },
    { to: "/projects/brij-hunar", label: "Brij-Hunar" },
    { to: "/collaborations", label: "Collaborations" },
    { to: "/media", label: "Media" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold font-display text-2xl shadow-md group-hover:scale-110 transition-transform">
              K
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-wide text-primary leading-none">KHAJANI</span>
              <span className="font-sans text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Welfare Society</span>
            </div>
          </Link>

          <nav className="hidden lg:flex space-x-6 items-center h-full">
            {navLinks.map((link) => (
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
              {navLinks.map((link) => (
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
