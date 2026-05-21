"use client";
import React from "react";
import Hero from "@/components/ui/Hero";
import {
  MdMenuBook,
  MdVolunteerActivism,
  MdMosque,
  MdAutoAwesome,
} from "react-icons/md";
import CtaDaftar from "@/components/ui/CtaDaftar";
import Struktur from "@/components/ui/Struktur";
import InformasiLembaga from "@/components/ui/InformasiLembaga";
import GaleriAktivitas from "@/components/ui/GaleriAktivitas";

export default function TpqMadin() {
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
    <main className="bg-background text-on-background">
      {/* Hero Section */}
      <Hero
        title="TPQ - Madin Yayasan Madani"
        description="Mencetak Generasi Cinta Al-Qur'an melalui metode pembelajaran interaktif dan akhlakul karimah."
        bgImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDdcVfw9SB7qJcHlUKZfoLior9QSG10Q00qL-qp6b1fXWnBbOgJ9tmFccoEfQk8Xztrg4_6dLoHz1zaYtt8we8zbDUeXOuq14gCHaSl8bKPG4QSECQhd_aC16pNdcAqz7yy_hQIioWh7G9Bz-kG8RCRio0dG5gmtdU48T1Z1tWcIwJ_qxSzGTjJTYCcZQH-8u2-8JjARdoxdUemhMdEpJfEPINeNDP6I9h2voqlE5XAoKxcEDMfSqo-GdVipxiNzGvMKGr_CyWt4Q"
        primaryBtnText="Daftar Sekarang"
      />

      {/* Program Pembelajaran - Bento Grid Style */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">
            Program Pembelajaran
          </h2>
          <div className="h-1 w-20 bg-primary-container mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Iqro Card */}
          <div className="md:col-span-4 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary-container/20 rounded-lg flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary">
                <MdMenuBook />
              </span>
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-2">
              Iqro &amp; Utsmani
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Metode percepatan membaca Al-Qur'an yang disesuaikan dengan
              kemampuan anak untuk pemahaman makhraj dan tajwid yang sempurna.
            </p>
          </div>
          {/* Madin Card */}
          <div className="md:col-span-8 bg-primary text-on-primary p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">
                Madrasah Diniyah (Madin)
              </h3>
              <p className="text-sm opacity-90 mb-4 leading-relaxed">
                Pendalaman ilmu agama Islam meliputi Fiqih, Aqidah Akhlak,
                Sejarah Kebudayaan Islam (SKI), dan Bahasa Arab dasar untuk
                bekal ibadah sehari-hari.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container">
                    check_circle
                  </span>{" "}
                  Kurikulum Kemenag Terpadu
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container">
                    check_circle
                  </span>{" "}
                  Pembiasaan Adab &amp; Doa
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 aspect-square rounded-lg overflow-hidden border-2 border-outline-variant/30">
              <img
                className="w-full h-full object-cover"
                alt="Close up of a wooden Rehal holding an open Quran..."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKwCI4pKCMQjOkfXk_0LGg7bGKqlXMj4fnxoTMWhUnWbjO1PMHbqrjXSjw2utrJVfaAnaioZbfcWe-fMY5X1c0YCL6nuXvXPUcWBrsBKCRmkFea5CJogQY9jpnq3JGMFhQXpq2uR7DckCc1Labm31qcaoshY6fNtzFt_kRM53FdsIIDdJkV8Flkx5a-YPhc1-grbRmHKO5IhWXvqADFyqf7Pd2NocL5h1M0U2KfZmFAHLqtdNsjvohAMu6IJGg-Nmuzuz4B1crfg"
              />
            </div>
          </div>
          {/* Targets Card */}
          <div className="md:col-span-12 bg-secondary-container text-on-surface p-6 rounded-xl border border-outline-variant">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className="text-xl font-bold mb-1 text-primary">
                  Target Hafalan &amp; Kompetensi
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Setiap santri dipantau progresnya secara berkala melalui kartu
                  prestasi.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
                <div className="bg-surface-container-lowest p-4 rounded-lg text-center shadow-sm border border-outline-variant/50">
                  <div className="text-primary font-bold text-2xl">30+</div>
                  <div className="text-xs text-on-surface-variant">
                    Surah Pendek
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-lg text-center shadow-sm border border-outline-variant/50">
                  <div className="text-primary font-bold text-2xl">40+</div>
                  <div className="text-xs text-on-surface-variant">
                    Hadith Pilihan
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-lg text-center shadow-sm border border-outline-variant/50">
                  <div className="text-primary font-bold text-2xl">100%</div>
                  <div className="text-xs text-on-surface-variant">
                    Makhraj Tartil
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-lg text-center shadow-sm border border-outline-variant/50">
                  <div className="text-primary font-bold text-2xl">Daily</div>
                  <div className="text-xs text-on-surface-variant">
                    Adab Islami
                  </div>
                </div>
              </div>
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
    </main>
  );
}
