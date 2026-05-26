"use client";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import { FiYoutube } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container border-t border-outline-variant">
      {/* CONTAINER DENGAN PADDING LAYAR (MAX-WIDTH & CENTERED) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">
              Yayasan Nur Nabawiy
            </h2>

            <p className="text-sm leading-relaxed text-on-surface-variant">
              Yayasan pendidikan yang berkomitmen membangun generasi berakhlak,
              berilmu, dan berdaya saing melalui pendidikan islami dan modern.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="font-semibold mb-4 text-sm tracking-wide text-on-surface">
              Navigasi
            </h3>

            <ul className="space-y-2 text-sm">
              <FooterLink href="/">Beranda</FooterLink>
              <FooterLink href="/Profil">Profil</FooterLink>
              <FooterLink href="/LKSA">LKSA</FooterLink>
              <FooterLink href="/Pendaftaran">Pendaftaran</FooterLink>
              <FooterLink href="/Kontak">Kontak</FooterLink>
            </ul>
          </div>

          {/* Unit Pendidikan */}
          <div>
            <h3 className="font-semibold mb-4 text-sm tracking-wide text-on-surface">
              Unit Pendidikan
            </h3>

            <ul className="space-y-2 text-sm">
              <FooterLink href="/PAUD">PAUD</FooterLink>
              <FooterLink href="/Tk">TK</FooterLink>
              <FooterLink href="/MI">MI</FooterLink>
              <FooterLink href="/TPQ-Madin">TPQ & Madin</FooterLink>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-semibold mb-4 text-sm tracking-wide text-on-surface">
              Kontak
            </h3>

            <div className="space-y-2 text-sm text-on-surface-variant">
              <p>Email : info@yayasananda.com</p>
              <p>WhatsApp : 0812-XXXX-XXXX</p>
              <p>Jl. Gatot Subroto, Kota Pasuruan</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs gap-4 border-t border-outline-variant text-secondary">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Yayasan Nur Nabawiy. All rights
            reserved.
          </p>

          <div className="flex gap-3">
            <SocialIcon href="#">
              <IoLogoInstagram size={18} />
            </SocialIcon>
            <SocialIcon href="#">
              <SlSocialFacebook size={18} />
            </SocialIcon>
            <SocialIcon href="#">
              <FiYoutube size={18} />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* FOOTER LINK - PERBAIKAN: li sekarang berada di posisi paling luar */
function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-primary text-on-surface-variant transition-colors py-1 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
      >
        {children}
      </Link>
    </li>
  );
}

/* SOCIAL ICON */
function SocialIcon({ children, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full inline-flex items-center justify-center bg-surface-container-lowest border border-outline-variant text-primary transition-all duration-200 hover:bg-primary hover:text-on-primary hover:border-primary hover:scale-110 mx-auto block w-fit"
    >
      {children}
    </a>
  );
}
