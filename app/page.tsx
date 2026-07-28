import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  BadgePercent,
  Car,
  CheckCircle2,
  CircleDollarSign,
  Map,
  Sailboat,
  Send,
  ShieldCheck,
  Star,
  UserCheck,
  UserRound,
  UsersRound,
} from "lucide-react";

const categories = [
  {
    title: "Обзорные экскурсии",
    text: "Главные достопримечательности Дубая и Абу-Даби за один день.",
    price: "от 3 500 ₽",
    cta: "Смотреть экскурсии",
    image: "/card-city.png",
    icon: Map,
  },
  {
    title: "Сафари в пустыне",
    text: "Дюны, барбекю, шоу и незабываемые закаты в пустыне.",
    price: "от 3 000 ₽",
    cta: "Смотреть экскурсии",
    image: "/card-safari.png",
    icon: Star,
  },
  {
    title: "Яхта",
    text: "Аренда яхты в Дубае - отдыхайте с комфортом на воде.",
    price: "от 5 500 ₽",
    cta: "Смотреть яхты",
    image: "/card-yacht.png",
    icon: Sailboat,
  },
  {
    title: "Кабриолет",
    text: "Аренда кабриолета - свобода, стиль и эмоции в каждом километре.",
    price: "от 2 200 ₽",
    cta: "Выбрать авто",
    image: "/card-cabrio.png",
    icon: Car,
  },
];

const popular = [
  {
    title: "Обзорная экскурсия Дубай",
    text: "Бурдж-Халифа, Дубай Марина, Пальма Джумейра и другие топ-локации.",
    price: "от 3 500 ₽",
    image: "/popular-dubai.png",
  },
  {
    title: "Обзорная экскурсия Абу-Даби",
    text: "Мечеть Шейха Зайда, Emirates Palace, набережная Корниш и другие места.",
    price: "от 4 500 ₽",
    image: "/popular-abu-dhabi.png",
  },
  {
    title: "Сафари на джипах",
    text: "Экстрим по дюнам, закат, шоу-программа и ужин в бедуинском лагере.",
    price: "от 3 000 ₽",
    image: "/popular-safari.png",
  },
];

const benefits = [
  {
    icon: UsersRound,
    title: "Местный организатор",
    text: "Мы находимся в Дубае и знаем все о лучших местах и сервисе.",
  },
  {
    icon: Star,
    title: "Более 300 отзывов на Авито",
    text: "Реальные отзывы и высокий рейтинг доверия от наших клиентов.",
  },
  {
    icon: CheckCircle2,
    title: "Все включено под ключ",
    text: "Трансфер, билеты, гид и поддержка - мы берем все заботы на себя.",
  },
];

const heroBenefits = [
  {
    icon: BadgePercent,
    title: "Ниже касс",
    text: "Цены ниже официальных касс и сервисов",
  },
  {
    icon: CircleDollarSign,
    title: "Без предоплаты",
    text: "Оплата после экскурсии или при получении билета",
  },
  {
    icon: UserCheck,
    title: "Местные гиды",
    text: "Русскоязычные гиды с лицензией",
  },
  {
    icon: ShieldCheck,
    title: "Надёжно и безопасно",
    text: "Официальные партнёры и комфортный сервис",
  },
];

const tickets = [
  {
    title: "LEGOLAND Dubai",
    oldPrice: "365 AED",
    price: "255 AED",
    image: "/ticket-legoland.png",
  },
  {
    title: "Aquaventure Waterpark",
    oldPrice: "399 AED",
    price: "275 AED",
    image: "/ticket-aquaventure.png",
  },
  {
    title: "Dubai Aquarium & Underwater Zoo",
    oldPrice: "220 AED",
    price: "165 AED",
    image: "/ticket-aquarium.png",
  },
  {
    title: "Ain Dubai (Bluewaters)",
    oldPrice: "150 AED",
    price: "95 AED",
    image: "/ticket-ain-dubai.png",
  },
];

const reviews = [
  {
    name: "Анна, Москва",
    text: "Были на обзорной экскурсии по Дубаю - все организовано отлично. Гид рассказал много интересного, посетили все топовые места.",
    date: "12 мая 2024",
  },
  {
    name: "Игорь, Санкт-Петербург",
    text: "Сафари в пустыне превзошло ожидания! Все четко по времени, классная программа и вкусный ужин.",
    date: "28 апреля 2024",
  },
  {
    name: "Екатерина, Казань",
    text: "Арендовали яхту на день рождения - все было супер. Чистая яхта, вежливый экипаж и потрясающие виды.",
    date: "5 мая 2024",
  },
];

