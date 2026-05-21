import React from "react";
import { MdWhatsapp, MdArrowForward } from "react-icons/md";

export default function CtaDaftar({
  judul = "Siap Bergabung Bersama Kami?",
  deskripsi = "Hubungi salah satu layanan resmi kami di bawah ini untuk informasi pendaftaran dan kuota kelas.",
  kontakList = [],
}) {
  return (
    <section className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
      {/* Container Banner Utama */}
      <div className="bg-primary text-on-primary rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-12 shadow-xl flex flex-col gap-6 md:gap-8 w-full">
        {/* Konten Teks - Menyesuaikan alignment dan ukuran di layar HP */}
        <div className="max-w-4xl w-full text-center sm:text-left">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-3">
            {judul}
          </h2>
          <p className="text-on-primary/90 text-xs sm:text-base md:text-lg leading-relaxed font-normal">
            {deskripsi}
          </p>
        </div>

        {/* List Tombol Kontak - Grid responsive 1 kolom di HP, 2 di tablet, 3 di desktop */}
        {kontakList.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full pt-5 md:pt-6 border-t border-on-primary/10">
            {kontakList.map((kontak, index) => (
              <a
                key={index}
                href={kontak.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-surface-container-lowest text-primary font-bold rounded-xl sm:rounded-2xl shadow-sm border border-outline-variant/20 hover:bg-surface-container active:scale-[0.98] transition-all duration-200 w-full group"
              >
                <span className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                  <span className="text-lg sm:text-2xl text-primary shrink-0 group-hover:scale-105 transition-transform">
                    <MdWhatsapp />
                  </span>
                  <span className="text-xs sm:text-base text-on-surface tracking-tight font-semibold truncate">
                    {kontak.nama}
                  </span>
                </span>
                <span className="text-base sm:text-lg text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0">
                  <MdArrowForward />
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
