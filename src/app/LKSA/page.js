import React from "react";
import Hero from "@/components/Hero";
import {
  MdPayments,
  MdAccountBalance,
  MdCheckCircleOutline,
  MdHealthAndSafety,
  MdHome,
  MdSchool,
} from "react-icons/md";

export default function LksaServices() {
  return (
    <main className="bg-background text-on-background">
      {/* Hero Section */}
      <Hero
        title="Layanan Sosial & LKSA Yayasan Madani"
        description="Berkomitmen dalam mewujudkan kesejahteraan anak melalui pengasuhan berbasis kasih sayang, nilai Islami, dan pendidikan yang berkelanjutan."
        bgImage="https://lh3.googleusercontent.com/aida-public/AB6AXuB0NxKNLc1S88jZb5uIznj1ATsCHNWowhMWbf_jBl41RF-7a6T31pNiVERfSaTpjHF-Okiyh0Fml4hUSDn3PQ-QDjp3lXeaMoHYko0HJdnGeCA37-dNQVh-jQHLqlxfOG3tR89FCPCASaHM4rJrUA2omfTTjuzt9HJ9V2BwIqPyFv4eSuhAq5plT_M6lbqvsDhydjFSm0NPmbAOm9kDZeSJhhLgWp1CoFyWCUbuWN_KakjfsjVeUfI-KM7giDhGCztcDgV0xvUU6g"
        primaryBtnText="Donasi Sekarang"
      />

      {/* Profil & Program Asuhan */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold mb-4">
                Profil LKSA
              </div>
              <h2 className="text-3xl font-bold text-on-surface mb-6">
                Membina Generasi Qurani yang Mandiri
              </h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Lembaga Kesejahteraan Sosial Anak (LKSA) Yayasan Madani saat ini
                menjadi rumah bagi 45 anak asuh dari berbagai latar belakang
                yatim, piatu, dan dhuafa. Kami hadir tidak hanya sebagai tempat
                bernaung, namun sebagai keluarga yang menjamin tumbuh kembang
                mereka secara holistik.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm">
                  <div className="text-primary font-bold text-3xl">45+</div>
                  <div className="text-sm text-on-surface-variant">
                    Anak Asuh
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm">
                  <div className="text-primary font-bold text-3xl">100%</div>
                  <div className="text-sm text-on-surface-variant">
                    Akses Pendidikan
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex gap-4 p-6 bg-surface-container-lowest rounded-xl shadow-sm border-l-4 border-primary">
                <span className="material-symbols-outlined text-primary text-3xl">
                  <MdSchool />
                </span>
                <div>
                  <h4 className="font-bold text-on-surface">
                    Pendidikan Formal &amp; Agama
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Menjamin sekolah 12 tahun dan hafalan Al-Qur'an harian.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-surface-container-lowest rounded-xl shadow-sm border-l-4 border-primary">
                <span className="material-symbols-outlined text-primary text-3xl">
                  <MdHome />
                </span>
                <div>
                  <h4 className="font-bold text-on-surface">
                    Hunian Layak &amp; Nyaman
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Asrama putra dan putri yang terpisah dengan fasilitas
                    bersih.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-surface-container-lowest rounded-xl shadow-sm border-l-4 border-primary">
                <span className="material-symbols-outlined text-primary text-3xl">
                  <MdHealthAndSafety />
                </span>
                <div>
                  <h4 className="font-bold text-on-surface">
                    Kesehatan &amp; Gizi
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Pemeriksaan rutin dan asupan makanan bergizi seimbang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Pengurus */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-on-surface mb-12">
            Struktur Pengurus LKSA
          </h2>
          <div className="flex flex-col items-center">
            {/* Chairman */}
            <div className="bg-primary text-on-primary p-6 rounded-xl shadow-md w-64 mb-12 relative">
              <h4 className="font-bold">Ketua LKSA</h4>
              <p className="text-sm opacity-90">H. Ahmad Fauzi, M.Pd</p>
              <div className="absolute h-12 w-0.5 bg-outline-variant top-full left-1/2 -translate-x-1/2"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 relative mb-12">
              <div className="absolute hidden md:block h-0.5 w-full bg-outline-variant top-0 left-0"></div>
              {/* Secretary & Treasurer */}
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm w-64 relative">
                <div className="absolute hidden md:block h-8 w-0.5 bg-outline-variant bottom-full left-1/2 -translate-x-1/2"></div>
                <h4 className="font-bold text-primary">Sekretaris</h4>
                <p className="text-sm text-on-surface-variant">
                  Siti Aminah, S.Sos
                </p>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm w-64 relative">
                <div className="absolute hidden md:block h-8 w-0.5 bg-outline-variant bottom-full left-1/2 -translate-x-1/2"></div>
                <h4 className="font-bold text-primary">Bendahara</h4>
                <p className="text-sm text-on-surface-variant">
                  Budi Santoso, S.E
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32">
              {/* Caretaker & Social Worker */}
              <div className="bg-surface-container p-6 rounded-xl shadow-sm w-64 border border-outline-variant/30">
                <h4 className="font-bold text-on-surface">Pengasuh Asrama</h4>
                <p className="text-sm text-on-surface-variant">
                  Ust. Ridwan &amp; Istri
                </p>
              </div>
              <div className="bg-surface-container p-6 rounded-xl shadow-sm w-64 border border-outline-variant/30">
                <h4 className="font-bold text-on-surface">Pekerja Sosial</h4>
                <p className="text-sm text-on-surface-variant">
                  Rina Wulandari, S.Tr.Sos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan & Aktivitas Sosial */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-on-surface mb-4">
                Layanan &amp; Aktivitas Sosial
              </h2>
              <p className="text-sm text-on-surface-variant">
                Setiap harinya dipenuhi dengan kegiatan yang membangun karakter,
                spiritualitas, dan keceriaan anak-anak kami.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Activity Card 1 */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="A group of young students sitting in a circle on a clean carpeted floor..."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSIZWyxW9EkeCClhuXS3XmlDOOc0dunRI1DbOM46AMSXFnvc00cLr0jQAOm6rLlGLBe0j8a5sISTC6t393oMh17flYLopKWnpheTd95Rx5IDV8-K_WVvlo2Jqzmb3E5QvebhKnHsWQMMkEIX3CaB3n-BJVjmdoUcBb2GnBuI7SDjA-EzQpo1Pl1oOcFb4FDd3vQkoyIFfQmPqIK_ctKHebTYIFe_gvOfwF4_LrTCVPPPXztMGaEh_gxa0JD66YM9o60Ib6RxzLJw"
                />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-on-surface mb-2">
                  Tahfidz &amp; Setoran
                </h4>
                <p className="text-xs text-on-surface-variant">
                  Kegiatan rutin ba'da Shubuh dan Maghrib untuk menjaga hafalan
                  Al-Qur'an.
                </p>
              </div>
            </div>
            {/* Activity Card 2 */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Close-up of children's hands working on a colorful handicraft project..."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyA9MfpnrazB2BBV6c7NYBTxZRQBw7V8jhiSWvFK2b5t3WyGLzk637_jkFpcz6RKMKCSPkD6TlGU3iKLEhxUi98gz2wxSEY-yp6aZns-9JfjuW9Fo0VSnUZxRF-tBAeNAArrb9DeymLvnpR8jpBv1Wk29wosRbkFqAeCWf_wiEtfzemSWk8OYFlFAnUHHKbVQXSz97RYt6fcFhvj2iaXJ0jFRO1YQw7ObfkuJPpxnHs6KimTtpkUSXtQ7EGURRnDg541FeSfBoag"
                />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-on-surface mb-2">
                  Pelatihan Keterampilan
                </h4>
                <p className="text-xs text-on-surface-variant">
                  Membekali anak dengan soft skill seperti komputer, kerajinan
                  tangan, dan tata boga.
                </p>
              </div>
            </div>
            {/* Activity Card 3 */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="A dignified distribution of social aid packages..."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKKPZhHujp_ZfeAs1VimTcu6tLXQFBJZGWC0F3O7fiYP5NtKF4MC5w89qvZyHKb6Epps-EIQTUoWwKP0vdTCvJAYx-JJEBScOdJdSPf2qrPu9uW_qtSyzjhN3JDCXJVKTndFZ0UAeDs9twLrM31iUvycHyznUTfNN7Ke1mbag_Xq1UTpeWswkmcN3cm5okrRjRWqZ15s83WFlLyXohNytZYut7IMjYeuUEP8cFBd_YGcI7e1eey-1SF78Bzgu8EX5MCNCDsIxahQ"
                />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-on-surface mb-2">
                  Santunan &amp; Logistik
                </h4>
                <p className="text-xs text-on-surface-variant">
                  Distribusi bantuan sembako dan kebutuhan pokok bagi keluarga
                  dhuafa sekitar.
                </p>
              </div>
            </div>
            {/* Activity Card 4 */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="A group of smiling children and mentors on a recreational field trip..."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaexFnRjfqdxIfwbiW-6SI_txEQGlKoOo-DKQRDh0-7WhbXBz5M6Nqjkz3NhnEGNwax1PDpjowKuAUX6vABcj-rqvw3mVNQRLXVDL8LAnHVB2tye5A2fGAaTLkSlK74M5CZauPp__c2bofBwUvHd1f7GlYcsMbY9VfVd9bX_w7EnNe_60v9UtawtU7eLhbSvtLfDLlsbsyYd2oVjSfl80stB516aAWbTxW6rgzFjklDZKeY2RwW1RwToKS-Xwjeoa8ZAgTvRqO1A"
                />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-on-surface mb-2">
                  Wisata Edukasi
                </h4>
                <p className="text-xs text-on-surface-variant">
                  Kegiatan rekreasi rutin untuk menyegarkan pikiran dan menambah
                  wawasan luar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pojok Donasi */}
      <section className="py-16 bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Pojok Donasi &amp; Berbagi
              </h2>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">
                Setiap rupiah yang Anda titipkan menjadi senyum dan masa depan
                bagi mereka. Kami mengelola amanah Zakat, Infak, dan Sedekah
                secara transparan dan akuntabel.
              </p>
              <div className="space-y-4">
                <div className="bg-on-primary/10 p-6 rounded-xl border border-on-primary/20 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">
                      Bank Syariah Indonesia (BSI)
                    </span>
                    <span className="material-symbols-outlined">
                      <MdPayments />
                    </span>
                  </div>
                  <div className="text-3xl font-mono tracking-wider mb-1">
                    7123 4567 89
                  </div>
                  <div className="text-xs opacity-80 uppercase tracking-wide">
                    an. Yayasan Madani Indonesia
                  </div>
                </div>
                <div className="bg-on-primary/10 p-6 rounded-xl border border-on-primary/20 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">Bank Mandiri</span>
                    <span className="material-symbols-outlined">
                      <MdAccountBalance />
                    </span>
                  </div>
                  <div className="text-3xl font-mono tracking-wider mb-1">
                    123-00-9876543-2
                  </div>
                  <div className="text-xs opacity-80 uppercase tracking-wide">
                    an. Yayasan Madani Indonesia
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest text-on-surface p-8 rounded-2xl shadow-xl border border-outline-variant/30">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                Konfirmasi Donasi
              </h3>
              <p className="text-sm text-on-surface-variant mb-6 text-center">
                Silakan lampirkan bukti transfer untuk pencatatan administrasi
                dan doa bersama.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">
                    <MdCheckCircleOutline />
                  </span>
                  <span className="text-sm">
                    Laporan donasi dikirim setiap bulan
                  </span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">
                    <MdCheckCircleOutline />
                  </span>
                  <span className="text-sm">
                    Tercatat secara resmi dalam sistem audit
                  </span>
                </div>
              </div>
              <a
                className="block w-full bg-[#25D366] text-white py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.89 9.884 0 2.225.569 3.945 1.694 5.493l-.957 3.497 3.753-.984zm11.387-4.146c-.258-.13-.1.144-.827-.144-1.527-.767-.173-.034-.3-.213-.127-.179-.542-.724-.903-1.207-.36-.483-.173-.034-.258-.258-.103-.224-.103-.448 0-.672.103-.224.448-.517.603-.715.155-.198.31-.31.414-.517.103-.207.052-.388 0-.517-.052-.129-.448-1.077-.614-1.474-.161-.387-.323-.334-.448-.34-.121-.006-.258-.007-.396-.007s-.362.052-.552.258c-.19.207-.724.707-.724 1.724s.741 2.017.844 2.155c.103.138 1.458 2.225 3.533 3.122.493.213.879.341 1.179.436.495.157.945.134 1.298.081.395-.058 1.207-.492 1.379-.966.173-.474.173-.879.121-.965-.052-.086-.19-.138-.448-.268z"></path>
                </svg>
                Konfirmasi Donasi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Legalitas */}
      <section className="py-8 bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-on-surface-variant text-xs">
            <span className="material-symbols-outlined">gavel</span>
            <p>
              Terdaftar secara resmi di Dinas Sosial:{" "}
              <strong>SK Tanda Daftar No. 460/123/LKS/DINSOS-2023</strong>
            </p>
            <span className="hidden md:block">|</span>
            <p>
              Izin Operasional LKSA: <strong>503/456-OPS/LKSA/2024</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
