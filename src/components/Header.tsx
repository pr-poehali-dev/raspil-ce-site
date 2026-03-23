import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Главная", path: "/" },
  { label: "Каталог", path: "/catalog" },
  { label: "Услуги", path: "/services" },
  { label: "О компании", path: "/about" },
  { label: "FAQ", path: "/faq" },
  { label: "Контакты", path: "/contacts" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 wood-gradient shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shadow-md">
              <Icon name="Scissors" size={20} className="text-white" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold text-amber-100 tracking-wide">
                Распил СЕ
              </span>
              <p className="text-amber-300/70 text-xs tracking-widest uppercase hidden md:block">
                Мастерская распила
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-amber-600/30 text-amber-200 border border-amber-500/30"
                    : "text-amber-100/80 hover:text-amber-100 hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="tel:+79000000000"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded gold-gradient text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Icon name="Phone" size={16} />
            <span>Позвонить</span>
          </a>

          <button
            className="md:hidden text-amber-100 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-stone-900/95 backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-amber-600/30 text-amber-200"
                    : "text-amber-100/80 hover:text-amber-100 hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+79000000000"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded gold-gradient text-white text-sm font-semibold"
            >
              <Icon name="Phone" size={16} />
              <span>Позвонить</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
