import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Cpu, BarChart2, Briefcase, Users, CheckCircle, MessageCircle, Youtube } from "lucide-react";
import Section from "@/components/Section";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";


export default function LandingPage() {
  // Для заголовка страницы и scrollspy
  useEffect(() => {
    document.title = "Analytics Performance";
  }, []);

  // Для мобильного меню
  const [menuOpen, setMenuOpen] = useState(false);

  // Для scrollspy подсветки меню
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const ids = ["hero", "about", "services", "cases", "faq", "contact"];
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Форма и валидация
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const SERVICE_ID = "analytics_performance";

  const TEMPLATE_ID = "template_t5gixr2";

  const PUBLIC_KEY = "oIMk4tixH37Jvt6ad";

  const onSubmit = async (data: any) => {
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
      toast.success("Сообщение отправлено!", {
        duration: 6000,
        style: {
          fontSize: "1.25rem",
          padding: "1.25rem 1.5rem",
          background: "#1f2937",
          color: "#fff",
          border: "1px solid #4f46e5",
          borderRadius: "0.75rem",
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Ошибка отправки. Попробуйте позже.", {
        duration: 6000,
        style: {
          fontSize: "1.25rem",
          padding: "1.25rem 1.5rem",
          background: "#1f2937",
          color: "#fff",
          border: "1px solid #ef4444",
          borderRadius: "0.75rem",
        },
      });
    }
  };
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black font-sans overflow-x-hidden text-white">
      <Helmet>
        <title>Analytics Performance</title>
        <meta name="description" content="BI-аналитика под ключ для роста вашего бизнеса" />
        <meta property="og:title" content="Analytics Performance" />
        <meta property="og:description" content="Превращаем данные в капитал. BI, который прогнозирует, предупреждает и вдохновляет." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Навигация */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/70 border-b border-gray-800 p-4 flex justify-between items-center text-white px-6 md:px-12 shadow-lg">
        <span
          className="font-extrabold text-2xl tracking-wide text-blue-400 cursor-pointer select-none"
          onClick={() => scrollTo("hero")}
        >
          Analytics Performance
        </span>

        {/* Десктоп меню */}
        <div className="space-x-6 hidden md:flex">
          {["about", "services", "cases", "faq", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-gray-300 hover:text-blue-400 transition font-medium ${
                activeSection === id ? "text-blue-400 font-semibold" : ""
              }`}
            >
              {id === "about" && "О нас"}
              {id === "services" && "Услуги"}
              {id === "cases" && "Кейсы"}
              {id === "faq" && "FAQ"}
              {id === "contact" && "Контакты"}
            </button>
          ))}
        </div>

        {/* Мобильное меню бургер */}
        <button
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition-transform origin-left ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform origin-left ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Мобильное меню выпадающее */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden fixed top-16 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-gray-800 z-40 flex flex-col items-center space-y-4 py-4"
        >
          {["about", "services", "cases", "faq", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-white text-lg font-medium ${
                activeSection === id ? "text-blue-400 font-semibold" : ""
              }`}
            >
              {id === "about" && "О нас"}
              {id === "services" && "Услуги"}
              {id === "cases" && "Кейсы"}
              {id === "faq" && "FAQ"}
              {id === "contact" && "Контакты"}
            </button>
          ))}
        </motion.div>
      )}

      {/* Hero */}
      <Section id="hero" title="" innerWidth="xl:max-w-[90vw]" width="w-full" className="px-6 md:px-12">
        <div className="h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center relative overflow-hidden">
          {/* Фон-паттерн */}
          <div
            className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-repeat"
            aria-hidden="true"
          />
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold max-w-4xl leading-tight relative z-10"
          >
            BI-аналитика <br />под ключ <span className="text-blue-500">для роста</span>, а не для отчётности
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-6 max-w-2xl text-xl md:text-2xl text-gray-300 relative z-10"
          >
            Превращаем данные в капитал. BI, который прогнозирует, предупреждает и вдохновляет.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-10 flex flex-wrap justify-center gap-6 relative z-10"
          >
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition"
            >
              Запросить консультацию <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              className="border border-blue-500 text-blue-500 bg-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:text-white transition"
            >
              Скачать презентацию
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Промо / видео */}
      <Section className="bg-gray-900 py-24 border-y border-gray-800 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-white text-center">
          <h3 className="text-3xl font-semibold mb-8 tracking-wide flex items-center justify-center gap-2">
            <Youtube className="w-7 h-7 text-blue-400" /> Промо-видео / Инфографика
          </h3>
          <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden mx-auto shadow-lg border border-gray-700">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Промо-видео"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* О компании */}
      <Section id="about" title="О компании" underlineWidth="160px" innerWidth="xl:max-w-[90vw]" width="w-full" className="px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="space-y-6 text-gray-300">
            <p className="text-lg">
              Мы верим, что данные — это валюта будущего.{" "}
              <strong className="text-blue-400">Analytics Performance</strong> переводит ваш бизнес в новую эпоху, где решения основаны на логике, а не на догадках.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-400 text-base">
              <li>
                <CheckCircle className="inline w-5 h-5 mr-2 text-blue-400" />
                Опыт более 7 лет в BI и цифровой трансформации
              </li>
              <li>
                <Users className="inline w-5 h-5 mr-2 text-blue-400" />
                Работа по всей России и СНГ
              </li>
              <li>
                <Briefcase className="inline w-5 h-5 mr-2 text-blue-400" />
                Гарантированное соблюдение NDA
              </li>
            </ul>
          </div>
          <div className="w-full h-64 bg-gradient-to-tr from-blue-900 via-blue-700 to-blue-600 rounded-3xl flex items-center justify-center text-white text-lg font-semibold shadow-lg select-none">
            Фото команды / офиса / сертификатов
          </div>
        </div>
      </Section>

      {/* Услуги */}
      <Section id="services" title="Пакеты услуг" innerWidth="xl:max-w-[90vw]" width="w-full" className="px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <Cpu className="w-10 h-10 text-blue-400 mb-3" />,
              title: "Стартовый",
              desc: "Быстрый запуск BI-аналитики, 3–5 дашбордов, обучение команды — от 400 000 ₽",
            },
            {
              icon: <BarChart2 className="w-10 h-10 text-blue-400 mb-3" />,
              title: "Расширенный",
              desc: "Индивидуальная архитектура, 10+ отчётов, интеграция с CRM/ERP — от 700 000 ₽",
            },
            {
              icon: <Briefcase className="w-10 h-10 text-blue-400 mb-3" />,
              title: "Сопровождение",
              desc: "Поддержка, обновления, аналитика по запросу — от 50 000 ₽/мес",
            },
          ].map(({ icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-800 p-8 rounded-3xl shadow-2xl cursor-default"
            >
              {icon}
              <h4 className="text-2xl font-semibold mb-4 text-blue-400">{title}</h4>
              <p className="text-gray-300 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Кейсы */}
      <Section id="cases" title="Кейсы и результаты" innerWidth="xl:max-w-[90vw]" width="w-full" className="px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <BarChart2 className="inline w-6 h-6 text-blue-400 mr-2" />,
              sector: "Ритейл",
              results: ["Сокращение подготовки отчётов с 2 месяцев до 1 дня"],
            },

    {
              icon: <Briefcase className="inline w-6 h-6 text-blue-400 mr-2" />,
              sector: "Производство",
              results: ["Мониторинг в реальном времени, снижение отклонений в 5 раз"],
            },
            {
              icon: <Cpu className="inline w-6 h-6 text-blue-400 mr-2" />,
              sector: "Финансы",
              results: ["Автоматизация CFO-аналитики, визуализация P&L, соблюдение комплаенса"],
            },
          ].map(({ icon, sector, results }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="bg-gray-800 p-7 rounded-3xl shadow-lg"
            >
              <h5 className="font-bold text-2xl text-blue-400 mb-4 flex items-center">
                {icon}
                {sector}
              </h5>
              <ul className="list-disc list-inside text-gray-400 space-y-3 text-lg">
                {results.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ аккордеон */}
      <Section id="faq" title="Часто задаваемые вопросы" innerWidth="xl:max-w-[90vw]" width="w-full" className="px-6 md:px-12">
        <FaqAccordion
          items={[
            {
              question: "Что такое BI и зачем он нужен?",
              answer: "Это ваш навигатор в океане данных. BI помогает понять, куда двигаться и как избежать подводных камней.",
            },
            {
              question: "С какими системами вы работаете?",
              answer: "1С, CRM, ERP, PostgreSQL, Excel, API — интегрируем всё, что движется и не движется.",
            },
            {
              question: "Для малого бизнеса это актуально?",
              answer: "Не просто актуально — необходимо. BI помогает расти уверенно и быстро.",
            },
            {
              question: "Как долго длится запуск?",
              answer: "От 2 недель до 2 месяцев. Всё зависит от архитектуры данных и целей.",
            },
            {
              question: "Будет ли обучение?",
              answer: "Да. Вебинары, гайды, чаты с ответами, Zoom и поддержка 24/7.",
            },
          ]}
        />
      </Section>

      {/* Контакты */}
      <Section id="contact" title="Контакты" innerWidth="xl:max-w-[90vw]" width="w-full" className="px-6 md:px-12">
        <p className="text-center max-w-3xl mx-auto text-gray-300 text-lg">
          Оставьте заявку — мы свяжемся с вами и обсудим проект. Ответ приходит в течение 1 рабочего дня.
        </p>
        <form
          className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <input
            type="text"
            {...register("name", { required: "Введите имя" })}
            placeholder="Имя"
            className={`p-4 rounded-xl bg-gray-800 text-white w-full border focus:outline-none focus:ring-2 ${
              errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:ring-blue-500"
            }`}
          />
          {errors.name && <span className="text-red-500 text-sm col-span-2">{errors.name.message}</span>}

          <input
            type="email"
            {...register("email", {
              required: "Введите email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Введите корректный email",
              },
            })}
            placeholder="Email"
            className={`p-4 rounded-xl bg-gray-800 text-white w-full border focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:ring-blue-500"
            }`}
          />
          {errors.email && <span className="text-red-500 text-sm col-span-2">{errors.email.message}</span>}

          <textarea
            {...register("message")}
            placeholder="Сообщение"
            rows={5}
            className="p-4 rounded-xl bg-gray-800 text-white md:col-span-2 w-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="md:col-span-2 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Отправить <Mail className="w-5 h-5" />
          </Button>
        </form>
        <div className="mt-8 text-center space-y-1 text-gray-400 text-sm select-text">
          <p>Email: info@analytics-performance.ru</p>
          <p>Telegram: @analyticsperformance</p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-xs py-6 border-t border-gray-800 mt-20 select-none">
        Сделано с ❤️ в Analytics Performance
        <div className="mt-2 flex justify-center space-x-4 text-gray-400">
          <a href="https://t.me/analyticsperformance" target="_blank" rel="noreferrer" aria-label="Telegram" className="hover:text-blue-400 transition">
            <Users className="w-5 h-5" />
          </a>
          <a href="mailto:info@analytics-performance.ru" aria-label="Email" className="hover:text-blue-400 transition">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </footer>

      <Toaster position="bottom-right" />
    </div>
  );
}

// Аккордеон для FAQ
function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {items.map(({ question, answer }, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="border border-gray-700 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="font-semibold text-lg">{question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block w-5 h-5 text-blue-400"
              >
                +
              </motion.span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="px-6 overflow-hidden text-gray-300"
            >
              {isOpen && <p className="py-2">{answer}</p>}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
