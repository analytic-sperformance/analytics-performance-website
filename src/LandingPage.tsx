import { useEffect } from "react";
import { Button } from "./src/components/ui/button";
import { motion } from "framer-motion";

export default function LandingPage() {
  useEffect(() => {
    document.title = "Analytics Performance";
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const Section = ({ id, title, children }: any) => (
    <section id={id} className="py-24 px-4 md:px-16 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{title}</h2>
      <div className="text-white text-lg space-y-4">{children}</div>
    </section>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/50 border-b border-gray-700 p-4 flex justify-between items-center text-white">
        <span className="font-semibold text-xl">Analytics Performance</span>
        <div className="space-x-4">
          <Button variant="ghost" onClick={() => scrollTo("about")}>О нас</Button>
          <Button variant="ghost" onClick={() => scrollTo("services")}>Услуги</Button>
          <Button variant="ghost" onClick={() => scrollTo("cases")}>Кейсы</Button>
          <Button variant="ghost" onClick={() => scrollTo("contact")}>Контакты</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4 text-center bg-gradient-to-b from-gray-900 to-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            BI-аналитика под ключ для вашего бизнеса
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Визуализируем, автоматизируем и превращаем данные в решения
          </p>
          <div className="space-x-4">
            <Button onClick={() => scrollTo("contact")}>Запросить консультацию</Button>
            <Button variant="outline">Скачать презентацию</Button>
          </div>
        </motion.div>
      </section>

      <Section id="about" title="О компании">
        <p>
          Analytics Performance — это BI-партнёр, который помогает малому и среднему бизнесу внедрять аналитику. Мы делаем прозрачную архитектуру, удобные дашборды и настраиваем процессы под ключ.
        </p>
        <p>
          Руководитель — senior BI-архитектор с 7-летним опытом. Работаем по всей РФ и СНГ. Соблюдаем NDA.
        </p>
      </Section>

      <Section id="services" title="Пакеты услуг">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Стартовый:</strong> развёртывание BI, 3–5 дашбордов, обучение — от 400 тыс ₽
          </li>
          <li>
            <strong>Расширенный:</strong> архитектура, интеграции, 10+ дашбордов, документация — от 700 тыс ₽
          </li>
          <li>
            <strong>Сопровождение:</strong> поддержка, обновления, адаптация — от 50 тыс ₽/мес
          </li>
        </ul>
      </Section>

      <Section id="cases" title="Кейсы">
        <p><strong>Ритейл:</strong> Сократили подготовку отчётов с 2 недель до 1 дня. BI на Superset, интеграция с CRM и ERP.</p>
        <p><strong>Производство:</strong> Настроили мониторинг KPI, визуализацию логистики и склада, ускорили отчётность в 5 раз.</p>
      </Section>

      <Section id="contact" title="Контакты">
        <p>Оставьте заявку — мы свяжемся и обсудим ваш проект.</p>
        <form
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
          }}
        >
          <input type="text" placeholder="Имя" required className="p-3 rounded-lg bg-gray-700 text-white" />
          <input type="email" placeholder="Email" required className="p-3 rounded-lg bg-gray-700 text-white" />
          <textarea placeholder="Сообщение" rows={4} className="p-3 rounded-lg bg-gray-700 text-white md:col-span-2" />
          <Button type="submit" className="md:col-span-2">Отправить</Button>
        </form>
        <p className="mt-6">Email: info@analytics-performance.ru</p>
        <p>Telegram: @analyticsperformance</p>
      </Section>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm py-6 border-t border-gray-700">
        © 2025 Analytics Performance. Все права защищены.
      </footer>
    </div>
  );
}
