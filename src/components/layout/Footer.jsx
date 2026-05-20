"use client";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import { FiYoutube } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import { MdWhatsapp } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container border-t border-outline-variant">
      {/* CONTAINER DENGAN PADDING LAYAR (MAX-WIDTH & CENTERED) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
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
              <FooterLink href="/1profil">Profil</FooterLink>
              <FooterLink href="/5lksa">LKSA</FooterLink>
              <FooterLink href="/6ppdb">Pendaftaran</FooterLink>
              <FooterLink href="/7kontak">Kontak</FooterLink>
            </ul>
          </div>

          {/* Unit Pendidikan */}
          <div>
            <h3 className="font-semibold mb-4 text-sm tracking-wide text-on-surface">
              Unit Pendidikan
            </h3>

            <ul className="space-y-2 text-sm">
              <FooterLink href="/3paud">PAUD & TK</FooterLink>
              <FooterLink href="/4mi">MI</FooterLink>
              <FooterLink href="/2tpq">TPQ & Madin</FooterLink>
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
            <SocialIcon href="https://wa.me/62812XXXXXXXX">
              <MdWhatsapp size={18} />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* FOOTER LINK */
function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-on-surface-variant transition-colors duration-200 hover:text-primary"
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
      className="p-2 rounded-full inline-flex items-center justify-center bg-surface-container-lowest border border-outline-variant text-primary hover:bg-secondary-container mx-auto block w-fit"
    >
      {children}
    </a>
  );
}
