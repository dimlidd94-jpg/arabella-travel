import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Car,
  CheckCircle2,
  Map,
  Sailboat,
  Send,
  Star,
  Ticket,
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
    title: "297 отзывов на Авито",
    text: "Реальные отзывы и высокий рейтинг доверия от наших клиентов.",
  },
  {
    icon: CheckCircle2,
    title: "Все включено под ключ",
    text: "Трансфер, билеты, гид и поддержка - мы берем все заботы на себя.",
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
  mainEntity: [
    {
      "@type": "Question",
      name: "Как забронировать экскурсию?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Через Telegram или форму на сайте.",
      },
    },
    {
      "@type": "Question",
      name: "Есть ли русскоязычный гид?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, все гиды русскоязычные.",
      },
    },
    {
      "@type": "Question",
      name: "Как оплатить?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Картой, переводом, наличными.",
      },
    },
    {
      "@type": "Question",
      name: "За сколько дней бронировать?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Желательно за 2-3 дня.",
      },
    },
    {
      "@type": "Question",
      name: "Включён ли трансфер?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, трансфер включён в стоимость.",
      },
    },
  ],
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

      <section className="relative min-h-screen overflow-hidden bg-arabella-teal text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-clean.png')",
          }}
        />

        <div className="relative flex min-h-screen w-full flex-col justify-center px-5 pb-36 pt-32 sm:px-10 lg:px-[4.6vw]">
          <div className="max-w-[820px] lg:max-w-[54vw]">
            <h1 className="text-4xl font-extrabold leading-tight drop-shadow-[0_5px_16px_rgba(0,0,0,0.22)] sm:text-5xl lg:text-[58px] xl:text-[64px]">
              Эмираты под ключ - экскурсии, развлечения, билеты
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-8 text-white/92 sm:text-2xl sm:leading-10">
              297 клиентов. Дубай и Абу-Даби с местным организатором
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#excursions"
                className="inline-flex h-14 items-center justify-center rounded-md bg-arabella-orange px-8 text-base font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#c96f2d]"
              >
                Выбрать экскурсию
              </Link>
              <Link
                href="https://t.me/"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-md border-2 border-white/80 px-8 text-base font-bold text-white transition hover:bg-white/10"
              >
                <Send aria-hidden="true" size={22} strokeWidth={2.5} />
                Написать в Telegram
              </Link>
            </div>
          </div>
        </div>
        <svg
          className="absolute bottom-0 left-0 h-24 w-full text-white drop-shadow-[0_-12px_35px_rgba(255,255,255,0.28)] sm:h-36"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0 86L80 73.3C160 61 320 35 480 47.8C640 61 800 112 960 114.2C1120 116 1280 70 1360 47.8L1440 26V160H0V86Z"
          />
        </svg>
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

      <section className="bg-[#0C717F] px-5 py-9 text-center text-white sm:px-10 lg:px-[4.6vw]">
        <h2 className="text-3xl font-extrabold">
          Планируете поездку в Эмираты?
        </h2>
        <p className="mt-2 text-lg text-white/85">
          Напишите - составим программу под вас
        </p>
        <Link
          href="https://t.me/"
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
