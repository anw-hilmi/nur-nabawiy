import React from "react";
import { MdArrowForward } from "react-icons/md";

export default function GaleriAktivitas({
  judul = "Galeri Aktivitas",
  deskripsi = "Momen ceria dan penuh hikmah para santri cilik.",
  itemGaleri = [],
}) {
  return (
    <section className="bg-surface-container py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-on-surface mb-2">{judul}</h2>
            <p className="text-on-surface-variant text-sm">{deskripsi}</p>
          </div>
          <button className="text-primary text-sm font-bold flex items-center gap-1.5 group">
            Lihat Semua
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              <MdArrowForward />
            </span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {itemGaleri.map((item, index) => (
            <div
              key={index}
              className={`${item.gridClass} rounded-2xl overflow-hidden relative group border border-outline-variant/20 shadow-sm`}
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={item.altText}
                src={item.srcImg}
              />
              {item.label && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                  <span className="text-white font-medium text-sm">
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
