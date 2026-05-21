import React from "react";
import { MdSchedule, MdCheckCircleOutline, MdVerified } from "react-icons/md";

export default function InformasiLembaga({
  hariSekolah,
  jamBelajar,
  fasilitas = [],
  skNomor,
  instansiPenerbit,
}) {
  return (
    <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      {/* Container utama berganti dari kolom (HP) ke baris (Desktop) */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Operasional */}
        <div className="flex-1 bg-surface border border-outline-variant/60 p-6 md:p-8 rounded-2xl shadow-sm">
          <h3 className="text-lg md:text-xl font-bold text-on-surface mb-6 flex items-center gap-3">
            <span className="text-primary text-xl md:text-2xl shrink-0">
              <MdSchedule />
            </span>
            Informasi Operasional
          </h3>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 pb-3 border-b border-outline-variant/30">
              <span className="text-xs sm:text-sm text-on-surface-variant">
                Hari Sekolah
              </span>
              <span className="font-bold text-sm sm:text-base text-on-surface">
                {hariSekolah}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 pb-3 border-b border-outline-variant/30">
              <span className="text-xs sm:text-sm text-on-surface-variant">
                Jam Belajar
              </span>
              <span className="font-bold text-sm sm:text-base text-on-surface">
                {jamBelajar}
              </span>
            </div>
            <div className="pt-2">
              <p className="font-bold text-on-surface text-sm mb-3">
                Fasilitas Utama:
              </p>
              {/* Grid fasilitas otomatis 1 kolom di HP kecil, 2 kolom di HP besar ke atas */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-on-surface-variant">
                {fasilitas.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary text-base md:text-[18px] shrink-0 mt-0.5">
                      <MdCheckCircleOutline />
                    </span>
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Legalitas */}
        <div className="flex-1 bg-primary/5 p-6 md:p-8 rounded-2xl border border-primary/10 flex flex-col justify-center text-center items-center">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 shrink-0">
            <span className="text-xl md:text-2xl">
              <MdVerified />
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-on-surface mb-1">
            Legalitas Lembaga
          </h3>
          <p className="text-xs sm:text-sm text-on-surface-variant mb-6 max-w-md">
            Telah memenuhi standar nasional pendidikan dan terakreditasi.
          </p>
          {/* Kotak nomor SK dibuat responsive agar teks panjang tidak meluber */}
          <div className="bg-surface-container-lowest p-4 sm:p-5 rounded-xl border border-primary/20 border-dashed w-full max-w-sm">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-secondary font-bold mb-1">
              SK Izin Operasional
            </p>
            <p className="font-bold text-lg sm:text-xl md:text-2xl text-primary break-all">
              {skNomor}
            </p>
            <p className="text-[10px] sm:text-xs text-on-surface-variant mt-2 font-medium">
              {instansiPenerbit}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
