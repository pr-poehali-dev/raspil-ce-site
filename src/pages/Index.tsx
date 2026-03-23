import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const advantages = [
  { icon: "Ruler", title: "Точность до 1 мм", desc: "Профессиональное оборудование обеспечивает идеальную точность раскроя" },
  { icon: "Zap", title: "Быстрый срок", desc: "Выполняем заказы от 1 дня. Срочные заказы — в день обращения" },
  { icon: "Shield", title: "Гарантия качества", desc: "Каждая деталь проверяется перед выдачей. Брак переделываем бесплатно" },

];

const materials = [
  { name: "ЛДСП", desc: "Ламинированная ДСП для мебели", thickness: "16–28 мм", colors: "200+ декоров" },
  { name: "ДСП", desc: "Древесно-стружечная плита", thickness: "10–25 мм", colors: "Натуральные оттенки" },
  { name: "МДФ", desc: "Плита средней плотности", thickness: "6–22 мм", colors: "Гладкая поверхность" },
  { name: "Фанера", desc: "Слоистая плита из шпона", thickness: "4–21 мм", colors: "Берёза, хвоя" },
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative pt-16 md:pt-20 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "url(https://cdn.poehali.dev/projects/8487f367-b1ab-4b69-8b2c-e9177904ee7a/files/58568ee8-42b9-4c1f-b58f-389b298c2f43.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(25, 45%, 10%, 0.92) 0%, hsl(28, 42%, 18%, 0.85) 60%, hsl(32, 48%, 22%, 0.80) 100%)" }} />
        <div className="absolute inset-0 wood-texture opacity-30" />

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm mb-6">
              <Icon name="Star" size={14} />
              <span>Профессиональный распил на заказ</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-amber-50 leading-tight mb-6">
              Распил
              <span className="block text-amber-400">ДСП и ЛДСП</span>
              по вашим размерам
            </h1>
            <p className="text-amber-100/70 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Изготовим детали для вашей мебели с точностью до миллиметра.
              Широкий выбор материалов, быстрые сроки, доступные цены.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/catalog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg gold-gradient text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <Icon name="BookOpen" size={20} />
                Смотреть каталог
              </Link>
              <Link
                to="/contacts"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-amber-400/40 text-amber-200 font-semibold text-lg hover:bg-white/10 transition-all duration-200"
              >
                <Icon name="Phone" size={20} />
                Оформить заказ
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10">
              {[
                { val: "10+", label: "лет на рынке" },
                { val: "5000+", label: "выполненных заказов" },
                { val: "1 день", label: "минимальный срок" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-2xl font-bold text-amber-300">{stat.val}</div>
                  <div className="text-amber-100/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-800 mb-4">Наши преимущества</h2>
            <p className="text-stone-500 max-w-xl mx-auto">Почему клиенты выбирают Распил СЕ для своих проектов</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => (
              <div key={adv.title} className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={adv.icon} size={22} className="text-white" />
                </div>
                <h3 className="font-serif font-semibold text-stone-800 mb-2">{adv.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-800 mb-4">Материалы для распила</h2>
            <p className="text-stone-500 max-w-xl mx-auto">Работаем с широким ассортиментом плитных материалов</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((mat) => (
              <div key={mat.name} className="group relative overflow-hidden rounded-xl border border-stone-200 hover:border-amber-400 transition-all duration-300 hover:shadow-lg">
                <div className="wood-gradient p-6 pb-4">
                  <h3 className="font-serif text-2xl font-bold text-amber-100">{mat.name}</h3>
                  <p className="text-amber-200/60 text-sm mt-1">{mat.desc}</p>
                </div>
                <div className="bg-white p-5">
                  <div className="flex items-center gap-2 text-sm text-stone-600 mb-2">
                    <Icon name="Layers" size={14} className="text-amber-600" />
                    <span>Толщина: <strong>{mat.thickness}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <Icon name="Palette" size={14} className="text-amber-600" />
                    <span>{mat.colors}</span>
                  </div>
                  <Link to="/catalog" className="mt-4 inline-flex items-center gap-1 text-amber-700 text-sm font-medium hover:text-amber-500 transition-colors">
                    Подробнее <Icon name="ArrowRight" size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/catalog" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-amber-700 text-amber-700 font-semibold hover:bg-amber-700 hover:text-white transition-all duration-200">
              Открыть полный каталог
              <Icon name="ArrowRight" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 wood-gradient relative overflow-hidden">
        <div className="absolute inset-0 wood-texture opacity-40" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-100 mb-4">Готовы сделать заказ?</h2>
          <p className="text-amber-100/70 text-lg mb-8 max-w-lg mx-auto">
            Свяжитесь с нами любым удобным способом — рассчитаем стоимость бесплатно
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+79000000000" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg gold-gradient text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              <Icon name="Phone" size={20} />
              Позвонить нам
            </a>
            <Link to="/contacts" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-amber-400/40 text-amber-200 font-semibold text-lg hover:bg-white/10 transition-all duration-200">
              <Icon name="MessageSquare" size={20} />
              Написать нам
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}