import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { ReactNode } from "react";
import { Send } from "lucide-react";
import "./globals.css";

const siteTitle =
  "Экскурсии в Дубае на русском | Arabella Travel — местный организатор";
const siteDescription =
  "Экскурсии, сафари, яхты и билеты в Дубае и Абу-Даби. Местный русскоязычный организатор. Без предоплат, трансфер включён. Более 300 отзывов на Авито.";

export const metadata = {
  metadataBase: new URL("https://arabella-travel.ru"),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "https://arabella-travel.ru",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://arabella-travel.ru",
    siteName: "Arabella Travel",
    locale: "ru_RU",
    type: "website",
  },
};

const menuItems = [
  { label: "Экскурсии", href: "#excursions" },
  { label: "Развлечения", href: "#entertainment" },
  { label: "Билеты", href: "#tickets" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

function TelegramButton({ className = "" }) {
  return (
    <Link
      href="https://t.me/margules"
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-md bg-arabella-orange px-5 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#c96f2d] focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-arabella-teal ${className}`}
    >
      <Send aria-hidden="true" size={18} strokeWidth={2.5} />
      <span>Написать в Telegram</span>
    </Link>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-white antialiased">
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=109700211", "ym");

            ym(109700211, "init", {
              ssr: true,
              clickmap: true,
              ecommerce: "dataLayer",
              referrer: document.referrer,
              url: location.href,
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/109700211"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <div className="flex min-h-screen flex-col">
          <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0C717F]/[0.92] text-white shadow-[0_10px_30px_rgba(5,35,48,0.16)] backdrop-blur-md">
            <div className="mx-auto flex h-24 w-full items-center justify-between gap-6 px-5 sm:px-10 lg:px-[4.6vw]">
              <Link
                href="/"
                className="flex shrink-0 items-center gap-3"
                aria-label="Arabella Travel, на главную"
              >
                <Image
                  src="/arabella-logo-transparent.png"
                  alt="Arabella Travel"
                  width={190}
                  height={215}
                  priority
                  className="h-20 w-auto object-contain"
                />
              </Link>

              <nav className="hidden items-center gap-[4vw] text-lg font-bold lg:flex">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-orange-100 focus:outline-none focus:ring-2 focus:ring-white/70"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <TelegramButton className="hidden shrink-0 sm:inline-flex" />
            </div>

            <nav className="px-5 pb-4 pt-1 sm:px-10 lg:hidden">
              <div className="mx-auto flex gap-4 overflow-x-auto text-sm font-bold">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="whitespace-nowrap rounded-md px-1 py-2 text-white/95"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer
            id="contacts"
            className="bg-[#0C717F] text-white"
          >
            <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr] lg:px-12">
              <div>
                <Link
                  href="/"
                  className="mb-5 flex items-center gap-3"
                  aria-label="Arabella Travel, на главную"
                >
                  <Image
                    src="/arabella-logo-transparent.png"
                    alt="Arabella Travel"
                    width={190}
                    height={215}
                    className="h-20 w-auto object-contain"
                  />
                </Link>
                <p className="max-w-sm text-sm leading-6 text-white/85">
                  Эмираты под ключ: экскурсии, развлечения, билеты и помощь
                  местных организаторов.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-base font-bold">Меню</h2>
                <div className="grid gap-3 text-sm text-white/85">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start gap-4">
                <h2 className="text-base font-bold">Связаться</h2>
                <p className="text-sm leading-6 text-white/85">
                  Ответим, подберем маршрут и поможем спланировать поездку.
                </p>
                <TelegramButton />
              </div>
            </div>
            <div className="border-t border-white/12 px-5 py-5 text-center text-xs text-white/75">
              © 2026 Arabella Travel. Все права защищены.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
