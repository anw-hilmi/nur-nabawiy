import React from "react";
import { MdArrowForward } from "react-icons/md";

export default function GaleriAktivitas({
  judul = "Galeri Aktivitas",
  deskripsi = "Momen ceria dan penuh hikmah para santri cilik.",
  itemGaleri = [],
}) {
  return (
    <section className="bg-surface-container py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header section berganti dari baris ke tumpukan vertikal di HP */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-2">
              {judul}
            </h2>
            <p className="text-on-surface-variant text-xs sm:text-sm">
              {deskripsi}
            </p>
          </div>
          <button className="text-primary text-xs sm:text-sm font-bold flex items-center gap-1.5 group shrink-0">
            Lihat Semua
            <span className="text-base md:text-[18px] group-hover:translate-x-1 transition-transform">
              <MdArrowForward />
            </span>
          </button>
        </div>

        {/* Bento Grid: 1 kolom di HP kecil, 2 kolom di tablet, 4 kolom di desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] sm:auto-rows-[180px]">
          {itemGaleri.map((item, index) => (
            <div
              key={index}
              className={`${item.gridClass || ""} rounded-2xl overflow-hidden relative group border border-outline-variant/20 shadow-sm`}
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={item.altText}
                src={item.srcImg}
              />
              {item.label && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4 sm:p-6">
                  <span className="text-white font-medium text-xs sm:text-sm leading-snug">
                    {item.label}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
