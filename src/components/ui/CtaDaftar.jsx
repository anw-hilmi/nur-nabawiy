import React from "react";
import { MdWhatsapp, MdArrowForward } from "react-icons/md";

export default function CtaDaftar({
  judul = "Siap Bergabung Bersama Kami?",
  deskripsi = "Hubungi salah satu layanan resmi kami di bawah ini untuk informasi pendaftaran dan kuota kelas.",
  kontakList = [],
}) {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 w-full">
      {/* Tata letak lebar penuh dengan orientasi vertikal (Teks di atas, Tombol di bawah) */}
      <div className="bg-primary text-on-primary rounded-3xl p-8 md:p-12 shadow-xl flex flex-col gap-8 w-full">
        {/* Konten Teks - Melebar penuh */}
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl font-bold md:text-4xl tracking-tight leading-tight mb-3">
            {judul}
          </h2>
          <p className="text-on-primary/90 text-base md:text-lg leading-relaxed font-normal">
            {deskripsi}
          </p>
        </div>

        {/* List Tombol Kontak - Berjejer horizontal melebar penuh */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full pt-2 border-t border-on-primary/10">
          {kontakList.map((kontak, index) => (
            <a
              key={index}
              href={kontak.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-4 px-6 py-4 bg-surface-container-lowest text-primary font-bold rounded-2xl shadow-sm border border-outline-variant/20 hover:bg-surface-container transition-all duration-200 w-full group"
            >
              <span className="flex items-center gap-3 truncate">
                <span className="text-xl text-primary shrink-0 group-hover:scale-105 transition-transform">
                  <MdWhatsapp />
                </span>
                <span className="text-sm md:text-base text-on-surface tracking-tight truncate">
                  {kontak.nama}
                </span>
              </span>
              <span className="text-lg text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0">
                <MdArrowForward />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
