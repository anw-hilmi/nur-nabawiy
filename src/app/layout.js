import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Yayasan Nur Nabawiy",
  description:
    "Website resmi Yayasan Nur Nabawiy. Pusat layanan pendidikan Islam, PAUD, TK, MI, TPQ-Madin, dan LKSA.",
  openGraph: {
    title: "Yayasan Nur Nabawiy",
    description:
      "Website resmi Yayasan Nur Nabawiy. Pusat layanan pendidikan Islam, PAUD, TK, MI, TPQ-Madin, dan LKSA.",
    url: "https://web-yayasan-wheat.vercel.app", // Wajib pakai https://
    siteName: "Yayasan Nur Nabawiy",
    images: [
      {
        // URL gambar langsung dari CDN Instagram milik yayasan Anda
        url: "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3865415970580161368",
        width: 1200,
        height: 630,
        alt: "Pratinjau Yayasan Nur Nabawiy",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} antialiased`}>
        <div className="bg-neutral-50 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
