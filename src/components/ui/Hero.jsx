"use client";

export default function Hero({ title, bgImage }) {
  return (
    // Menggunakan pt-20 (80px) agar pas dengan tinggi h-20 milik NavBar Anda
    <section className="relative h-[260px] sm:h-[360px] md:h-[460px] lg:h-[500px] pt-20 flex items-end justify-center text-center overflow-hidden section">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent)",
        }}
      />

      {/* Title */}
      <div className="relative z-10 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 w-full max-w-5xl container-main">
        <h1
          className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-tight tracking-tight max-w-3xl mx-auto break-words"
          style={{
            color: "white",
            textShadow: "0 4px 12px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
