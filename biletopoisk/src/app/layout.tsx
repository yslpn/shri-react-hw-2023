import { Roboto } from "next/font/google";
import Link from "next/link";

import { Providers } from "./providers";

import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata = {
  title: "Билетопоиск",
  description: "Мы — крупнейший сервис о кино в рунете.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${roboto.className} flex flex-col h-screen`}>
        <Providers>
          <nav className="flex justify-between items-center pl-8 pr-8 min-h-[5rem] bg-gray-dark text-white">
            <Link href="/" className="font font-bold text-3xl">
              Билетопоиск
            </Link>
            <Link className="flex items-center gap-2" href="/cart">
              <span className="flex justify-center items-center bg-orange w-7 h-7 rounded-lg">
                30
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
              >
                <path
                  fill="#fff"
                  d="M29.494 8.675A2.015 2.015 0 0 0 27.984 8h-5.99a6 6 0 1 0-12 0h-5.99a2.016 2.016 0 0 0-1.5.675 2 2 0 0 0-.49 1.56l1.782 15a2 2 0 0 0 2 1.765h20.406a2 2 0 0 0 2-1.765l1.783-15a2 2 0 0 0-.491-1.56ZM15.994 4a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4Zm10.22 21a.017.017 0 0 1-.012 0H5.775L4.004 10h5.99v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h6l-1.78 15Z"
                />
              </svg>
            </Link>
          </nav>
          <main className="flex flex-1 flex-col py-6 px-8 bg-gray-disabled">
            {children}
          </main>
          <footer className="flex justify-between items-center pl-8 pr-8 min-h-[5rem] bg-gray-dark text-white">
            <Link href="/faq">Вопросы-ответы</Link>
            <Link href="/about">О нас</Link>
          </footer>
        </Providers>
      </body>
    </html>
  );
}