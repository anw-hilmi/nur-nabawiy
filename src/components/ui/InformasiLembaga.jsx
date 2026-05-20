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
    <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Operasional */}
        <div className="flex-1 bg-surface border border-outline-variant/60 p-8 rounded-2xl shadow-sm">
          <h3 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">
              <MdSchedule />
            </span>
            Informasi Operasional
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-outline-variant/30">
              <span className="text-sm text-on-surface-variant">
                Hari Sekolah
              </span>
              <span className="font-bold text-on-surface">{hariSekolah}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-outline-variant/30">
              <span className="text-sm text-on-surface-variant">
                Jam Belajar
              </span>
              <span className="font-bold text-on-surface">{jamBelajar}</span>
            </div>
            <div className="pt-2">
              <p className="font-bold text-on-surface text-sm mb-3">
                Fasilitas Utama:
              </p>
              <ul className="grid grid-cols-2 gap-3 text-sm text-on-surface-variant">
                {fasilitas.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      <MdCheckCircleOutline />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Legalitas */}
        <div className="flex-1 bg-primary/5 p-8 rounded-2xl border border-primary/10 flex flex-col justify-center text-center">
          <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-2xl">
              <MdVerified />
            </span>
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-1">
            Legalitas Lembaga
          </h3>
          <p className="text-sm text-on-surface-variant mb-6">
            Telah memenuhi standar nasional pendidikan dan terakreditasi.
          </p>
          <div className="bg-surface-container-lowest p-5 rounded-xl border border-primary/20 border-dashed inline-block">
            <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">
              SK Izin Operasional
            </p>
            <p className="font-bold text-2xl text-primary">{skNomor}</p>
            <p className="text-xs text-on-surface-variant mt-2 font-medium">
              {instansiPenerbit}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
