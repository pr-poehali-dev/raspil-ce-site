import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const categories = ["Все", "ЛДСП", "ДСП", "МДФ", "Фанера"];

const products = [
  {
    id: 1,
    category: "ЛДСП",
    name: "ЛДСП Egger 16 мм",
    desc: "Высококачественная ламинированная ДСП от немецкого производителя Egger. Устойчива к влаге и царапинам. Идеальна для корпусной мебели.",
    thickness: "16 мм",
    size: "2750 × 1830 мм",
    price: "от 850 ₽/лист",
    colors: "180 декоров",
    tag: "Популярное",
  },
  {
    id: 2,
    category: "ЛДСП",
    name: "ЛДСП Egger 18 мм",
    desc: "Усиленная плита для изготовления стенок шкафов, полок и фасадов. Повышенная жёсткость конструкции.",
    thickness: "18 мм",
    size: "2750 × 1830 мм",
    price: "от 950 ₽/лист",
    colors: "180 декоров",
    tag: null,
  },
  {
    id: 3,
    category: "ЛДСП",
    name: "ЛДСП Кроношпан 16 мм",
    desc: "Надёжная ЛДСП австрийского производства. Соответствует европейским стандартам по формальдегиду E1.",
    thickness: "16 мм",
    size: "2800 × 2070 мм",
    price: "от 780 ₽/лист",
    colors: "200+ декоров",
    tag: "Выгодно",
  },
  {
    id: 4,
    category: "ЛДСП",
    name: "ЛДСП Ламарти 16 мм",
    desc: "Отечественная ЛДСП с хорошим соотношением цены и качества. Подходит для бюджетных мебельных проектов.",
    thickness: "16 мм",
    size: "2750 × 1830 мм",
    price: "от 620 ₽/лист",
    colors: "120 декоров",
    tag: null,
  },
  {
    id: 5,
    category: "ДСП",
    name: "ДСП шлифованная 16 мм",
    desc: "Нешлифованная ДСП для скрытых элементов конструкции. Оптимальна для задних стенок и внутренних перегородок.",
    thickness: "16 мм",
    size: "2440 × 1220 мм",
    price: "от 450 ₽/лист",
    colors: "Нейтральный",
    tag: null,
  },
  {
    id: 6,
    category: "ДСП",
    name: "ДСП влагостойкая 22 мм",
    desc: "Специальная влагостойкая ДСП для кухонных и ванных проектов. Зелёная пропитка по всей толщине.",
    thickness: "22 мм",
    size: "2440 × 1220 мм",
    price: "от 680 ₽/лист",
    colors: "Зелёная / Нейтральная",
    tag: "Хит",
  },
  {
    id: 7,
    category: "МДФ",
    name: "МДФ шлифованный 10 мм",
    desc: "Плита средней плотности с гладкой поверхностью. Отлично подходит для фрезеровки фасадов и декоративных элементов.",
    thickness: "10 мм",
    size: "2800 × 2070 мм",
    price: "от 720 ₽/лист",
    colors: "Под покраску",
    tag: null,
  },
  {
    id: 8,
    category: "МДФ",
    name: "МДФ ламинированный 16 мм",
    desc: "МДФ с ламинированным покрытием. Превосходная поверхность для изготовления фасадов премиального класса.",
    thickness: "16 мм",
    size: "2800 × 2070 мм",
    price: "от 1100 ₽/лист",
    colors: "60+ цветов",
    tag: "Премиум",
  },
  {
    id: 9,
    category: "Фанера",
    name: "Фанера берёзовая 9 мм",
    desc: "Берёзовая фанера сорта ФК. Прочная, гибкая. Применяется для изготовления ящиков, ниш и фигурных деталей.",
    thickness: "9 мм",
    size: "1525 × 1525 мм",
    price: "от 580 ₽/лист",
    colors: "Натуральная",
    tag: null,
  },
  {
    id: 10,
    category: "Фанера",
    name: "Фанера берёзовая 18 мм",
    desc: "Толстая берёзовая фанера для несущих конструкций и столешниц. Высокая жёсткость и прочность.",
    thickness: "18 мм",
    size: "1525 × 1525 мм",
    price: "от 1050 ₽/лист",
    colors: "Натуральная",
    tag: null,
  },
];

export default function Catalog() {
  const [active, setActive] = useState("Все");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = active === "Все" || p.category === active;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

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
              <span className="text-amber-300">Каталог</span>
            </nav>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-amber-50 mb-3">
              Каталог материалов
            </h1>
            <p className="text-amber-100/60 text-lg">
              Выберите материал и узнайте стоимость распила
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 bg-stone-50 flex-1">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Поиск по каталогу..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-stone-200 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-400 transition-colors text-sm"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    active === cat
                      ? "gold-gradient text-white shadow-md"
                      : "bg-white border border-stone-200 text-stone-600 hover:border-amber-400 hover:text-amber-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-stone-400">
              <Icon name="PackageSearch" size={48} className="mx-auto mb-4 opacity-30" />
              <p>Ничего не найдено. Попробуйте изменить запрос.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="wood-gradient p-5 relative">
                    {product.tag && (
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-xs font-semibold gold-gradient text-white">
                        {product.tag}
                      </span>
                    )}
                    <span className="text-amber-400/60 text-xs font-medium uppercase tracking-wider">{product.category}</span>
                    <h3 className="font-serif text-xl font-bold text-amber-50 mt-1">{product.name}</h3>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-stone-500 text-sm leading-relaxed mb-4 flex-1">{product.desc}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-1.5 text-stone-400">
                          <Icon name="Layers" size={13} />Толщина
                        </span>
                        <span className="font-medium text-stone-700">{product.thickness}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-1.5 text-stone-400">
                          <Icon name="Maximize2" size={13} />Размер листа
                        </span>
                        <span className="font-medium text-stone-700">{product.size}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-1.5 text-stone-400">
                          <Icon name="Palette" size={13} />Цвета
                        </span>
                        <span className="font-medium text-stone-700">{product.colors}</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                      <span className="font-serif text-lg font-bold text-amber-700">{product.price}</span>
                      <Link
                        to="/contacts"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg gold-gradient text-white text-sm font-medium hover:shadow-md transition-all"
                      >
                        Заказать
                        <Icon name="ArrowRight" size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0">
              <Icon name="HelpCircle" size={22} className="text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-serif font-semibold text-stone-800">Не нашли нужный материал?</h4>
              <p className="text-stone-500 text-sm mt-1">Свяжитесь с нами — у нас большой склад и мы работаем под заказ</p>
            </div>
            <Link to="/contacts" className="shrink-0 px-5 py-2.5 rounded-lg border-2 border-amber-600 text-amber-700 font-semibold text-sm hover:bg-amber-600 hover:text-white transition-all">
              Связаться
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
