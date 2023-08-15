import "../globals.css";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  variable: "--font-mont",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${mont.variable}`}>{children}</body>
    </html>
  );
}
