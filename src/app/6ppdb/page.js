import React from "react";
import {
  MdCampaign,
  MdAppRegistration,
  MdVerifiedUser,
  MdPsychology,
  MdAssignmentTurnedIn,
  MdCheckCircle,
  MdArrowForward,
  MdExpandMore,
  MdSupportAgent,
} from "react-icons/md";

export default function PpdbRegistration() {
  return (
    <main className="bg-background text-on-background">
      {/* Hero Section */}
      <section className="relative bg-surface-container-low py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold mb-4">
              PENERIMAAN SISWA BARU
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
              Pendaftaran Peserta Didik Baru (PPDB){" "}
              <span className="text-primary">Tahun Pelajaran 2024/2025</span>
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant mb-8 max-w-xl">
              Bergabunglah bersama Yayasan Madani untuk mewujudkan generasi yang
              Qur'ani, berakhlak mulia, dan mandiri secara intelektual maupun
              spiritual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-center shadow-md hover:shadow-lg transition-all"
                href="#daftar"
              >
                Isi Formulir Online
              </a>
              <a
                className="bg-surface-container-lowest text-primary border border-primary px-8 py-4 rounded-xl font-bold text-center hover:bg-secondary-container/20 transition-all"
                href="#biaya"
              >
                Lihat Rincian Biaya
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                alt="Siswa Madani"
                className="w-full h-[500px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZbWvodguBFpE3Ghoi6VFWdG4ua_STjnrzksLirmgavH7CFWcB3wiDMR5OkVWuP9y27q_M-yX0jBtajwtFq8OiZNlw19I7BxR4bKbX0AGF_7PnM_Sd2NET0qxxz1gmZe4ZBhNf9t2N9LHQKIGa39p7vvvurNK_j1o5FRwszt_IYXDMCQT5G1vYAvnjR_lNzqN5g9j3LLmSpkWT8K2PzwqgJPYgrQ0IqgYHKkGVZ9jdddFRpri4UShSa7ypxmhPmykQuXKF_ksYnQ"
              />
            </div>
          </div>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 transform -skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Alur & Jadwal Pendaftaran */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-12">
          <h2 className="text-3xl font-bold text-on-surface mb-2">
            Alur &amp; Jadwal Pendaftaran
          </h2>
          <p className="text-on-surface-variant">
            Ikuti langkah-langkah mudah berikut untuk mendaftar
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group z-10 p-4 bg-surface-container-low rounded-2xl border border-outline-variant/50">
              <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  <MdAppRegistration />
                </span>
              </div>
              <h3 className="font-bold text-sm text-on-surface mb-2">
                Pendaftaran Online
              </h3>
              <p className="text-xs text-on-surface-variant">
                1 Jan - 28 Feb 2024
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group z-10 p-4 bg-surface-container-low rounded-2xl border border-outline-variant/50">
              <div className="w-16 h-16 rounded-full bg-surface-container-high text-primary flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  <MdVerifiedUser />
                </span>
              </div>
              <h3 className="font-bold text-sm text-on-surface mb-2">
                Verifikasi Berkas
              </h3>
              <p className="text-xs text-on-surface-variant">
                1 - 5 Maret 2024
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group z-10 p-4 bg-surface-container-low rounded-2xl border border-outline-variant/50">
              <div className="w-16 h-16 rounded-full bg-surface-container-high text-primary flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  <MdPsychology />
                </span>
              </div>
              <h3 className="font-bold text-sm text-on-surface mb-2">
                Tes &amp; Wawancara
              </h3>
              <p className="text-xs text-on-surface-variant">
                10 - 12 Maret 2024
              </p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center group z-10 p-4 bg-surface-container-low rounded-2xl border border-outline-variant/50">
              <div className="w-16 h-16 rounded-full bg-surface-container-high text-primary flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  <MdCampaign />
                </span>
              </div>
              <h3 className="font-bold text-sm text-on-surface mb-2">
                Pengumuman
              </h3>
              <p className="text-xs text-on-surface-variant">20 Maret 2024</p>
            </div>
            {/* Step 5 */}
            <div className="flex flex-col items-center text-center group z-10 p-4 bg-surface-container-low rounded-2xl border border-outline-variant/50">
              <div className="w-16 h-16 rounded-full bg-surface-container-high text-primary flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  <MdAssignmentTurnedIn />
                </span>
              </div>
              <h3 className="font-bold text-sm text-on-surface mb-2">
                Daftar Ulang
              </h3>
              <p className="text-xs text-on-surface-variant">
                21 - 31 Maret 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Syarat Pendaftaran & CTA */}
      <section className="py-16 bg-surface-container-low" id="daftar">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/50">
              <h2 className="text-3xl font-bold text-on-surface mb-6">
                Syarat Pendaftaran
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">
                    <MdCheckCircle />
                  </span>
                  <span className="text-base text-on-surface">
                    Fotokopi Akta Kelahiran (2 Lembar)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">
                    <MdCheckCircle />
                  </span>
                  <span className="text-base text-on-surface">
                    Fotokopi Kartu Keluarga (2 Lembar)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">
                    <MdCheckCircle />
                  </span>
                  <span className="text-base text-on-surface">
                    Pas Foto Berwarna 3x4 (4 Lembar)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">
                    <MdCheckCircle />
                  </span>
                  <span className="text-base text-on-surface">
                    Fotokopi Ijazah/Rapor Terakhir (Khusus MI)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">
                    <MdCheckCircle />
                  </span>
                  <span className="text-base text-on-surface">
                    Mengisi Formulir Pendaftaran Online
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-primary p-8 rounded-2xl text-on-primary shadow-xl">
                <h3 className="text-2xl font-bold mb-4">
                  Mulai Pendaftaran Sekarang
                </h3>
                <p className="mb-8 opacity-90 text-sm">
                  Klik tombol di bawah ini untuk mengisi formulir pendaftaran
                  digital. Pastikan data yang dimasukkan sudah sesuai dengan
                  dokumen asli.
                </p>
                <div className="grid gap-4">
                  <div className="grid gap-4">
                    <div className="relative">
                      <label
                        className="block text-sm font-bold mb-2 text-on-primary"
                        htmlFor="unit-selector"
                      >
                        Pilih Unit Pendidikan
                      </label>
                      <div className="relative">
                        <select
                          defaultValue=""
                          className="w-full bg-surface text-on-surface border-2 border-outline-variant py-4 px-4 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-primary font-bold"
                          id="unit-selector"
                        >
                          <option disabled value="">
                            Pilih Unit Lembaga...
                          </option>
                          <option value="tk">PAUD - TK</option>
                          <option value="mi">Madrasah Ibtidaiyah (MI)</option>
                          <option value="tpq">TPQ - Madin</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                          <span className="material-symbols-outlined">
                            <MdExpandMore />
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      className="w-full bg-on-primary text-primary font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md active:scale-95"
                      id="btn-continue-registration"
                    >
                      <span className="material-symbols-outlined">
                        <MdArrowForward />
                      </span>
                      Lanjutkan Pendaftaran
                    </button>
                  </div>
                  <div className="flex items-center gap-4 py-2">
                    <div className="flex-grow border-t border-on-primary/20"></div>
                    <span className="text-xs font-bold">ATAU</span>
                    <div className="flex-grow border-t border-on-primary/20"></div>
                  </div>
                  <button className="w-full bg-white/10 border border-white/20 text-on-primary font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
                    <span className="material-symbols-outlined">
                      <MdSupportAgent />
                    </span>
                    Tanya Panitia via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informasi Biaya */}
      <section className="py-16 bg-surface" id="biaya">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-on-surface mb-2">
              Informasi Biaya Pendidikan
            </h2>
            <p className="text-on-surface-variant">
              Transparansi biaya untuk setiap unit pendidikan di Yayasan Madani
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 pt-4">
            {/* PAUD-TK */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 flex flex-col hover:border-primary transition-all shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-1">
                  PAUD-TK
                </h3>
                <p className="text-xs text-on-surface-variant">
                  Taman Kanak-Kanak Madani
                </p>
              </div>
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex justify-between items-center py-2 border-b border-outline-variant">
                  <span className="text-sm text-on-surface">Pendaftaran</span>
                  <span className="font-bold text-on-surface">Rp 150.000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant">
                  <span className="text-sm text-on-surface">
                    Seragam (4 Set)
                  </span>
                  <span className="font-bold text-on-surface">Rp 650.000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant">
                  <span className="text-sm text-on-surface">
                    SPP / Infaq Bulanan
                  </span>
                  <span className="font-bold text-on-surface">Rp 100.000</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-on-surface">
                    Kegiatan Tahunan
                  </span>
                  <span className="font-bold text-on-surface">Rp 400.000</span>
                </div>
              </div>
              <button className="w-full py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[20px]">
                  chat
                </span>
                WA Panitia TK
              </button>
            </div>
            {/* MI */}
            <div className="bg-surface-container-lowest border-2 border-primary rounded-2xl p-6 flex flex-col relative md:scale-105 shadow-md">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-xs font-bold">
                TERFAVORIT
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-1">
                  Madrasah Ibtidaiyah
                </h3>
                <p className="text-xs text-on-surface-variant">
                  Setingkat SD (Full Day School)
                </p>
              </div>
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex justify-between items-center py-2 border-b border-outline-variant">
                  <span className="text-sm text-on-surface">Pendaftaran</span>
                  <span className="font-bold text-on-surface">Rp 200.000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant">
                  <span className="text-sm text-on-surface">
                    Seragam (5 Set)
                  </span>
                  <span className="font-bold text-on-surface">Rp 850.000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant">
                  <span className="text-sm text-on-surface">
                    SPP / Infaq Bulanan
                  </span>
                  <span className="font-bold text-on-surface">Rp 250.000</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-on-surface">
                    Buku &amp; Modul
                  </span>
                  <span className="font-bold text-on-surface">Rp 500.000</span>
                </div>
              </div>
              <button className="w-full py-3 rounded-xl bg-primary text-on-primary font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[20px]">
                  chat
                </span>
                WA Panitia MI
              </button>
            </div>
            {/* TPQ */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 flex flex-col hover:border-primary transition-all shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-1">
                  TPQ-Madin
                </h3>
                <p className="text-xs text-on-surface-variant">
                  Pendidikan Al-Qur'an Sore
                </p>
              </div>
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex justify-between items-center py-2 border-b border-outline-variant">
                  <span className="text-sm text-on-surface">Pendaftaran</span>
                  <span className="font-bold text-on-surface">Rp 50.000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant">
                  <span className="text-sm text-on-surface">
                    Seragam (1 Set)
                  </span>
                  <span className="font-bold text-on-surface">Rp 150.000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant">
                  <span className="text-sm text-on-surface">
                    Syahriyah Bulanan
                  </span>
                  <span className="font-bold text-on-surface">Rp 50.000</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-on-surface">
                    Kartu Prestasi
                  </span>
                  <span className="font-bold text-on-surface">Rp 25.000</span>
                </div>
              </div>
              <button className="w-full py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[20px]">
                  chat
                </span>
                WA Panitia TPQ
              </button>
            </div>
          </div>
          <p className="mt-12 text-center text-xs text-on-surface-variant">
            * Biaya dapat berubah sewaktu-waktu sesuai kebijakan yayasan.
            Tersedia beasiswa bagi yatim &amp; dhuafa.
          </p>
        </div>
      </section>
    </main>
  );
}
