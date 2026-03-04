"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { HeaderData } from "@/lib/responseType";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { href: "/#about", label: "القصة" },
  { href: "/#services", label: "خدماتنا" },
  { href: "/#events", label: "المناسبات" },
  { href: "/blog", label: "خدمات الضيافة" },
  { href: "/#packages", label: "باقاتنا" },
  { href: "/#gallery", label: "المعرض" },
  { href: "/#contact", label: "تواصل معنا" },
];

type HeaderProps = HeaderData & {
  whatsapp: string;
};

export function Header({ brandName, whatsapp }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className="sticky top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "var(--main-background)",
        borderBottom: "1px solid var(--border-warm)",
        boxShadow: "0 2px 20px rgba(44,24,16,0.04)",
      }}>
      <div className="container mx-auto px-2 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 28C22 20 42 20 42 28V44C42 50 22 50 22 44V28Z"
                fill="var(--main-color)"
              />
              <path d="M30 18H34V28H30Z" fill="var(--main-color)" />
              <circle cx="32" cy="15" r="3" fill="var(--main-color)" />
              <path
                d="M42 30C50 28 50 38 42 36"
                stroke="var(--main-color)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M22 30C14 28 14 40 22 38"
                stroke="var(--main-color)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <rect
                x="28"
                y="48"
                width="8"
                height="4"
                rx="1"
                fill="var(--accent-gold)"
              />
            </svg>
            <p className="font-black text-sm md:text-2xl tracking-tight leading-none">
              {brandName}
            </p>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:opacity-70"
                style={{ color: "var(--main-color-dark)" }}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMenu}
              className="lg:hidden cursor-pointer p-2"
              style={{ color: "var(--main-color)" }}>
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            <a
              target="_blank"
              href={`https://wa.me/${
                whatsapp.includes("+") ? whatsapp.split("+").join("") : whatsapp
              }?text=`}
              className="flex items-center gap-2 bg-green-700 text-white rounded-full px-5 py-2.5 font-semibold text-sm transition-all duration-300 hover:bg-[#1da851]">
              <FaWhatsapp className="size-5" />
              احجز الآن
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden"
            style={{
              borderTop: "1px solid var(--border-warm)",
              backgroundColor: "var(--card-background)",
            }}>
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="py-3 border-b transition-colors duration-200 hover:opacity-70"
                  style={{
                    color: "var(--main-color)",
                    borderColor: "var(--border-warm)",
                  }}>
                  {link.label}
                </Link>
              ))}
              <a
                target="_blank"
                href={`https://wa.me/${
                  whatsapp.includes("+")
                    ? whatsapp.split("+").join("")
                    : whatsapp
                }?text=`}
                className="flex items-center justify-center gap-2 rounded-full py-3 mt-4 font-semibold"
                style={{
                  backgroundColor: "#25D366",
                  color: "white",
                }}>
                <FaWhatsapp className="size-5" />
                احجز الآن
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
