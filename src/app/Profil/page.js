import React from "react";
import { MdGavel } from "react-icons/md";

export default function Profil() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            className="w-full h-full object-cover"
            alt="A wide angle photograph of a serene educational campus at sunrise, with soft golden light filtering through lush green trees."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJsbmpP5Fadr6DeAUilourFbwFi3jT3yAbi7k5zaTj68aLHvcxdjBlMPxML5BXnSg_HjgxWPL3vL9cFqT0JOd6aPM7m1c1iahmlWuKg-jiKUmpfjcNKxi0aJ_cOgNBTvN5eIyNcRNdLNxtoy9OJZXdbGhKFqC1F7XJxPkqIc78lUAEEpsgq7ji_VWHxS-ceBeffHSieLgOig2R0ZC4cydYbHZppXte2an5iTtdj9vRpiLiZi3JNW3DTbsTaC0JRM2mDhatu2yT0UQ"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-on-primary mb-4">
            Profil Yayasan
          </h1>
          <p className="text-lg text-surface-bright max-w-2xl mx-auto opacity-90">
            Mendedikasikan diri untuk mencetak generasi Qurani yang unggul,
            berakhlak mulia, dan mandiri sejak tahun 2010.
          </p>
        </div>
      </header>

      {/* Sejarah Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full">
                <span className="material-symbols-outlined text-[18px]">
                  history
                </span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Sejarah Kami
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-on-surface">
                Perjalanan Membangun Peradaban
              </h2>
              <div className="space-y-4 text-base text-on-surface-variant text-justify leading-relaxed">
                <p>
                  Didirikan pada tahun 2010 di tengah kebutuhan masyarakat akan
                  pendidikan yang memadukan keunggulan akademik dan nilai-nilai
                  spiritual, Yayasan Madani bermula dari sebuah inisiatif kecil
                  di lingkungan perumahan. Fokus utama kami adalah memastikan
                  setiap anak memiliki akses terhadap Al-Qur'an dan pendidikan
                  karakter.
                </p>
                <p>
                  Dalam kurun waktu satu dekade, yayasan telah bertumbuh pesat.
                  Dari sekadar rumah tahfidz, kini kami menaungi berbagai unit
                  pendidikan mulai dari PAUD hingga Sekolah Menengah, serta
                  berbagai divisi pelayanan sosial yang menjangkau ribuan
                  penerima manfaat di seluruh wilayah.
                </p>
              </div>
              {/* Milestones Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="p-5 bg-surface-container border border-outline-variant/30 rounded-xl">
                  <span className="text-primary font-bold text-2xl">2010</span>
                  <p className="text-sm font-medium text-on-surface mt-1">
                    Pendirian Yayasan &amp; Rumah Tahfidz Pertama
                  </p>
                </div>
                <div className="p-5 bg-surface-container border border-outline-variant/30 rounded-xl">
                  <span className="text-primary font-bold text-2xl">2015</span>
                  <p className="text-sm font-medium text-on-surface mt-1">
                    Peresmian Gedung Pusat Pendidikan Terpadu
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border border-outline-variant/20">
                <img
                  className="w-full h-full object-cover"
                  alt="A documentary style photograph capturing a group of diverse students and teachers engaged in a collaborative learning activity within a bright, airy classroom."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2SEofouK_4rDlQT3tKWIVuFetq9ivIqn27pnsQjdnu3pUg4aPKXERh8q69-7nC273-yLpf-JfFeATF5oExWkfzkne1cv-o8IMFCWlcu01xAVlQfuSEsgJflvgfNyC84hw4giyCB9qK4brtk3_JZDAHB7SmgRUWMHaU8ZwmoHp9rJGSVIEsD4ZLNLpFPZLMy2-oM6R4P6ckNZRE2IOlrddGllqGNGGXRPxY_A6xUT2kWMvv_uS_vdZ4mf0gEbAvzyrgtViXvUhYg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-2xl shadow-xl hidden md:block text-center min-w-[120px]">
                <p className="text-on-primary text-4xl font-bold">14+</p>
                <p className="text-surface-bright/80 text-xs font-medium uppercase tracking-wider mt-1">
                  Tahun Berbakti
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section (Bento Grid Style) */}
      <section className="py-16 bg-surface-container">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-2">
              Visi &amp; Misi
            </h2>
            <p className="text-secondary text-sm">
              Landasan utama kami dalam melangkah dan berkarya.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Vision */}
            <div className="lg:col-span-1 bg-primary p-8 rounded-2xl text-on-primary flex flex-col justify-between shadow-md">
              <div>
                <span className="material-symbols-outlined text-4xl mb-4">
                  visibility
                </span>
                <h3 className="text-2xl font-bold mb-4">Visi</h3>
                <p className="text-base leading-relaxed italic opacity-90">
                  "Menjadi lembaga pendidikan dan sosial terdepan dalam
                  mewujudkan masyarakat madani yang berlandaskan nilai-nilai
                  Qurani dan kemandirian."
                </p>
              </div>
            </div>
            {/* Mission Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-surface-container-lowest border border-outline-variant/50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">menu_book</span>
                </div>
                <h4 className="font-bold text-on-surface mb-2">
                  Pendidikan Berkualitas
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Menyelenggarakan pendidikan formal dan non-formal berbasis
                  karakter dan Tahfidzul Qur’an.
                </p>
              </div>
              <div className="p-6 bg-surface-container-lowest border border-outline-variant/50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">
                    volunteer_activism
                  </span>
                </div>
                <h4 className="font-bold text-on-surface mb-2">
                  Pemberdayaan Sosial
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Mengembangkan program sosial untuk meningkatkan kesejahteraan
                  umat secara berkelanjutan.
                </p>
              </div>
              <div className="p-6 bg-surface-container-lowest border border-outline-variant/50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <h4 className="font-bold text-on-surface mb-2">
                  Kemandirian Ekonomi
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Mencetak generasi yang mandiri secara ekonomi melalui
                  pembekalan soft skill dan kewirausahaan.
                </p>
              </div>
              <div className="p-6 bg-surface-container-lowest border border-outline-variant/50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <h4 className="font-bold text-on-surface mb-2">
                  Ukhuwah Islamiyah
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Mempererat tali silaturahmi dan sinergi antar elemen
                  masyarakat dalam kebaikan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-2">
              Struktur Organisasi
            </h2>
            <p className="text-secondary text-sm">
              Dikelola oleh tenaga profesional dan amanah.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-12">
            {/* Top Tier */}
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center group">
                <div className="w-32 h-32 rounded-full border-4 border-primary/20 p-1 mb-4 mx-auto group-hover:border-primary transition-colors duration-300">
                  <img
                    className="w-full h-full object-cover rounded-full shadow-inner"
                    alt="A professional headshot of a middle-aged man with a warm, trustworthy expression."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy2iHZ__4RHwwjwN2KXDlhAzLxGGt2kiBKTukErE7I7sbRXUaTPPXhIzybz8WlnvOuyrUBVT7f0Hl6BPLdoulUfekwtRh078dQo31NLTUW8SxYSWYyfZXPALVw7HS9Qduz_5wZ6jJMR200ACWWb21UAjKxDfNcQwTbnOpJ6affnLCjIH8nkwimpEl2Jyl7e2ClSF_3ggr-g3n4kLv6uvejaWPtblw-opBX3HOOXNHQtXh4tGpACo2XshwvGi0OKTmDv9fii2t_ww"
                  />
                </div>
                <h4 className="font-bold text-on-surface text-lg">
                  Dr. H. Ahmad Madani
                </h4>
                <p className="text-xs text-primary font-bold uppercase tracking-wider mt-0.5">
                  Pembina
                </p>
              </div>
            </div>
            {/* Middle Tier */}
            <div className="flex flex-wrap justify-center gap-12">
              <div className="text-center group">
                <div className="w-28 h-28 rounded-full border-2 border-outline-variant p-1 mb-4 mx-auto group-hover:border-primary transition-colors duration-300">
                  <img
                    className="w-full h-full object-cover rounded-full shadow-inner"
                    alt="A professional portrait of a senior man in a formal suit, radiating experience and integrity."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb0h8Z003SOOMFvqQiB6yPr0ZI0TPFP2OsNZpPq4ZbP-3_nOhcNcitYbwTtIq1gV-0ddbMpn6on40NyJcDX5bdbcV41YvMz6JwHvMU3_hyBatJrbRasxo-GNsQ4aj0kB9JVL0Ngjxusq5h6aZ1034EiWF3HZZcDSRWOyQzmsvYsmWFO-n0b0JFE7TihFqBa8884ajgi2jwMVVAP-TyieQGHrsLg3v8F0I1nQfI5xRVsolwQJogdQQtVTmDV9s4khPgyP6DhdlHhw"
                  />
                </div>
                <h4 className="font-bold text-on-surface">Drs. M. Yusuf</h4>
                <p className="text-xs text-secondary font-medium uppercase tracking-wider mt-0.5">
                  Pengawas
                </p>
              </div>
              <div className="text-center group">
                <div className="w-28 h-28 rounded-full border-2 border-primary p-1 mb-4 mx-auto group-hover:scale-105 transition-transform duration-300">
                  <img
                    className="w-full h-full object-cover rounded-full shadow-inner"
                    alt="A professional corporate headshot of a young, confident man with a friendly smile."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsbuFQVlOxxkJB4MVP-D1GBG8ZxfftoTNBFcOFOLA-FRzh3VBABzbxlNkqBf68p0XDMV18wj5BcJfg_XwjtI1qkdxgh7Pyf2rXbghL1NVd-6O4bHKovwO3RYf8eYo1MRVChCChEZJCBaewjZKtwpzUx7HK72SlmtYzQAz2kLTVnFSGLuJ_IoaF1tbVSzoKDXNuhKwv9htmNCVJ5y-a7IieOklv7xJWobmeuSZGpGEUIq7ZBU_Vyq3NQ6fWqIKK336OelDuAIe65g"
                  />
                </div>
                <h4 className="font-bold text-on-surface">
                  Ikhsan Pratama, M.Pd
                </h4>
                <p className="text-xs text-primary font-bold uppercase tracking-wider mt-0.5">
                  Ketua Yayasan
                </p>
              </div>
            </div>
            {/* Operational Tier */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl pt-4">
              {[
                {
                  name: "Siti Sarah, S.E",
                  role: "Sekretaris",
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu1QjX52grOLtQ6td1j6Jn-al6kR4Fc-X4c4ro8W5dNwtTeIXRCU9eZbHJgJziLzXNHS39NkSoE-IW2JY1ZLUUxFvvdl9HGfdM9uA4pOfLwmr2BxTGnNdXV_CDcFZhh7RxQeDgnpCi14abvi9ASsNEmbO1YDLJSKp7tMjRDjrBmBNZ7l7ytlUMyc1kVSFXf2VKnkiDeppgLfB_Z_mwPWwRbIPWsXWRDDtQVhkbGy1hYGGnu-1fep4vxwcqegvNZ_T8VySPgOuxWw",
                },
                {
                  name: "Rahman Hakim",
                  role: "Bendahara",
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuGTVIdRK1dCG92q1sNnEYdIR9SN_3Hq_r1_XqO2y2ZkweG5UI_c5gAkZqlxpYZYBqKEmjkFEMoPO8KNTHCx4vYpksKC7a-XZx3Tb2TZ2JwMvaMnOtNR1ARnX_yo8AqLy0JFQXorWzopf697tzKAx0V5ZT8MIlwJAsMCX2elFZdH-ZI9TWzKxJ-KbCQ5t9cOAQincWvjxJc04B3FgTUegEDj6HCQzCvQy11WhEbiPhLi2YjBACB_trsytdYU-s7Ha6wMjXNHoN6w",
                },
                {
                  name: "Laila Kamilah",
                  role: "Kabid Pendidikan",
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrqH52fE0sfHC6FxAGdxiygqQgLCUUOIf1NGpZDMHVCIZuKGeMF8IzFBXBtrthEXaWMsrVxB0lPvi87UITqvD4kJmXWBy1jwSbbXfO1R0dPMUGD4GGWHByEgonUGXO03xW0NEDL6Y19FqP8dJY-XtqWqL40sLZdR4zA95BjzI8eZbL3ahou8lZz0wcaeOYSa0wV6EvX1fop58GR68vCVq7uhc7RZ7EiWxvQzzmqKVfQN6B1EbrvR1v0Z9_ZN2SqyWb9wP5Hg4RWQ",
                },
                {
                  name: "Nurul Fitri",
                  role: "Kabid Sosial",
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_oZx5f-Oq3ZYXtGiTyxAgpMx-aveO3CNrg-Y0j3XXDS9edXqiztDC6B_Y48ny5twr4BIHNo4JgoH04wF_xOMDFJEPmw9a1kX25ZWtV2GcUEI5WVPcPoWWRWrvROQQWdHVlp7cIQzqirvwtBBTFU_085zKUCQ6XWmUxFTtSzMnnuGUj9JH_1s0N-tPl_bMvWMuQhSeFmC0boHUX32NbieGW2riJgbqrqruRdKOITThdmyp7uHHAC_9bg65CUOH2I3N8oJmrPj3Yg",
                },
              ].map((staff, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 rounded-full bg-surface-container-high border border-outline-variant/30 mb-3 mx-auto overflow-hidden shadow-sm">
                    <img
                      className="w-full h-full object-cover"
                      alt={staff.name}
                      src={staff.src}
                    />
                  </div>
                  <h5 className="font-semibold text-base text-on-surface">
                    {staff.name}
                  </h5>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    {staff.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legalitas Section */}
      <section className="py-12 bg-surface-container-high/40 border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/50 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-5">
              <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center rounded-full shrink-0">
                <span className="material-symbols-outlined text-2xl">
                  <MdGavel />
                </span>
              </div>
              <div>
                <h3 className="font-bold text-on-surface text-lg">
                  Legalitas &amp; Transparansi
                </h3>
                <p className="text-sm text-on-surface-variant mt-0.5">
                  Yayasan Madani beroperasi di bawah payung hukum yang sah dan
                  transparan.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-center sm:text-left w-full lg:w-auto">
              <div>
                <p className="text-xs text-secondary uppercase font-bold tracking-wider">
                  SK Kemenkumham
                </p>
                <p className="text-base font-semibold text-primary mt-0.5">
                  AHU-0012345.AH.01.04.2010
                </p>
              </div>
              <div>
                <p className="text-xs text-secondary uppercase font-bold tracking-wider">
                  Izin Operasional
                </p>
                <p className="text-base font-semibold text-primary mt-0.5">
                  Nomor: 421.1/987-Disdik/2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
