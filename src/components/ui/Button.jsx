import React from "react";
import Link from "next/link";

export default function Button({
  children = "Daftar Sekarang",
  className = "bg-primary-container text-on-primary-container hover:bg-opacity-90",
  href = "#",
  ...props
}) {
  return (
    <Link
      href={href}
      className={`px-5 py-2.5 sm:px-8 sm:py-3.5 text-sm sm:text-base rounded-xl font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-200 inline-flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