const faqItems = [
  {
    question: "Как забронировать экскурсию?",
    answer: "Через Telegram или форму на сайте.",
  },
  {
    question: "Есть ли русскоязычный гид?",
    answer: "Да, все гиды русскоязычные.",
  },
  {
    question: "Как оплатить?",
    answer: "Картой, переводом, наличными.",
  },
  {
    question: "За сколько дней бронировать?",
    answer: "Желательно за 2-3 дня.",
  },
  {
    question: "Включён ли трансфер?",
    answer: "Да, трансфер включён в стоимость.",
  },
];

const travelAgencyJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Arabella Travel",
  description: "Экскурсии, развлечения и билеты в Эмиратах под ключ",
  url: "https://arabella-travel.ru",
  telephone: "",
  email: "",
  areaServed: [
    {
      "@type": "City",
      name: "Dubai",
    },
    {
      "@type": "City",
      name: "Abu Dhabi",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-7 text-center text-3xl font-extrabold text-[#0C717F]">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(travelAgencyJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />

      <section className="relative min-h-[1040px] overflow-hidden bg-[#0C717F] text-white sm:min-h-[960px] lg:min-h-[620px] xl:min-h-[680px]">
        <div
          className="absolute inset-0 bg-cover bg-[61%_center] sm:bg-[64%_center] lg:bg-center"
          style={{
            backgroundImage: "url('/hero-burj-desktop.png')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,59,68,0.98)_0%,rgba(5,91,99,0.90)_30%,rgba(6,105,114,0.58)_53%,rgba(8,120,130,0.14)_76%,rgba(8,120,130,0.02)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,93,100,0.98)_0%,rgba(7,113,121,0.90)_29%,rgba(10,132,142,0.34)_52%,rgba(10,132,142,0.04)_74%,rgba(10,132,142,0)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,32,39,0.18)_0%,rgba(1,32,39,0.08)_44%,rgba(1,18,22,0.74)_100%)] lg:hidden" />
        <div className="absolute inset-y-0 left-0 w-[76%] bg-[radial-gradient(circle_at_12%_36%,rgba(255,255,255,0.10),rgba(255,255,255,0)_36%)] lg:w-[58%]" />

        <div className="relative flex min-h-[1040px] w-full flex-col justify-end px-6 pb-40 pt-36 sm:min-h-[960px] sm:px-10 lg:min-h-[620px] lg:justify-center lg:px-[8vw] lg:pb-28 lg:pt-28 xl:min-h-[680px] xl:pb-36">
          <div className="max-w-[650px] lg:max-w-[46vw] xl:max-w-[660px]">
            <span className="hidden rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-bold text-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur sm:text-sm lg:inline-flex">
              №1 в организации экскурсий в ОАЭ
            </span>
            <h1 className="text-[48px] font-extrabold uppercase leading-[1.08] tracking-normal drop-shadow-[0_5px_16px_rgba(0,0,0,0.22)] sm:text-[56px] lg:mt-7 lg:text-[54px] xl:text-[62px]">
              Лучшие экскурсии и билеты в ОАЭ
            </h1>
            <p className="mt-7 max-w-xl text-[26px] font-medium leading-[1.34] text-white/94 sm:text-3xl lg:max-w-2xl lg:text-2xl lg:font-semibold lg:leading-10">
              Без предоплаты <span className="px-1 text-arabella-orange">•</span>{" "}
              Ниже касс <span className="px-1 text-arabella-orange">•</span>{" "}
              Местный организатор
            </p>
            <div className="mt-9 flex items-center gap-5">
              <div className="flex -space-x-3">
                {["А", "И", "Е", "М"].map((letter, index) => (
                  <span
                    key={letter}
                    className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-arabella-orange text-sm font-extrabold text-white shadow-soft lg:h-12 lg:w-12"
                    style={{ opacity: 1 - index * 0.04 }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <p className="max-w-[250px] text-xl font-bold leading-7 text-white/94 lg:max-w-[220px] lg:text-base lg:leading-5">
                <span className="font-extrabold">25 000+</span> довольных
                путешественников
              </p>
            </div>
            <div className="mt-12 flex flex-col gap-6 lg:mt-10 lg:flex-row lg:gap-4">
              <Link
                href="#excursions"
                className="inline-flex h-20 items-center justify-center gap-5 rounded-[22px] bg-arabella-orange px-9 text-3xl font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#c96f2d] lg:h-14 lg:gap-3 lg:rounded-full lg:text-base"
              >
                Смотреть экскурсии
                <span aria-hidden="true" className="text-5xl leading-none lg:text-2xl">
                  →
                </span>
              </Link>
              <Link
                href="https://t.me/margules"
                className="inline-flex h-20 items-center justify-center gap-4 rounded-[22px] border border-white/85 bg-white/5 px-8 text-3xl font-extrabold text-white backdrop-blur transition hover:bg-white/10 lg:h-14 lg:gap-3 lg:rounded-full lg:text-base"
              >
                <Send aria-hidden="true" className="h-8 w-8 lg:h-[22px] lg:w-[22px]" strokeWidth={2.5} />
                Связаться в Telegram
              </Link>
            </div>
          </div>
        </div>
        <svg
          className="absolute bottom-0 left-0 h-24 w-full text-arabella-orange sm:h-32 lg:h-36 xl:h-40"
          viewBox="0 0 1440 190"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0 92C156 124 324 140 496 126C682 110 802 64 980 72C1168 80 1306 58 1440 24V190H0V92Z"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 h-20 w-full text-white drop-shadow-[0_-12px_35px_rgba(255,255,255,0.28)] sm:h-28 lg:h-32 xl:h-36"
          viewBox="0 0 1440 170"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0 90C154 118 318 128 486 114C670 98 788 56 964 64C1164 74 1292 58 1440 20V170H0V90Z"
          />
        </svg>
      </section>

      <section className="bg-white px-4 pb-8 pt-0 sm:px-10 lg:px-[7.4vw]">
        <div className="mx-auto grid max-w-7xl grid-cols-4 gap-3 border-b border-slate-200 py-9 md:grid-cols-4 xl:gap-10">
          {heroBenefits.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex flex-col items-center gap-4 text-center lg:flex-row lg:text-left">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#0D7A7A]/15 text-[#0D7A7A]">
                  <Icon aria-hidden="true" className="h-9 w-9" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="text-base font-extrabold leading-5 text-arabella-ink sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base lg:mt-1 lg:text-sm lg:leading-5">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="excursions" className="bg-white px-5 pb-9 pt-6 sm:px-10 lg:px-[4.6vw]">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-lg bg-white shadow-[0_10px_28px_rgba(16,36,63,0.14)]"
              >
                <div className="relative h-36">
                  <Image src={item.image} alt="" fill className="object-cover" />
                  <span className="absolute -bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#0C717F] text-white ring-4 ring-white">
                    <Icon aria-hidden="true" size={24} strokeWidth={2.2} />
                  </span>
                </div>
                <div className="px-5 pb-5 pt-8">
                  <h3 className="text-xl font-extrabold text-arabella-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 min-h-[60px] text-sm leading-5 text-slate-600">
                    {item.text}
                  </p>
                  <p className="mt-4 text-lg font-extrabold text-arabella-ink">
                    {item.price}
                  </p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-md bg-arabella-orange text-sm font-bold text-white"
                  >
                    {item.cta}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-5 py-7 sm:px-10 lg:px-[4.6vw]">
        <SectionTitle>Популярное</SectionTitle>
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {popular.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-lg bg-white shadow-[0_10px_28px_rgba(16,36,63,0.14)]"
            >
              <div className="relative h-40">
                <Image src={item.image} alt="" fill className="object-cover" />
              </div>
              <div className="px-5 pb-5 pt-4">
                <h3 className="text-xl font-extrabold text-arabella-ink">
                  {item.title}
                </h3>
                <p className="mt-2 min-h-[48px] text-sm leading-5 text-slate-600">
                  {item.text}
                </p>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="text-lg font-extrabold text-arabella-ink">
                    {item.price}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-arabella-orange px-7 text-sm font-bold text-white"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl bg-white px-4 py-16">
        <h2 className="mb-6 text-3xl font-bold text-[#0D7A7A]">
          Экскурсии в Дубае на русском языке
        </h2>
        <p className="mb-4 text-gray-700">
          Arabella Travel — местный организатор в Дубае и Абу-Даби. Мы не
          перепродаём чужие туры — сами организуем экскурсии, сафари, аренду
          яхт и продаём билеты в парки по ценам ниже касс. Без предоплат и
          скрытых комиссий.
        </p>
        <p className="mb-4 text-gray-700">
          Все экскурсии с русскоязычным гидом. Трансфер от отеля и обратно
          включён в стоимость. Более 300 реальных отзывов на Авито — каждый
          можно проверить.
        </p>
        <p className="mb-8 text-gray-700">
          Работаем с индивидуальными группами и семьями. Подберём программу
          под ваш бюджет и даты — пишите в Telegram, отвечаем за 5 минут.
        </p>

        <h3 className="mb-2 text-xl font-semibold text-[#0D7A7A]">
          Сафари в пустыне Дубай
        </h3>
        <p className="mb-6 text-gray-700">
          Джип-сафари по дюнам, закат над песками, бедуинский лагерь,
          шоу-программа и барбекю-ужин. Один из самых популярных маршрутов
          среди русскоязычных туристов — от 3 000 ₽ с трансфером.
        </p>

        <h3 className="mb-2 text-xl font-semibold text-[#0D7A7A]">
          Обзорные экскурсии Дубай и Абу-Даби
        </h3>
        <p className="mb-6 text-gray-700">
          Бурдж-Халифа, Пальма Джумейра, Дубай Марина, мечеть Шейха Зайда —
          всё главное за один день. Гид на русском, маршрут без лишних
          переездов и очередей.
        </p>

        <h3 className="mb-2 text-xl font-semibold text-[#0D7A7A]">
          Русскоязычный организатор в ОАЭ
        </h3>
        <p className="text-gray-700">
          Мы живём и работаем в Дубае. Знаем цены, места и сезоны изнутри.
          Помогаем не только с экскурсиями — подскажем по отелям, транспорту
          и всему что нужно для комфортной поездки.
        </p>
      </section>

      <section className="bg-[#0C717F] px-5 py-8 text-white sm:px-10 lg:px-[4.6vw]">
        <h2 className="mb-7 text-center text-2xl font-extrabold">
          Почему Arabella Travel?
        </h2>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#0C717F]">
                  <Icon aria-hidden="true" size={34} strokeWidth={2.2} />
                </span>
                <h3 className="mt-4 text-lg font-extrabold">{item.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-5 text-white/85">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="tickets" className="bg-white px-5 py-8 sm:px-10 lg:px-[4.6vw]">
        <SectionTitle>Билеты в парки дешевле касс</SectionTitle>
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {tickets.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-lg bg-white shadow-[0_10px_28px_rgba(16,36,63,0.14)]"
            >
              <div className="relative h-32">
                <Image src={item.image} alt="" fill className="object-cover" />
              </div>
              <div className="px-4 pb-4 pt-4">
                <h3 className="min-h-[48px] text-base font-extrabold leading-5 text-arabella-ink">
                  {item.title}
                </h3>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <span className="text-sm text-slate-400 line-through">
                    {item.oldPrice}
                  </span>
                  <span className="text-2xl font-extrabold text-arabella-orange">
                    {item.price}
                  </span>
                </div>
                <Link
                  href="#"
                  className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-md bg-arabella-orange text-sm font-bold text-white"
                >
                  Купить билет
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="reviews" className="bg-white px-5 pb-10 pt-2 sm:px-10 lg:px-[4.6vw]">
        <SectionTitle>Отзывы наших клиентов</SectionTitle>
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {reviews.map((item) => (
            <article
              key={item.name}
              className="rounded-lg bg-white p-6 shadow-[0_10px_28px_rgba(16,36,63,0.14)]"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0C717F]/10 text-[#0C717F]">
                  <UserRound aria-hidden="true" size={26} />
                </span>
                <div>
                  <h3 className="font-extrabold text-arabella-ink">
                    {item.name}
                  </h3>
                  <div className="mt-1 text-arabella-orange">★★★★★</div>
                </div>
              </div>
              <p className="mt-4 min-h-[96px] text-sm leading-6 text-slate-600">
                {item.text}
              </p>
              <p className="mt-3 text-sm text-slate-400">{item.date}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 pb-12 pt-2 sm:px-10 lg:px-[4.6vw]">
        <div className="mx-auto max-w-5xl">
          <SectionTitle>Частые вопросы</SectionTitle>
          <div className="grid gap-4 md:grid-cols-2">
            {faqItems.map((item, index) => (
              <article
                key={item.question}
                className="rounded-lg border border-[#0C717F]/[0.12] bg-white p-5 shadow-[0_10px_28px_rgba(16,36,63,0.10)]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0C717F] text-sm font-extrabold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold leading-6 text-arabella-ink">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-[#0C717F]/[0.08] px-5 py-4 text-center text-sm font-semibold text-[#0C717F]">
            Остались вопросы? Напишите в Telegram - подскажем по программе,
            датам и оплате.
          </div>
        </div>
      </section>

      <section className="bg-[#0C717F] px-5 py-9 text-center text-white sm:px-10 lg:px-[4.6vw]">
        <h2 className="text-3xl font-extrabold">
          Планируете поездку в Эмираты?
        </h2>
        <p className="mt-2 text-lg text-white/85">
          Напишите - составим программу под вас
        </p>
        <Link
          href="https://t.me/margules"
          className="mx-auto mt-5 inline-flex h-14 items-center justify-center gap-3 rounded-md bg-arabella-orange px-10 text-lg font-bold text-white"
        >
          <Send aria-hidden="true" size={22} strokeWidth={2.5} />
          Написать в Telegram
        </Link>
        <p className="mt-4 text-sm text-white/85">Отвечаем за 5 минут</p>
      </section>
    </>
  );
}
