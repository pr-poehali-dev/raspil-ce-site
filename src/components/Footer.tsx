import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="wood-gradient text-amber-100/80 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center">
                <Icon name="Scissors" size={18} className="text-white" />
              </div>
              <span className="font-serif text-lg font-bold text-amber-100">Распил СЕ</span>
            </div>
            <p className="text-sm leading-relaxed text-amber-100/60">
              Профессиональный распил ДСП и ЛДСП на заказ. Точность, качество, оперативность.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-amber-200 mb-4">Навигация</h4>
            <ul className="space-y-2">
              {[
                { label: "Каталог материалов", path: "/catalog" },
                { label: "Услуги распила", path: "/services" },
                { label: "О компании", path: "/about" },
                { label: "Часто задаваемые вопросы", path: "/faq" },
                { label: "Контакты", path: "/contacts" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-amber-100/60 hover:text-amber-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-amber-200 mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-amber-100/60">
                <Icon name="Phone" size={14} className="text-amber-400 shrink-0" />
                <a href="tel:+79275015297" className="hover:text-amber-200 transition-colors">
                  +7 (927) 501-52-97
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-amber-100/60">
                <Icon name="Mail" size={14} className="text-amber-400 shrink-0" />
                <a href="mailto:r-raduga030@yandex.ru" className="hover:text-amber-200 transition-colors">
                  r-raduga030@yandex.ru
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-amber-100/60">
                <Icon name="MapPin" size={14} className="text-amber-400 shrink-0 mt-0.5" />
                <span>г. Волгоград, ул. Студёная, 9</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-amber-100/60">
                <Icon name="Clock" size={14} className="text-amber-400 shrink-0" />
                <span>Пн–Пт: 9:00–18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-amber-100/40">
            © 2024 Распил СЕ. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}