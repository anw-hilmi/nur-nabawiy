import React from "react";

export default function Struktur({ title, headmaster, staffList = [], badge }) {
  return (
    <section className="py-12 md:py-16 bg-surface-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="text-2xl md:text-4xl font-bold text-on-surface mb-8 md:mb-12 text-center">
          {title}
        </h2>

        {/* Konten Utama Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Headmaster (Kepala Sekolah) - Mengambil 2 kolom dari tablet ke atas */}
          {headmaster && (
            <div className="sm:col-span-2 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm flex flex-col sm:flex-row border border-outline-variant/30">
              <img
                className="w-full sm:w-44 md:w-48 h-60 sm:h-auto object-cover"
                alt={headmaster.alt || headmaster.name}
                src={headmaster.image}
              />
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <p className="text-primary font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-1">
                  {headmaster.role}
                </p>
                <h4 className="text-lg sm:text-xl font-bold text-on-surface mb-2">
                  {headmaster.name}
                </h4>
                {headmaster.quote && (
                  <p className="text-on-surface-variant text-xs sm:text-sm italic leading-relaxed">
                    "{headmaster.quote}"
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Staff & Waka List - 1 kolom di HP, 2 kolom di tablet, 4 kolom di desktop */}
          {staffList.map((staff, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 text-center flex flex-col justify-center items-center"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-3 sm:mb-4 border-4 border-primary/20">
                <img
                  className="w-full h-full object-cover"
                  alt={staff.alt || staff.name}
                  src={staff.image}
                />
              </div>
              <p className="text-primary font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-1">
                {staff.role}
              </p>
              <h5 className="text-sm sm:text-base font-bold text-on-surface">
                {staff.name}
              </h5>
            </div>
          ))}

          {/* Teachers Badge Banner - Melebar penuh di semua ukuran layar */}
          {badge && (
            <div className="sm:col-span-2 lg:col-span-4 bg-primary text-on-primary rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm mt-2">
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6 w-full sm:w-auto">
                {/* Avatar Bulat Bertumpuk - Sembunyikan di HP sangat kecil jika terlalu padat */}
                <div className="flex -space-x-3 sm:-space-x-4 shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary bg-surface/20 backdrop-blur-sm"></div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary bg-surface/40 backdrop-blur-sm"></div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary bg-surface/60 backdrop-blur-sm"></div>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold">
                    {badge.title}
                  </h4>
                  <p className="text-xs sm:text-sm opacity-80 mt-0.5">
                    {badge.description}
                  </p>
                </div>
              </div>
              <button
                onClick={badge.onButtonClick}
                className="bg-surface-container-lowest text-primary px-6 py-2.5 rounded-xl font-bold hover:bg-surface-bright active:scale-95 transition-all text-xs sm:text-sm shadow-sm w-full sm:w-auto text-center shrink-0"
              >
                {badge.buttonText}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
