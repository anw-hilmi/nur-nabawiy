import React from "react";

export default function Struktur({ title, headmaster, staffList, badge }) {
  return (
    <section className="py-16 bg-surface-container">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-12 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Headmaster */}
          <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row border border-outline-variant/30">
            <img
              className="w-full md:w-48 h-64 md:h-auto object-cover"
              alt={headmaster.alt}
              src={headmaster.image}
            />
            <div className="p-8 flex flex-col justify-center">
              <p className="text-primary font-bold text-xs uppercase tracking-wider mb-1">
                {headmaster.role}
              </p>
              <h4 className="text-xl font-bold text-on-surface mb-2">
                {headmaster.name}
              </h4>
              <p className="text-on-surface-variant text-sm italic leading-relaxed">
                "{headmaster.quote}"
              </p>
            </div>
          </div>

          {/* Staff List */}
          {staffList.map((staff, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 text-center flex flex-col justify-center"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                <img
                  className="w-full h-full object-cover"
                  alt={staff.alt}
                  src={staff.image}
                />
              </div>
              <p className="text-primary font-bold text-xs uppercase tracking-wider mb-1">
                {staff.role}
              </p>
              <h5 className="text-base font-bold text-on-surface">
                {staff.name}
              </h5>
            </div>
          ))}

          {/* Teachers Badge */}
          <div className="md:col-span-4 bg-primary text-on-primary rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-primary bg-surface/20 backdrop-blur-sm"></div>
                <div className="w-12 h-12 rounded-full border-2 border-primary bg-surface/40 backdrop-blur-sm"></div>
                <div className="w-12 h-12 rounded-full border-2 border-primary bg-surface/60 backdrop-blur-sm"></div>
              </div>
              <div>
                <h4 className="text-xl font-bold">{badge.title}</h4>
                <p className="text-sm opacity-80 mt-0.5">{badge.description}</p>
              </div>
            </div>
            <button
              onClick={badge.onButtonClick}
              className="bg-surface-container-lowest text-primary px-6 py-2.5 rounded-xl font-bold hover:bg-surface-bright transition-all text-sm shadow-sm"
            >
              {badge.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
