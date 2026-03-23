import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Какие материалы вы распиливаете?",
    a: "Мы работаем с ЛДСП, ДСП, МДФ, ХДФ, фанерой и OSB. Толщина от 4 до 40 мм. Если у вас нестандартный материал — уточните по телефону.",
  },
  {
    q: "Как передать размеры деталей?",
    a: "Принимаем любой удобный формат: Excel-таблица, чертёж DXF/DWG, список в мессенджере или на бумаге. Главное — ширина, длина и количество каждой детали. При необходимости поможем составить карту раскроя.",
  },
  {
    q: "Какова минимальная партия заказа?",
    a: "Минимальной партии нет. Берёмся за любой заказ — хоть одна деталь, хоть тысяча. Цена за деталь при небольших тиражах рассчитывается индивидуально.",
  },
  {
    q: "Какова точность распила?",
    a: "Наш форматно-раскроечный станок даёт точность ±0,5 мм. Для радиусных деталей на ЧПУ-фрезере — ±0,2 мм. Этого достаточно для сборки мебели без дополнительной подгонки.",
  },
  {
    q: "Сколько времени занимает выполнение заказа?",
    a: "Стандартный заказ выполняем за 1–3 рабочих дня. Срочный заказ — в день обращения (при наличии материала на складе, доплата 30%). Сроки уточняются при оформлении.",
  },
  {
    q: "Можно ли сделать кромление вместе с распилом?",
    a: "Да, это одна из наших основных услуг. Кромим ПВХ-кромкой 0,4 мм (эконом) и 2 мм (премиум). Есть более 100 цветов в наличии. Указывайте при заказе, какие торцы нужно обклеить.",
  },
  {
    q: "Вы работаете с физическими лицами?",
    a: "Конечно! Принимаем заказы от всех: физических лиц, ИП, ООО. Для юридических лиц работаем по договору с НДС.",
  },
  {
    q: "Как рассчитывается стоимость?",
    a: "Стоимость складывается из: цены материала × площадь деталей + стоимость распила + кромление (при необходимости) + доставка. После получения списка деталей высылаем точный расчёт в течение 1 часа.",
  },
  {
    q: "Есть ли у вас доставка?",
    a: "Да. Доставляем по городу и области. Стоимость зависит от адреса и объёма. Также можно забрать самовывозом с нашего склада — бесплатно.",
  },
  {
    q: "Что делать, если деталь не подошла по размеру?",
    a: "Если ошибка произошла по нашей вине — переделаем бесплатно. Если размеры были указаны неверно заказчиком — изготовим новые по льготной цене. Сначала всегда проверяем спецификацию вместе с клиентом.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

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
              <span className="text-amber-300">FAQ</span>
            </nav>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-amber-50 mb-3">
              Часто задаваемые вопросы
            </h1>
            <p className="text-amber-100/60 text-lg">Ответы на популярные вопросы о нашей работе</p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-stone-50 flex-1">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-amber-300 transition-colors"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  <span className="font-serif font-semibold text-stone-800 group-hover:text-amber-700 transition-colors">
                    {faq.q}
                  </span>
                  <Icon
                    name={openIdx === i ? "ChevronUp" : "ChevronDown"}
                    size={18}
                    className="text-amber-600 shrink-0"
                  />
                </button>
                {openIdx === i && (
                  <div className="px-6 pb-5 border-t border-stone-100">
                    <p className="text-stone-600 leading-relaxed pt-4 text-sm">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 wood-gradient rounded-xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 wood-texture opacity-40" />
            <div className="relative">
              <h3 className="font-serif text-xl font-bold text-amber-100 mb-2">Остались вопросы?</h3>
              <p className="text-amber-100/60 text-sm mb-5">Свяжитесь с нами — ответим быстро</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+79000000000"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg gold-gradient text-white font-semibold text-sm shadow hover:shadow-md transition-all hover:scale-105"
                >
                  <Icon name="Phone" size={16} />
                  Позвонить
                </a>
                <Link
                  to="/contacts"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-amber-400/40 text-amber-200 font-semibold text-sm hover:bg-white/10 transition-all"
                >
                  <Icon name="MessageSquare" size={16} />
                  Написать
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
