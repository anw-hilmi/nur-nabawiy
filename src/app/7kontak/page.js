import React from "react";
import {
  MdLocationOn,
  MdCall,
  MdMail,
  MdChatBubble,
  MdChildCare,
  MdSchool,
  MdMenuBook,
  MdOpenInNew,
} from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FiYoutube } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";

export default function ContactPage() {
  return (
    <main className="bg-background text-on-background pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 bg-surface-container-low">
        <div className="relative px-4 md:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-on-surface mb-4">
            Hubungi Kami
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto">
            Kami hadir untuk melayani. Silakan hubungi kami untuk informasi
            pendaftaran, program sosial, atau kemitraan donasi.
          </p>
        </div>
      </section>

      {/* Main Contact & Maps */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/50 shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Kantor Pusat
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-secondary-container text-on-secondary-container p-3 rounded-xl h-fit">
                    <span className="material-symbols-outlined">
                      <MdLocationOn />
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                      Alamat
                    </p>
                    <p className="text-on-surface text-sm">
                      Jl. Madani No. 45, Kebayoran Baru, Jakarta Selatan, 12110
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-secondary-container text-on-secondary-container p-3 rounded-xl h-fit">
                    <span className="material-symbols-outlined">
                      <MdCall />
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                      WhatsApp Center
                    </p>
                    <a
                      className="text-on-surface font-bold text-lg hover:text-primary transition-colors"
                      href="https://wa.me/628123456789"
                    >
                      +62 812 3456 789
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-secondary-container text-on-secondary-container p-3 rounded-xl h-fit">
                    <span className="material-symbols-outlined">
                      <MdMail />
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <p className="text-on-surface text-sm">
                      halo@yayasanmadani.org
                    </p>
                  </div>
                </div>
              </div>
              <hr className="my-8 border-outline-variant/50" />
              <h3 className="text-xs font-bold text-on-surface-variant mb-4 uppercase tracking-wider">
                Ikuti Kami
              </h3>
              <div className="flex gap-4">
                <a
                  className="w-12 h-12 rounded-full bg-surface-container-low text-on-surface flex items-center justify-center hover:bg-secondary-container hover:text-on-secondary-container transition-all group"
                  href="#"
                >
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                    <IoLogoInstagram />
                  </span>
                </a>
                <a
                  className="w-12 h-12 rounded-full bg-surface-container-low text-on-surface flex items-center justify-center hover:bg-secondary-container hover:text-on-secondary-container transition-all group"
                  href="#"
                >
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                    <SlSocialFacebook />
                  </span>
                </a>
                <a
                  className="w-12 h-12 rounded-full bg-surface-container-low text-on-surface flex items-center justify-center hover:bg-secondary-container hover:text-on-secondary-container transition-all group"
                  href="#"
                >
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                    <FiYoutube />
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Map */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="h-[400px] lg:h-full w-full rounded-2xl overflow-hidden border border-outline-variant/50 shadow-sm relative">
              <img
                className="w-full h-full object-cover"
                alt="A clean and professional top-down map view of a modern urban layout representing Jakarta's city grid..."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0TPtRewjd5mC9WduGARLRxXoq9J9df_SmCZB3yEhoGXnSis1oaf9ZS9Opz6u_0dEpHkUnMAuwbdfCT7rDOE6hD4PwHt9MQ-BBiKZyCQCWzyH3pye1kazkKru655G66Q3M-I9xYkFYhonCAMXrMM7SdqGVYZA_5DJtzwNUMwkwT1Fq-M_IiuqJr6LK6MlkgomP-GEk0bBxw2W-qTmyQ7Km9DoaXUAviK92W8sa8fRZiym2xe2LpgMXFxTLlIpQXZ76ExjrYeJaqQ"
              />
              <div className="absolute bottom-6 right-6 bg-surface-container-lowest text-on-surface p-4 rounded-xl shadow-xl border border-outline-variant/30 max-w-xs">
                <p className="font-bold text-primary mb-1">Yayasan Madani HQ</p>
                <p className="text-xs text-on-surface-variant">
                  Kunjungi kami untuk konsultasi langsung.
                </p>
                {/* TARUH LINK DI SINI */}
                <a
                  href="https://maps.app.goo.gl/qCz94uCoJAu1LtQz7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-primary font-bold text-xs flex items-center gap-1 hover:underline w-fit"
                >
                  Petunjuk Arah{" "}
                  <span className="material-symbols-outlined text-xs">
                    <MdOpenInNew />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Specific Contacts */}
      <section className="bg-surface-container-low py-16">
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              Unit Pendidikan
            </span>
            <h2 className="text-3xl font-bold text-on-surface mt-4">
              Hubungi Unit Kami Secara Spesifik
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Unit 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/50 hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-secondary-container text-on-secondary-container rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  <MdChildCare />
                </span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-2">
                PAUD - TK
              </h3>
              <p className="text-sm text-on-surface-variant mb-6">
                Informasi pendaftaran usia dini dan kunjungan kelas.
              </p>
              <div className="space-y-4">
                <a
                  className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    <MdChatBubble />
                  </span>
                  <span className="font-semibold">+62 811 1111 222</span>
                </a>
                <a
                  className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    <IoLogoInstagram />
                  </span>
                  <span className="font-semibold">@paud.madani</span>
                </a>
              </div>
            </div>
            {/* Unit 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/50 hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-secondary-container text-on-secondary-container rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  <MdSchool />
                </span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-2">
                Madrasah Ibtidaiyah
              </h3>
              <p className="text-sm text-on-surface-variant mb-6">
                Penerimaan Peserta Didik Baru (PPDB) MI Madani.
              </p>
              <div className="space-y-4">
                <a
                  className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    <MdChatBubble />
                  </span>
                  <span className="font-semibold">+62 811 1111 333</span>
                </a>
                <a
                  className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    <IoLogoInstagram />
                  </span>
                  <span className="font-semibold">@mi.madani</span>
                </a>
              </div>
            </div>
            {/* Unit 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/50 hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-secondary-container text-on-secondary-container rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  <MdMenuBook />
                </span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-2">
                TPQ - Madin
              </h3>
              <p className="text-sm text-on-surface-variant mb-6">
                Program hafalan Al-Qur'an dan pendidikan sore.
              </p>
              <div className="space-y-4">
                <a
                  className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    <MdChatBubble />
                  </span>
                  <span className="font-semibold">+62 811 1111 444</span>
                </a>
                <a
                  className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors text-sm"
                  href="#"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    <IoLogoInstagram />
                  </span>
                  <span className="font-semibold">@tpq.madani</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-primary text-on-primary rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Menjadi Bagian dari Kebaikan?
            </h2>
            <p className="text-base opacity-90 mb-8 max-w-xl mx-auto">
              Salurkan donasi terbaik Anda untuk membantu operasional pendidikan
              santri yatim dan dhuafa di Yayasan Madani.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold shadow-md hover:bg-surface-container-lowest transition-all">
                Donasi Sekarang
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                Unduh Proposal
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
