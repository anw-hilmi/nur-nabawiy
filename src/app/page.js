import React from "react";
import Image from "next/image";
import {
  MdAutoStories,
  MdApartment,
  MdVerifiedUser,
  MdFormatQuote,
} from "react-icons/md";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Component */}
      <section className="relative h-[870px] flex items-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="A group of diverse, happy Indonesian primary school students wearing clean uniforms, smiling warmly at the camera in a bright, sun-drenched modern outdoor courtyard."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbq0Yy0dopY4huCKKkF6qVq0Drt7yyjY6qx9THSNR2kV9yRG41vtTjLr9ucS7piJMEQ2YcOKyvIatoFlzROQyKoguI9-3751Hj59JIylljYBX8dG6Or4TapWW2QTR9AfIRgaShYEq4aS6TihzqqNtpu-Z2DPMJkUAnh7AY-r0aw-TWUDgfctGrvbPikgMp8Ridgm4BBozMUaB3mGBgIc0uu06xp1CbOkn-REWmElf3WB9XFpb4JeY-_eeBiOAKoDIfM-7DQo7IQw"
          />
          {/* Overlay gradien menggunakan warna --color-primary ke transparan */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full text-on-primary">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Mewujudkan Generasi Qurani dan Mandiri
            </h1>
            <p className="text-lg md:text-xl mb-8 text-surface/90">
              Dedikasi kami untuk memberikan pendidikan berkualitas berbasis
              nilai-nilai Islam serta pemberdayaan sosial bagi masyarakat yang
              membutuhkan.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-container text-on-primary-container px-8 py-3.5 rounded-xl font-semibold shadow-md hover:bg-opacity-90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
                Daftar Sekarang
              </button>
              <button className="border-2 border-on-primary text-on-primary px-8 py-3.5 rounded-xl font-semibold hover:bg-on-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-200">
                Donasi Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Sekilas Yayasan */}
        <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/30">
                <img
                  className="w-full h-full object-cover"
                  alt="Professional portrait of a middle-aged Indonesian male chairman wearing a formal batik shirt."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz3FCcO4LqIZ6rRYsgkMC32ryoI_dfJIzxHkWZkynAm2AI1844RavGz5lf9Wo0Ir0gXMxDVbvPf86gf7HOVBBmbml_ZixBPd_PHfdMMTHfUFtX2NqcYI3518YVpZCYHxU2QXIC8RgpbfQE9chBkvaKeu5IcKskEF4B2xI6y347enkrR23E4_X22hn80KkcSC7YMtCHJvTG70dstsHxr3EilwIUXA3o0fEAxq0XR6hNSzHdnSkRaWS5qwD1YicpHsNW7pwpJdJs8w"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-xl text-on-primary shadow-xl hidden md:block">
                <p className="font-medium mb-0 italic">
                  "Membangun masa depan umat."
                </p>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                SAMBUTAN KETUA
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-on-surface">
                Selamat Datang di Yayasan Madani
              </h2>
              <div className="space-y-4 text-on-surface-variant text-base leading-relaxed">
                <p>
                  Assalamu’alaikum Warahmatullahi Wabarakatuh. Segala puji bagi
                  Allah SWT yang telah memberikan kekuatan bagi kami untuk terus
                  berkhidmat dalam bidang pendidikan dan sosial.
                </p>
                <p>
                  Yayasan Madani hadir dengan visi besar untuk mencetak generasi
                  yang tidak hanya cerdas secara intelektual, namun juga kokoh
                  dalam karakter Qurani dan mandiri secara ekonomi. Kami percaya
                  bahwa pendidikan yang berlandaskan akhlak adalah pondasi utama
                  kemajuan bangsa.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/30">
                <p className="font-bold text-on-surface">
                  KH. Ahmad Ridwan, M.Pd.
                </p>
                <p className="text-sm text-secondary">
                  Ketua Umum Yayasan Madani
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Keunggulan/Nilai Utama (Bento Style) */}
        <section className="bg-surface-container py-16">
          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-on-surface">
                Mengapa Memilih Kami?
              </h2>
              <p className="text-secondary mt-2">
                Nilai-nilai utama yang kami tanamkan dalam setiap program.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary transition-colors duration-300">
                    <MdAutoStories />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-3">
                  Kurikulum Terintegrasi
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Memadukan kurikulum nasional dengan pendidikan tahfidz dan
                  karakter Islami yang kuat.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary transition-colors duration-300">
                    <MdApartment />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-3">
                  Fasilitas Lengkap
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Lingkungan belajar yang kondusif dengan laboratorium modern,
                  perpustakaan, dan masjid yang nyaman.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary transition-colors duration-300">
                    <MdVerifiedUser />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-3">
                  Fokus Akhlakul Karimah
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Menitikberatkan pada pembentukan adab dan perilaku terpuji
                  dalam setiap interaksi harian.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gerbang Unit & Sosial */}
        <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-on-surface">
                Unit Pendidikan &amp; Sosial
              </h2>
              <p className="text-secondary mt-2">
                Menyentuh berbagai lapisan masyarakat melalui unit-unit
                unggulan.
              </p>
            </div>
            <a
              className="text-primary font-bold flex items-center gap-2 hover:text-primary-container transition-colors"
              href="#"
            >
              Lihat Semua Unit{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Unit Cards template */}
            {[
              {
                title: "PAUD & TK",
                desc: "Pendidikan usia dini dengan metode bermain sambil belajar yang menyenangkan.",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAwwz_dSFTmkHQioPciEcOAVvJyI-CR085BV3BWF1gu1bKKFAnEuaJ1U5fyJDg_qF4oRWmc9tY7sNHZPztTlQPP_ZLYqmXnXuv12JeYulhfRUvUmuvPM09mkFUIWP27cx_YZ2_v4TbIXzqVcvLEyxY_umEHvXIHemobtMZtRCPFLxs96MLrpbacbEKuT0Rc7beHxvd2Vb7bC-v0ttqWd8lfrpdZEeTtckLxrrA1j2-6JPCJZ0inzUN9erTqlFgt6FSRM5bEAKKWA",
              },
              {
                title: "Madrasah Ibtidaiyah",
                desc: "Pendidikan dasar setingkat SD dengan kurikulum terpadu Kemenag &amp; Nasional.",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhTXmthXeM69VrjutKPQKuFkHBVeagIGVqXJif1_k46svO6G8DZ0cUO31xk7zcbVWgqUKHU2gOC1xOWtTpDZmwhJ6tWBnlxCPeHM4Hq3SFfBin0OctAKBKC_zN8bhaEcLZsUxAaoR0EaESq_w_S-2BQeC-IraT-aUIGJi6dzHRi6qj3qYZjL4uM53IrQuHUTVKkebgWQAZVjmXb-JXOC4R8JaljRzHmbceigM8sspxHYcCGylPxil56401Ui6R0YhZhFxzVOtMwg",
              },
              {
                title: "TPQ - Madin",
                desc: "Pusat pendalaman Al-Quran dan ilmu agama sore hari untuk warga sekitar.",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA5ebsWnG3EdOfHuZPRJloOopMwY9nEdmA100iiZyoUVWcaxwX-jfzumt4R3_vho87ZAoJjP-rt2KrLTYDqlgPhAIfHDVLVjVZxPdm74AEFXJpG7k87a56gJVN2YFzPKzOPs70T3gJImKCPu3r310HYW-ABKd1MeJofk-IvoV_VXhlvzpy0eM6xzUdjgktDyEdnom7uVf-CvXCMhTeJ618dXZRg4sn11_3ZII6nImy9fseO4h7TDZcUGeSqwettFt3V9Sn2DSbjA",
              },
              {
                title: "LKSA (Sosial)",
                desc: "Lembaga Kesejahteraan Sosial Anak yang melayani yatim dan dhuafa.",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuc82WTzW6MbmerL77rBDSTQ2UYTvu-94fa0XA1xbb2ExyDw-r8_Chk8BHUVZT0b-Rm1gNY7hRfgTEqG5DwtFaiwa6iuBpyrsH5ArLQf4DzgM0M4oDsb8QUOHnyqdgt2G08B-tq9Wi6jJxq7uznlk_4c7eiZYmhBU-PgGDmbHOKucYJtiLfbBnRYqBP5pPg0bgnv83Qrb-d1NXjL3F52pRIH5b8QFD0HvvNMa2P5pnP-3y6Sz_ap9_MCeDiYvz2JLGiNp1jUOXmg",
              },
            ].map((unit, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-surface border border-outline-variant/30 shadow-md"
              >
                <div className="aspect-square">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={unit.title}
                    src={unit.src}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-on-surface/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-1 text-surface">
                    {unit.title}
                  </h3>
                  <p className="text-xs mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 text-surface-bright/90">
                    {unit.desc}
                  </p>
                  <button className="bg-surface/20 backdrop-blur-md border border-surface/30 text-surface py-2 px-4 rounded-xl text-xs font-semibold hover:bg-primary-container hover:text-on-primary-container hover:border-transparent transition-all self-start">
                    Lihat Selengkapnya
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Berita & Pengumuman */}
        <section className="bg-surface-container-lowest py-16 border-t border-outline-variant/30">
          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-on-surface">
                Berita &amp; Pengumuman
              </h2>
              <p className="text-secondary mt-2">
                Tetap terupdate dengan kegiatan dan kabar terbaru kami.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* News 1 */}
              <article className="flex flex-col gap-4 group">
                <div className="aspect-video rounded-xl overflow-hidden border border-outline-variant/50 shadow-sm">
                  <img
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    alt="Graduation ceremony"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXwwnZO9rbZ0m3D42w8HqHk_zf7wkkpDzAtS5Mn_h8kdCfPLM1rpRXiDqnptYy_3u1CPldef1zHOcCMRhBkKuwuDNj3aobq1LqeSkJqrs6KKU4N15H-SEpgezEFYnxwA41u_VKhL0PjoKi6dbkIs-8tFArJE9YeaFqGsleTH6hBu_6xuIp1aT0_O-mz-FcIGi-0w1A62H4_fGxN7rU3vscRPqtqduB_xWljimwPhe6yiySFkF05UEXAFU-m0hz4daGuZoy32BEfg"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-primary font-bold text-xs uppercase tracking-wider">
                    PENDIDIKAN
                  </span>
                  <h3 className="text-lg font-bold text-on-surface leading-snug group-hover:text-primary cursor-pointer transition-colors">
                    Wisuda Tahfidz Angkatan VII: Mencetak 50 Hafidz Baru
                  </h3>
                  <p className="text-on-surface-variant text-sm line-clamp-2">
                    Pencapaian luar biasa tahun ini dengan lulusnya 50 santri
                    yang telah menyelesaikan hafalan 30 juz.
                  </p>
                  <time className="text-xs text-secondary flex items-center gap-1 pt-1">
                    <span className="material-symbols-outlined text-sm">
                      calendar_month
                    </span>{" "}
                    15 Juni 2024
                  </time>
                </div>
              </article>

              {/* News 2 */}
              <article className="flex flex-col gap-4 group">
                <div className="aspect-video rounded-xl overflow-hidden border border-outline-variant/50 shadow-sm">
                  <img
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    alt="Social aid distribution"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxHxO5_diJTB8oj0ZeLL7xVi9iKii8mgJ1ea16Bggs0t5pTyIPFMorT77Ek-1HJKLoqMrR0uEAb2lw6v6giHgOruPCJCeBsq6Q_5wnHRW0QzbxODar-GTdko1BGo2lPcfp4n2JuKuDCrjBgautN-YlParqzibIwz3x_WVZEjYlFVF2gD3dqK_s4E7vVOB_rl9_VFwsa2DeT_x0iMIudwtliThcfqYOIfCEZ9P9VFMGhhNoo8uwbObsQv5aNd2I9MENYB6Rb3kc_A"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-primary font-bold text-xs uppercase tracking-wider">
                    SOSIAL
                  </span>
                  <h3 className="text-lg font-bold text-on-surface leading-snug group-hover:text-primary cursor-pointer transition-colors">
                    Penyaluran Paket Sembako untuk Masyarakat Terdampak
                  </h3>
                  <p className="text-on-surface-variant text-sm line-clamp-2">
                    Unit LKSA Madani menyalurkan lebih dari 500 paket sembako
                    kepada dhuafa di wilayah sekitar yayasan.
                  </p>
                  <time className="text-xs text-secondary flex items-center gap-1 pt-1">
                    <span className="material-symbols-outlined text-sm">
                      calendar_month
                    </span>{" "}
                    10 Juni 2024
                  </time>
                </div>
              </article>

              {/* News 3 */}
              <article className="flex flex-col gap-4 group">
                <div className="aspect-video rounded-xl overflow-hidden border border-outline-variant/50 shadow-sm">
                  <img
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    alt="Science lab"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_8P0I15hLENjBNAmjZc8IyVP94pQK8w8PT4CWmeaZTNz7_ba8txXDHcFityRTsYosG9a9pnQAgCOYn04dFVQl2PlXmyjEU7P_JJPvNsh0yoG_f-z0WJaI-Mrk_w7W67X2jJ8z8kj0H44gplaBW98ONmEakmR3Is53azgOkIMiyMBib2iVqWWVn4CVzGMglEDUF6N_LrTUA5OyTFMfayDg0A3r2mUHaVz51yZySu8-4a1LvdIW1BMZSKjLW572PJx_vu3LmnlLOw"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-primary font-bold text-xs uppercase tracking-wider">
                    PPDB
                  </span>
                  <h3 className="text-lg font-bold text-on-surface leading-snug group-hover:text-primary cursor-pointer transition-colors">
                    Penerimaan Peserta Didik Baru (PPDB) TA 2024/2025
                  </h3>
                  <p className="text-on-surface-variant text-sm line-clamp-2">
                    Pendaftaran telah dibuka untuk jenjang PAUD dan MI. Segera
                    amankan kuota putra-putri Anda.
                  </p>
                  <time className="text-xs text-secondary flex items-center gap-1 pt-1">
                    <span className="material-symbols-outlined text-sm">
                      calendar_month
                    </span>{" "}
                    01 Juni 2024
                  </time>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 mb-16 rounded-3xl mx-6 md:mx-12 max-w-7xl lg:mx-auto text-center px-8 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-on-primary mb-4">
            Mari Berkontribusi dalam Kebaikan
          </h2>
          <p className="text-surface-bright/80 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
            Dukungan Anda sangat berarti bagi kelangsungan pendidikan anak-anak
            yatim dan dhuafa di yayasan kami.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-surface-container-lowest text-primary px-8 py-3.5 rounded-xl font-bold hover:bg-surface-container transition-all shadow-md hover:-translate-y-0.5">
              Hubungi Kami
            </button>
            <button className="bg-primary-container text-on-primary-container px-8 py-3.5 rounded-xl font-bold hover:bg-opacity-90 hover:shadow-lg transition-all hover:-translate-y-0.5">
              Donasi via WhatsApp
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
