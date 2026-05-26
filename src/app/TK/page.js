"use client";
import React from "react";
import Hero from "@/components/Hero";
import { PiBaby } from "react-icons/pi";
import { HiSparkles } from "react-icons/hi2";
import Struktur from "@/components/Struktur";
import InformasiLembaga from "@/components/InformasiLembaga";
import GaleriAktivitas from "@/components/GaleriAktivitas";
import CtaDaftar from "@/components/CtaDaftar";

export default function PaudTk() {
  // cta daftar
  const kontakPaud = [
    { nama: "Hubungi Ibu Ira (PAUD)", link: "https://wa.me/6281234567890" },
  ];

  // Galeri aktivitas
  const dataGaleri = [
    {
      gridClass: "col-span-2 row-span-2",
      altText: "A group of preschoolers sitting in a circle...",
      srcImg: "https://lh3.googleusercontent.com/...",
      label: "Kegiatan Belajar di Kelas",
    },
    {
      gridClass: "",
      altText: "Young children playing joyfully...",
      srcImg: "https://lh3.googleusercontent.com/...",
      label: "",
    },
    {
      gridClass: "",
      altText: "Close-up of a child's hands...",
      srcImg: "https://lh3.googleusercontent.com/...",
      label: "",
    },
    {
      gridClass: "col-span-2",
      altText: "A group of young students in modest school uniforms...",
      srcImg: "https://lh3.googleusercontent.com/...",
      label: "Pembiasaan Ibadah Harian",
    },
  ];

  // informasi lembaga
  const listFasilitas = [
    "Ruang Kelas Ber-AC",
    "Area Bermain (APE)",
    "Perpustakaan Anak",
    "Mushola Nyaman",
  ];

  // struktur
  const kamadData = {
    role: "Kepala Madrasah",
    name: "H. Ahmad Mulyadi, M.Pd",
    quote:
      "Membangun pondasi ilmu dan iman adalah tanggung jawab kita bersama.",
    image: "https://link-foto-kamad.jpg",
    alt: "Foto Kepala Madrasah",
  };

  const staffData = [
    {
      role: "Waka Kurikulum",
      name: "Siti Rahmah, S.Pd",
      image: "https://link-foto-waka1.jpg",
      alt: "Foto Waka Kurikulum",
    },
    {
      role: "Waka Kesiswaan",
      name: "Andi Pratama, S.Pd.I",
      image: "https://link-foto-waka2.jpg",
      alt: "Foto Waka Kesiswaan",
    },
  ];

  const badgeData = {
    title: "Didukung oleh 24+ Guru Profesional",
    description: "Lulusan universitas ternama dan bersertifikasi pendidik.",
    buttonText: "Lihat Semua Staff",
    onButtonClick: () => console.log("Navigasi ke halaman staf"),
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Unit PAUD-TK Yayasan Madani"
        description="Belajar Sambil Bermain & Berakhlak Mulia. Membentuk karakter Qurani sejak dini melalui pendekatan kasih sayang dan keceriaan."
        bgImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCNLodBI3oMD25h2qpAQDJkADNECLcbo0x4WbqWySrC9WJsstkC2-PcRxFBaeID60e1UXg5ZBXPMKRHiDSJzE9lQCYbVf6sDlxycgLtf7VYGahIiPc33jyStGTd3Y59cjeKR8TLlXzsJ3gYipg1qpQZqcvKMU9LBasK0mGRuUQS_ccSNX3ju4j-piHhBJqMfg8NCKqHHiCwkMP4IASZWnWJUqBQKOjFbDk1mSEZsTNJ8heWd8BfpisW-qxAHq8qtMZDcfI1U3KppQ"
        primaryBtnText="Daftar Sekarang"
      />

      {/* Metode Pembelajaran (Bento Style) */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-2">
            Metode Pembelajaran
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-sm">
            Pendekatan holistik yang mengintegrasikan kecerdasan intelektual,
            emosional, dan spiritual dalam ekosistem bermain.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/50 hover:shadow-md transition-all flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col justify-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">
                  <PiBaby />
                </span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-2">
                Bermain Sambil Belajar
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Kurikulum kami dirancang untuk menstimulasi rasa ingin tahu anak
                melalui eksplorasi sensory dan permainan konstruktif yang
                terarah.
              </p>
            </div>
            <div className="flex-1 rounded-xl overflow-hidden h-48 md:h-full min-h-[180px]">
              <img
                className="w-full h-full object-cover"
                alt="Close up of a child's hands playing with vibrant Montessori educational toys in a sunny learning environment."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACIyU0AzKJjdMutyXJzmRRge6AhapzaA7_NyR3T34YwhzzPzUQiAPHCVlM1_u2arcQEhbUs0qVwfiv9mGnDLXZyLDVBCbJeWgRiS2_74imBJnOcgdUGcCPXHFl_QwXIj-GdNPWLuUlxFs_jwojdtuBQidBVsZBbbud0mLaBoQiHflCN30PJYFbNi9gXnZSR4RfIhCuODh1flYSN-f9liGzgN9-lMtKUqNzeBRp_Q-5IG-6HCw3qns1FB8v3R1bRkybjVJF-steEg"
              />
            </div>
          </div>
          <div className="bg-primary text-on-primary p-8 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all shadow-sm">
            <div>
              <div className="w-12 h-12 bg-white/20 text-on-primary rounded-xl flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">
                  <HiSparkles />
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Character Building</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Penanaman adab dan akhlak mulia melalui pembiasaan harian yang
                menyenangkan dan penuh keteladanan.
              </p>
            </div>
            <div className="mt-8 border-t border-white/20 pt-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                star
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">
                Generasi Qurani &amp; Mandiri
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Lembaga */}
      <main>
        <Struktur
          title="Struktur Lembaga MI"
          headmaster={kamadData}
          staffList={staffData}
          badge={badgeData}
        />
      </main>

      {/* Informasi Operasional & Legalitas */}
      <main>
        <InformasiLembaga
          hariSekolah="Senin - Jum'at"
          jamBelajar="07:30 - 11:00 WIB"
          fasilitas={listFasilitas}
          skNomor="421.1/892-Disdik/2023"
          instansiPenerbit="Dinas Pendidikan Kota Tangerang Selatan" // Pastikan tertulis seperti ini
        />
      </main>

      {/* Galeri Aktivitas (Asymmetric Grid) */}
      <main>
        <GaleriAktivitas
          judul="Galeri Aktivitas"
          deskripsi="Momen ceria dan penuh hikmah para santri cilik."
          itemGaleri={dataGaleri}
        />
      </main>

      {/* cta daftar */}
      <main>
        <CtaDaftar
          judul="Pendaftaran PAUD"
          deskripsi="Hubungi administrasi PAUD untuk informasi kuota kelas."
          kontakList={kontakPaud}
        />
      </main>
    </div>
  );
}
