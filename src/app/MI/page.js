"use client";
import React from "react";
import Hero from "@/components/Hero";
import {
  MdMenuBook,
  MdTranslate,
  MdCleanHands,
  MdVerified,
  MdChevronLeft,
  MdChevronRight,
  MdMicExternalOn,
  MdSportsSoccer,
} from "react-icons/md";
import { FaCampground } from "react-icons/fa";
import { useRef } from "react";
import Struktur from "@/components/Struktur"; // Sesuaikan path file komponen
import InformasiLembaga from "@/components/InformasiLembaga";
import GaleriAktivitas from "@/components/GaleriAktivitas";
import CtaDaftar from "@/components/CtaDaftar";

export default function MadrasahIbtidaiyah() {
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

  // Di dalam komponen utama Anda:
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 350; // Jarak scroll dalam piksel
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Madrasah Ibtidaiyah (MI)"
        bgImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCpy9rIzvJnrDASVQZjpdpgqTyaxlwqAxh5eoTknBfbfn-9kZdFtiG2eM0SM6pELne_r3Brkyg2ueZ1NWiOw_QFUou2HygTsi90uPDwzGL_uwaGeia_UqQWaNzplKKBzr-ueUk_LJbciB7_q4mC1zi6t1wd3bn4FHr3mf79fcMcZeAlX7Uw78gg5TOkldfXNbLdP3whJ9Agbrqt2MfiS0sk05h0WBK1UL7mxccNRV8YZMaqEGQ91RScXHBpK1yME5HG_z6mKZzK2g"
      />

      {/* Kurikulum & Program Utama */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">
              Kurikulum &amp; Program Unggulan
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-sm">
              Memadukan kurikulum nasional yang kuat dengan penguatan
              nilai-nilai keislaman dan keterampilan abad 21.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-surface p-8 rounded-2xl border border-outline-variant/60 hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-2xl">
                  <MdMenuBook />
                </span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">
                Tahfidz Juz Amma
              </h3>
              <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">
                Program hafalan terstruktur dengan bimbingan ustadz
                berpengalaman untuk mencetak hafizh cilik sejak dini.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-primary text-sm font-semibold">
                  <span className="material-symbols-outlined text-[18px]">
                    <MdVerified />
                  </span>{" "}
                  Target Hafalan 2 Juz
                </li>
              </ul>
            </div>
            {/* Program 2 */}
            <div className="bg-surface p-8 rounded-2xl border border-outline-variant/60 hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-2xl">
                  <MdTranslate />
                </span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">
                Arabic Discovery
              </h3>
              <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">
                Pengenalan Bahasa Arab dasar melalui metode yang menyenangkan
                dan interaktif bagi siswa Madrasah.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-primary text-sm font-semibold">
                  <span className="material-symbols-outlined text-[18px]">
                    <MdVerified />
                  </span>{" "}
                  Praktik Percakapan Harian
                </li>
              </ul>
            </div>
            {/* Program 3 */}
            <div className="bg-surface p-8 rounded-2xl border border-outline-variant/60 hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-2xl">
                  <MdCleanHands />
                </span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">
                Fiqih Praktis
              </h3>
              <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">
                Pembiasaan ibadah harian sesuai syariat, mulai dari tata cara
                wudhu hingga shalat berjamaah.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-primary text-sm font-semibold">
                  <span className="material-symbols-outlined text-[18px]">
                    <MdVerified />
                  </span>{" "}
                  Bimbingan Ibadah Rutin
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Lembaga (Asymmetric Bento) */}
      <main>
        <Struktur
          title="Struktur Lembaga MI"
          headmaster={kamadData}
          staffList={staffData}
          badge={badgeData}
        />
      </main>

      {/* Eksplorasi & Prestasi */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-on-surface mb-3">
                Eksplorasi &amp; Prestasi
              </h2>
              <p className="text-on-surface-variant text-sm">
                Wadah bagi siswa untuk mengembangkan minat, bakat, dan karakter
                melalui berbagai kegiatan positif di luar jam pelajaran.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-11 h-11 rounded-full border border-outline-variant text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary flex items-center justify-center transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">
                  <MdChevronLeft />
                </span>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-11 h-11 rounded-full border border-outline-variant text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary flex items-center justify-center transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">
                  <MdChevronRight />
                </span>
              </button>
            </div>
          </div>
          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto pb-8 snap-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {/* Achievement Card */}
            <div className="min-w-[300px] md:min-w-[400px] snap-start bg-surface-container-low border border-outline-variant/40 rounded-3xl p-8 relative overflow-hidden group">
              <span className="material-symbols-outlined text-[80px] absolute -bottom-4 -right-4 opacity-5 group-hover:scale-110 transition-transform text-on-surface">
                emoji_events
              </span>
              <div className="bg-primary/10 w-fit px-3 py-1 rounded-full text-xs font-bold text-primary mb-6">
                Prestasi Terbaru
              </div>
              <h4 className="text-xl font-bold text-on-surface mb-3">
                Juara 1 MTQ Tingkat Kabupaten
              </h4>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                Ananda Rizky Fauzi mewakili Madrasah dalam kompetisi Tilawatil
                Quran 2023.
              </p>
              <img
                className="w-full h-48 object-cover rounded-xl mt-4"
                alt="A young student proudly holding a trophy in front of a school backdrop. Bright green and white brand colors are integrated into the setting. The photography style is sharp and professional with a focus on youthful achievement."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjEcdDW1J2AKXxx4dweiTIqV9q3xNgMMFG9hoElvFThIDr3vRATdp9_NKuqmGBCzCRRVUjfrJ5gxZNlPL7MZJZiz6jpfDd6KuNxzQpvv7x17tbqn0dVgFUIcSOHjK17owZ1g3Tx3YJrDtVUVeKl-AkUIVTJPDjeNR_rIzRtEIRZ4-4PSGXibMVFofBbzXnZxcjZZE3SyyiBvEx5iOyT4EuY-yuI6iaE-90J7qfk45X9D_q3P8QskUUHlPsrE9sJjdU0p07qVFb1w"
              />
            </div>
            {/* Extra 1 */}
            <div className="min-w-[300px] md:min-w-[350px] snap-start bg-surface border border-outline-variant/60 rounded-3xl p-8 hover:border-primary transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">
                  <FaCampground />
                </span>
              </div>
              <h4 className="text-lg font-bold text-on-surface mb-2">
                Pramuka (Scout)
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Membangun kemandirian, kedisiplinan, dan jiwa kepemimpinan
                melalui kegiatan kepanduan yang seru.
              </p>
            </div>
            {/* Extra 2 */}
            <div className="min-w-[300px] md:min-w-[350px] snap-start bg-surface border border-outline-variant/60 rounded-3xl p-8 hover:border-primary transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">
                  <MdMicExternalOn />
                </span>
              </div>
              <h4 className="text-lg font-bold text-on-surface mb-2">
                Qira'ah &amp; Seni Islam
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Mengasah vokal dan kefasihan dalam melantunkan ayat suci
                Al-Quran dengan irama yang indah.
              </p>
            </div>
            {/* Extra 3 */}
            <div className="min-w-[300px] md:min-w-[350px] snap-start bg-surface border border-outline-variant/60 rounded-3xl p-8 hover:border-primary transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">
                  <MdSportsSoccer />
                </span>
              </div>
              <h4 className="text-lg font-bold text-on-surface mb-2">
                Futsal &amp; Olahraga
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Menjaga kebugaran fisik dan sportivitas melalui latihan rutin
                dan kompetisi persahabatan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ekstrakurikuler & Pengembangan Diri Section */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">
              Ekstrakurikuler &amp; Pengembangan Diri
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-sm">
              Kegiatan tambahan untuk mengasah minat dan bakat siswa guna
              membangun karakter yang unggul.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-surface p-6 rounded-2xl border border-outline-variant/60 hover:shadow-md transition-all group flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 bg-surface-container-low flex items-center justify-center border border-outline-variant/30">
                <img
                  alt="Pramuka (Scout)"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPmtKzi-RuU1ipb7z87B0NGOyr4331TwRvmg0ygIaTWxG02FxmAdp0ehMw11AvE3ry4yh_lH0yMdhmaNc2zhuVfM2G4lD5JVWRaL5KUoDgJNRPg4buOQGytD1wGu7lUgM-Cv9wKusbn_AryuqyLEMfPmhoVexAePdYP-xCADbiHdsC-2mHZgwIAgxqpPh33LhyhMxNeITSFzBqrDf3Cqkg8zldUQmE5lLjM5VP8GrB77AtOtgUGwc7n7bKe3M4aOLwNMxU19gOCw"
                />
              </div>
              <h4 className="font-bold text-on-surface mb-2">
                Pramuka (Scout)
              </h4>
              <p className="text-on-surface-variant text-xs leading-relaxed">
                Membentuk karakter disiplin, mandiri, dan jiwa kepemimpinan
                melalui kegiatan kepanduan.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-surface p-6 rounded-2xl border border-outline-variant/60 hover:shadow-md transition-all group flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 bg-surface-container-low flex items-center justify-center border border-outline-variant/30">
                <img
                  alt="Qiroah &amp; Seni Islam"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9w68nnwX0EtXieTz033DD0m5yY8aeee3YBUXCbNXkjRIXTqU8tLT1aTHY4whir_ITnCoZ_ViRYopncHrA-jX0gD9GUh2RsaZE5-NPevREzpHd-S7XuwHKLSEtuqPWEFSV4Bf7YcQI5lQkg0iSLFGFT2EFzprLl7pvVRdpTzCQ2cFxQn3E0p_ebUM_KfcdxXXKY6nhUmzUfTfRNhrruYLwpjHBOXzz2AYWgzLEg70KvzweknWKn6hW7xau_HCmg5DQ6h0yLzjvCA"
                />
              </div>
              <h4 className="font-bold text-on-surface mb-2">
                Qiroah &amp; Seni Islam
              </h4>
              <p className="text-on-surface-variant text-xs leading-relaxed">
                Mengasah bakat dalam seni membaca Al-Qur'an dan apresiasi seni
                budaya Islami.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-surface p-6 rounded-2xl border border-outline-variant/60 hover:shadow-md transition-all group flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 bg-surface-container-low flex items-center justify-center border border-outline-variant/30">
                <img
                  alt="Klub Komputer &amp; IT"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy-Ob1Es7GsdZgTCN7G-skDwntAO1D1mA-0wYPkz5ySYZLiIgEsf71fWGfeuZc--EWrtieeFLAC4WPa9TPT3sS5jSqg-xAB8JsrjZD4e_pXW6LEJSSKo_BFHQNXZVW_Viws1gnhw_60DA3LouOXBliz8wmzN33jaJs19bR-UMcSq845jhCmq1m2ttt9eU74G9I4HQYuwqJye4O_ms633vqEW50WQNBa8wRzoVSm3qTtLksC1j39uM44w6kqyj61htw70nOZvJarg"
                />
              </div>
              <h4 className="font-bold text-on-surface mb-2">
                Klub Komputer &amp; IT
              </h4>
              <p className="text-on-surface-variant text-xs leading-relaxed">
                Mengenalkan dasar-dasar teknologi informasi dan kreativitas
                digital sejak dini.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-surface p-6 rounded-2xl border border-outline-variant/60 hover:shadow-md transition-all group flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">
                  <MdSportsSoccer />
                </span>
              </div>
              <h4 className="font-bold text-on-surface mb-2">
                Futsal &amp; Olahraga
              </h4>
              <p className="text-on-surface-variant text-xs leading-relaxed">
                Menjaga kesehatan fisik dan melatih kerjasama tim melalui
                berbagai cabang olahraga.
              </p>
            </div>
          </div>
        </div>
      </section>

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
