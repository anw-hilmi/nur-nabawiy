import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

// Tambahkan konfigurasi metadata di sini
export const metadata = {
  title: "Yayasan Pendidikan Islam",
  description:
    "Website resmi yayasan pendidikan, akreditasi terbaik, pembentukan karakter islami.",
  openGraph: {
    title: "Yayasan Pendidikan Islam",
    description:
      "Website resmi yayasan pendidikan, akreditasi terbaik, pembentukan karakter islami.",
    url: "https://yayasan-anda.com", // Ganti dengan domain asli nanti
    siteName: "Yayasan Pendidikan",
    images: [
      {
        url: "https://www.google.com/imgres?q=nur%20nabawiy&imgurl=https%3A%2F%2Flookaside.instagram.com%2Fseo%2Fgoogle_widget%2Fcrawler%2F%3Fmedia_id%3D3865415970580161368&imgrefurl=https%3A%2F%2Fwww.instagram.com%2Fp%2FDWkt1hrjWNY%2F&docid=LtU-6EZqxZSSwM&tbnid=xoC9UiDHBdhfzM&vet=12ahUKEwiasrnB0saUAxUb4TgGHSs5NBMQnPAOegQIFBAB..i&w=1438&h=753&hcb=2&itg=1&ved=2ahUKEwiasrnB0saUAxUb4TgGHSs5NBMQnPAOegQIFBAB", // Ganti dengan URL gambar asli nanti
        width: 1200,
        height: 630,
        alt: "Pratinjau Yayasan Pendidikan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <div className="bg-neutral-50 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
