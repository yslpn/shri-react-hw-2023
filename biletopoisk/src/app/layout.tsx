import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["cyrillic"] });

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
      <body className={inter.className}>
        <nav className="flex justify-between items-center pl-8 pr-8 h-20 bg-gray-400">
          <a href="/">Билетопоиск</a>
          <a href="/cart">Cart</a>
        </nav>
        <main className="flex flex-1 flex-col py-6 px-8 bg-gray-100">
          {children}
        </main>
        <footer className="flex justify-between items-center pl-8 pr-8 h-20 bg-gray-400">
          <a href="/faq">Вопросы-ответы</a>
          <a>О нас</a>
        </footer>
      </body>
    </html>
  );
}
