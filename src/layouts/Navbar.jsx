"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Image from "next/image";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [unitOpen, setUnitOpen] = useState(false);
  const [desktopUnitOpen, setDesktopUnitOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const pathname = usePathname();

  /* SHADOW & COLOR CHANGE ON SCROLL */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* CLOSE DROPDOWN WHEN CLICKED OUTSIDE */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopUnitOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* CLOSE MENU ON NAVIGATION */
  useEffect(() => {
    setMobileOpen(false);
    setUnitOpen(false);
    setDesktopUnitOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] backdrop-blur-xl transition-all duration-300 border-b
      ${
        scrolled
          ? "bg-surface-container/90 shadow-md border-outline-variant"
          : "bg-surface/80 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 font-bold group">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-cover rounded-xl group-hover:scale-105 transition-transform"
              priority
            />
            <span className="hidden md:inline text-lg text-primary">
              Yayasan Nur Nabawiy
            </span>
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-on-surface">
            <NavLink href="/" pathname={pathname}>
              Beranda
            </NavLink>
            <NavLink href="/Profil" pathname={pathname}>
              Profil
            </NavLink>

            {/* Dropdown Unit Pendidikan */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDesktopUnitOpen(!desktopUnitOpen)}
                className={`flex items-center gap-1 transition-colors hover:text-primary
                ${pathname.startsWith("/PAUD") || pathname.startsWith("/TK") || pathname.startsWith("/MI") || pathname.startsWith("/TPQ-Madin") ? "text-primary font-semibold" : "text-on-surface"}`}
              >
                Unit Pendidikan
                <span
                  className={`transition-transform duration-200 ${desktopUnitOpen ? "rotate-180 text-primary" : ""}`}
                >
                  <TiArrowSortedDown />
                </span>
              </button>

              {desktopUnitOpen && (
                <div className="absolute left-0 mt-4 w-56 bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <DropdownLink href="/PAUD" pathname={pathname}>
                    PAUD
                  </DropdownLink>
                  <DropdownLink href="/TK" pathname={pathname}>
                    TK
                  </DropdownLink>
                  <DropdownLink href="/MI" pathname={pathname}>
                    MI
                  </DropdownLink>
                  <DropdownLink href="/TPQ-Madin" pathname={pathname}>
                    TPQ & Madin
                  </DropdownLink>
                </div>
              )}
            </div>

            <NavLink href="/LKSA" pathname={pathname}>
              LKSA
            </NavLink>
            <NavLink href="/Pendaftaran" pathname={pathname}>
              Pendaftaran
            </NavLink>
            <NavLink href="/Kontak" pathname={pathname}>
              Kontak
            </NavLink>
          </nav>

          {/* MOBILE BUTTON */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-2xl p-2 rounded-xl bg-surface-container border border-outline-variant text-primary"
            >
              {mobileOpen ? <RxCross2 /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <MobileLink href="/" pathname={pathname}>
            Beranda
          </MobileLink>
          <MobileLink href="/Profil" pathname={pathname}>
            Profil
          </MobileLink>

          <div>
            <button
              onClick={() => setUnitOpen(!unitOpen)}
              className="w-full flex justify-between items-center px-6 py-3 text-on-surface font-medium hover:bg-surface-container transition-colors"
            >
              Unit Pendidikan
              <span
                className={`transition-transform duration-200 ${unitOpen ? "rotate-180 text-primary" : ""}`}
              >
                <TiArrowSortedDown />
              </span>
            </button>

            {unitOpen && (
              <div className="bg-surface-container border-y border-outline-variant/30">
                <MobileLink href="/PAUD" pathname={pathname} isNested>
                  PAUD
                </MobileLink>
                <MobileLink href="/TK" pathname={pathname} isNested>
                  TK
                </MobileLink>
                <MobileLink href="/MI" pathname={pathname} isNested>
                  MI
                </MobileLink>
                <MobileLink href="/TPQ-Madin" pathname={pathname} isNested>
                  TPQ & Madin
                </MobileLink>
              </div>
            )}
          </div>

          <MobileLink href="/LKSA" pathname={pathname}>
            LKSA
          </MobileLink>
          <MobileLink href="/Pendaftaran" pathname={pathname}>
            Pendaftaran
          </MobileLink>
          <MobileLink href="/Kontak" pathname={pathname}>
            Kontak
          </MobileLink>
        </div>
      )}
    </header>
  );
}

/* NAV LINK COMPONENTS */
function NavLink({ href, children, pathname }) {
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100
      ${active ? "text-primary font-semibold after:scale-x-100" : "hover:text-primary text-on-surface"}`}
    >
      {children}
    </Link>
  );
}

function DropdownLink({ href, children, pathname }) {
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`block px-4 py-2.5 rounded-xl transition-colors text-sm
      ${active ? "bg-primary-container text-on-primary-container font-medium" : "hover:bg-surface-container text-on-surface-variant hover:text-on-surface"}`}
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, pathname, isNested = false }) {
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`block py-3 text-sm font-medium transition-colors
      ${isNested ? "pl-10 pr-6" : "px-6"}
      ${
        active
          ? "bg-primary-container text-on-primary-container"
          : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
      }`}
    >
      {children}
    </Link>
  );
}
