import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const values = [
  { icon: "Target", title: "Точность", desc: "Используем форматно-раскроечные станки с ЧПУ управлением. Отклонение — не более 0,5 мм." },
  { icon: "Heart", title: "Забота о клиенте", desc: "Помогаем оптимизировать раскрой, чтобы вы экономили на материале." },
  { icon: "Award", title: "Опыт", desc: "Более 10 лет в обработке плитных материалов. Тысячи довольных клиентов." },
  { icon: "Leaf", title: "Экология", desc: "Работаем с сертифицированными материалами E1. Безопасно для вашего дома." },
];

const team = [
  { name: "Сергей Евгеньевич", role: "Директор и мастер", exp: "15 лет опыта" },
  { name: "Алексей", role: "Оператор ЧПУ", exp: "8 лет опыта" },
  { name: "Марина", role: "Менеджер заказов", exp: "5 лет опыта" },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="pt-16 md:pt-20">
        <div className="wood-gradient py-14 relative overflow-hidden">
          <div className="absolute inset-0 wood-texture opacity-40" />
          <div className="relative container mx-auto px-4">
            <nav className="flex items-center gap-2 text-amber-300/60 text-sm mb-4">
              <Link to="/" className="hover:text-amber-300 transition-colors">Главная</Link>
              <Icon name="ChevronRight" size={14} />
              <span className="text-amber-300">О компании</span>
            </nav>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-amber-50 mb-3">О компании</h1>
            <p className="text-amber-100/60 text-lg">Мастерская распила ДСП и ЛДСП</p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-stone-50 flex-1">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-800 mb-4">
                Распил СЕ — ваш надёжный партнёр
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Мы занимаемся профессиональным распилом ДСП и ЛДСП уже более 10 лет.
                За это время помогли тысячам клиентов воплотить мебельные проекты любой сложности —
                от простых полочек до целых кухонных гарнитуров и встроенных шкафов.
              </p>
              <p className="text-stone-600 leading-relaxed mb-4">
                Основатель компании — Сергей Евгеньевич — лично контролирует качество каждого заказа.
                Мы используем современное оборудование и работаем только с сертифицированными материалами
                ведущих производителей: Egger, Кроношпан, Ламарти.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                Принимаем заказы от частных лиц, дизайнеров интерьеров, строительных бригад и оптовых покупателей.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { val: "10+", label: "лет работы" },
                  { val: "5 000+", label: "заказов выполнено" },
                  { val: "98%", label: "довольных клиентов" },
                  { val: "1 день", label: "минимальный срок" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-4 border border-stone-200 text-center min-w-[100px]">
                    <div className="font-serif text-2xl font-bold text-amber-700">{s.val}</div>
                    <div className="text-stone-500 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="wood-gradient rounded-2xl p-8 text-amber-100/80 relative overflow-hidden">
                <div className="absolute inset-0 wood-texture opacity-40" />
                <div className="relative space-y-5">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={18} className="text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-amber-200 font-medium text-sm">Адрес производства</div>
                      <div className="text-amber-100/60 text-sm mt-0.5">г. Волгоград, ул. Студёная, 9</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={18} className="text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-amber-200 font-medium text-sm">Режим работы</div>
                      <div className="text-amber-100/60 text-sm mt-0.5">Пн–Пт: 9:00–18:00<br />Сб: 10:00–15:00</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={18} className="text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-amber-200 font-medium text-sm">Телефон</div>
                      <div className="text-amber-100/60 text-sm mt-0.5">+7 (927) 501-52-97</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Wrench" size={18} className="text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-amber-200 font-medium text-sm">Оборудование</div>
                      <div className="text-amber-100/60 text-sm mt-0.5">Форматно-раскроечный станок,<br />кромкооблицовочный станок, ЧПУ-фрезер</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-800 mb-2">Наши ценности</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all group text-center">
                <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={v.icon} size={24} className="text-white" />
                </div>
                <h3 className="font-serif font-bold text-stone-800 mb-2">{v.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-12 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-800 mb-2">Наша команда</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-6 border border-stone-200 text-center hover:border-amber-300 hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-full wood-gradient flex items-center justify-center mx-auto mb-3">
                  <Icon name="User" size={28} className="text-amber-200" />
                </div>
                <h4 className="font-serif font-bold text-stone-800">{member.name}</h4>
                <p className="text-amber-700 text-sm font-medium mt-0.5">{member.role}</p>
                <p className="text-stone-400 text-xs mt-1">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}