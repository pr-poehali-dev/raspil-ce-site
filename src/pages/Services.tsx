import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Scissors",
    title: "Распил ДСП и ЛДСП",
    desc: "Раскрой плит по вашим чертежам или размерам. Форматно-раскроечный станок обеспечивает точность ±0,5 мм. Принимаем файлы DXF, Excel-таблицы или список с размерами.",
    details: ["Любые размеры деталей", "Пакетная порезка", "Минимальный остаток", "Оптимизация раскроя"],
    price: "от 30 ₽/пог. м",
  },
  {
    icon: "AlignLeft",
    title: "Кромление ПВХ-кромкой",
    desc: "Оклейка торцов деталей кромкой ПВХ 0,4 мм и 2 мм. Защищает деталь от влаги, придаёт законченный вид. Более 100 цветов в наличии.",
    details: ["Кромка 0,4 мм и 2 мм", "100+ цветов", "Радиусные торцы", "Клей-расплав"],
    price: "от 15 ₽/пог. м",
  },
  {
    icon: "Drill",
    title: "Присадка отверстий",
    desc: "Сверление отверстий под мебельные стяжки, петли и направляющие. Работаем по схемам или стандартным позициям ГОСТ.",
    details: ["Отверстия под петли", "Под мебельные стяжки", "Под направляющие", "По чертежам"],
    price: "от 5 ₽/отв.",
  },
  {
    icon: "Circle",
    title: "Радиусные детали",
    desc: "Изготовление деталей с закруглёнными углами и криволинейными формами. Используем ЧПУ-фрезер для сложных контуров.",
    details: ["Закругление углов", "Криволинейный контур", "ЧПУ точность", "Любой радиус"],
    price: "от 120 ₽/деталь",
  },
  {
    icon: "Layers",
    title: "Шлифовка торцов",
    desc: "Шлифование торцов деталей для подготовки под покраску или финишную отделку. Зернистость на выбор.",
    details: ["Шлифовка Р120–Р320", "Подготовка под покраску", "Удаление заусенцев", "Матовый торец"],
    price: "от 8 ₽/пог. м",
  },

];

const steps = [
  { num: "01", title: "Заявка", desc: "Передаёте список деталей — таблица Excel, чертёж или просто размеры" },
  { num: "02", title: "Расчёт", desc: "В течение 1 часа высылаем смету с точной стоимостью" },
  { num: "03", title: "Оплата", desc: "Оплачиваете удобным способом: наличные, карта, перевод" },
  { num: "04", title: "Изготовление", desc: "Производим детали в срок от 1 рабочего дня" },
  { num: "05", title: "Получение", desc: "Забираете готовые детали самовывозом" },
];

export default function Services() {
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
              <span className="text-amber-300">Услуги</span>
            </nav>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-amber-50 mb-3">Наши услуги</h1>
            <p className="text-amber-100/60 text-lg">Полный цикл обработки плитных материалов</p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-stone-50 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 group">
                <div className="wood-gradient p-6">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={22} className="text-amber-300" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-amber-50">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <ul className="space-y-1.5 mb-4">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-stone-600">
                        <Icon name="Check" size={13} className="text-amber-600 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="font-serif font-bold text-amber-700 text-lg">{service.price}</span>
                    <Link to="/contacts" className="text-sm text-amber-600 hover:text-amber-800 font-medium transition-colors">
                      Заказать →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-4 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-800 mb-2">Как мы работаем</h2>
            <p className="text-stone-500">От заявки до получения готовых деталей</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-amber-200 z-0" />
                )}
                <div className="relative z-10 bg-white rounded-xl p-5 border border-stone-200 text-center hover:border-amber-300 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mx-auto mb-3">
                    <span className="font-serif font-bold text-white text-sm">{step.num}</span>
                  </div>
                  <h4 className="font-serif font-semibold text-stone-800 mb-1">{step.title}</h4>
                  <p className="text-stone-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}