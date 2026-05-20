import React from "react";

export default function Hero({
  badge,
  title,
  description,
  bgImage,
  primaryBtnText,
  secondaryBtnText,
}) {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover brightness-[0.75]"
          alt={title}
          src={bgImage}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:block hidden"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl bg-surface/30 backdrop-blur-md p-8 rounded-2xl border border-white/20">
          {badge && (
            <span className="inline-block bg-primary/20 text-on-primary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              {badge}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-base md:text-lg text-surface-bright/90 mb-8 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            {primaryBtnText && (
              <button className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all">
                {primaryBtnText}
              </button>
            )}
            {secondaryBtnText && (
              <button className="bg-surface/20 text-white border border-white/40 px-8 py-3 rounded-xl font-bold backdrop-blur-sm hover:bg-surface/40 transition-all">
                {secondaryBtnText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
