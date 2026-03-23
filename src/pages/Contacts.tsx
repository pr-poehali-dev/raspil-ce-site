import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
              <span className="text-amber-300">Контакты</span>
            </nav>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-amber-50 mb-3">Контакты</h1>
            <p className="text-amber-100/60 text-lg">Свяжитесь с нами любым удобным способом</p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-stone-50 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-stone-200 hover:border-amber-300 transition-colors">
                <h2 className="font-serif text-xl font-bold text-stone-800 mb-5">Контактная информация</h2>
                <div className="space-y-4">
                  {[
                    { icon: "Phone", label: "Телефон", val: "+7 (927) 501-52-97", href: "tel:+79275015297" },
                    { icon: "Mail", label: "Email", val: "r-raduga030@yandex.ru", href: "mailto:r-raduga030@yandex.ru" },
                    { icon: "MapPin", label: "Адрес", val: "г. Волгоград, ул. Студёная, 9", href: null },
                    { icon: "Clock", label: "Режим работы", val: "Пн–Пт: 9:00–18:00 / Сб: 9:00–14:00", href: null },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                        <Icon name={c.icon} size={16} className="text-white" />
                      </div>
                      <div>
                        <div className="text-stone-400 text-xs font-medium uppercase tracking-wide">{c.label}</div>
                        {c.href ? (
                          <a href={c.href} className="text-stone-700 font-medium hover:text-amber-700 transition-colors text-sm mt-0.5 block">
                            {c.val}
                          </a>
                        ) : (
                          <div className="text-stone-700 text-sm mt-0.5">{c.val}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="MessageCircle" size={18} className="text-amber-600" />
                  <span className="font-serif font-semibold text-stone-800">Мессенджеры</span>
                </div>
                <p className="text-stone-500 text-sm mb-4">Удобно написать в WhatsApp или Telegram</p>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/79275015297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-colors"
                  >
                    <Icon name="MessageCircle" size={16} />
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/+79275015297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-sky-500 text-white text-sm font-semibold hover:bg-sky-600 transition-colors"
                  >
                    <Icon name="Send" size={16} />
                    Telegram
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 overflow-hidden h-52">
                <div className="wood-gradient h-full flex items-center justify-center text-amber-100/40">
                  <div className="text-center">
                    <Icon name="MapPin" size={32} className="mx-auto mb-2 text-amber-400" />
                    <p className="text-sm">Карта загружается...</p>
                    <p className="text-xs mt-1 text-amber-100/30">г. Москва, ул. Производственная, 12</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200 h-fit">
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Icon name="Check" size={28} className="text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">Заявка отправлена!</h3>
                  <p className="text-stone-500 text-sm">Мы свяжемся с вами в течение 1 часа в рабочее время.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", phone: "", message: "" }); }}
                    className="mt-6 text-amber-700 text-sm font-medium hover:text-amber-500 transition-colors"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-xl font-bold text-stone-800 mb-1">Оставить заявку</h2>
                  <p className="text-stone-500 text-sm mb-6">Перезвоним в течение 1 часа в рабочее время</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-500 uppercase tracking-wide mb-1.5">
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Иван Иванов"
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 text-stone-800 placeholder-stone-300 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-500 uppercase tracking-wide mb-1.5">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+7 (___) ___-__-__"
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 text-stone-800 placeholder-stone-300 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-500 uppercase tracking-wide mb-1.5">
                        Описание заказа
                      </label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Опишите ваш заказ: материал, размеры, количество деталей..."
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 text-stone-800 placeholder-stone-300 focus:outline-none focus:border-amber-400 transition-colors text-sm resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-lg gold-gradient text-white font-semibold text-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.01]"
                    >
                      Отправить заявку
                    </button>
                    <p className="text-stone-400 text-xs text-center">
                      Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}