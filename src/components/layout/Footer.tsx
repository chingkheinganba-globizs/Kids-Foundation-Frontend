import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/siteConfig";
import { IMAGES } from "@/data/images";
import { AdmissionsSection } from "@/components/home/AdmissionsSection";

interface FooterProps {
  showAdmissions?: boolean;
  /**
   * Adjust vertical alignment of grass-hill background image:
   * e.g. "center 65%", "center 70%", "center 72%"
   * Higher % = image moves UP (more grass shows)
   * Lower % = image moves DOWN (more sky shows)
   */
  bgPosition?: string;
}

export function Footer({
  showAdmissions = true,
  bgPosition = "center 72%",
}: FooterProps) {
  const { footer, contact } = SITE_CONFIG;

  return (
    <footer className="relative w-full overflow-hidden">
      {/* ── 1. Shared Grass-Hill Background (sky behind Admissions, grass behind Footer) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={IMAGES.footerBg}
          alt=""
          fill
          sizes="100vw"
          style={{ objectPosition: bgPosition }}
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="relative z-10 flex flex-col">
        {/* ── 2. Top Section: Admissions CTA (shares the same sky background) ── */}
        {showAdmissions && <AdmissionsSection />}

        {/* ── 3. Bottom Section: White Footer Card (sits on the grass hill) ── */}
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
          {/* White Card with generous spacing, soft blur, and subtle shadow */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(23,52,95,0.12)] p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 border border-white/60">
            {/* 4 Columns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12">
              {/* Column 1: School Identity (Logo, Tagline, CBSE, Socials) */}
              <div className="lg:col-span-4 flex flex-col space-y-4">
                {/* Logo & Brand Name */}
                <Link href="/" className="flex items-center gap-3.5 sm:gap-4 group">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[84px] lg:h-[84px] shrink-0 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={IMAGES.logo}
                      alt="Kids' Foundation Logo"
                      fill
                      sizes="90px"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[#17345F] font-bold tracking-[0.12em] text-base sm:text-lg lg:text-[21px] font-serif uppercase leading-tight">
                      KIDS&apos; FOUNDATION
                    </span>
                    <span className="text-[#17345F] tracking-[0.24em] text-[11px] sm:text-[12px] font-semibold uppercase leading-tight mt-1.5">
                      IMPHAL, MANIPUR
                    </span>
                  </div>
                </Link>

                {/* Tagline */}
                <p className="text-sm sm:text-[14.5px] text-[#475569] italic leading-relaxed pt-1 max-w-sm">
                  {footer.tagline}
                </p>

                {/* CBSE Badge */}
                <div className="inline-flex items-center self-start bg-[#E8EFF8] text-[#17345F] text-xs sm:text-[12.5px] font-semibold px-4 py-2 rounded-full border border-[#D5E2F3]">
                  CBSE Affiliation No:{" "}
                  <strong className="font-bold ml-1 text-[#17345F]">
                    {contact.cbseAffiliationNo}
                  </strong>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E8EFF8] hover:bg-[#D5E2F3] text-[#17345F] flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E8EFF8] hover:bg-[#D5E2F3] text-[#17345F] flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E8EFF8] hover:bg-[#D5E2F3] text-[#17345F] flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div className="lg:col-span-2 xl:col-span-2 flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-[#17345F] mb-4 sm:mb-6">
                  Quick Links
                </h4>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-[14.5px] text-[#475569]">
                  {footer.navigationLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-[#F47C61] transition-colors font-medium block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Important Links */}
              <div className="lg:col-span-3 xl:col-span-3 flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-[#17345F] mb-4 sm:mb-6">
                  Important Links
                </h4>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-[14.5px] text-[#475569]">
                  {footer.disclosureLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={
                          link.href === "/mandatory-public-disclosure"
                            ? "text-[#17345F] font-bold hover:text-[#F47C61] transition-colors flex items-center gap-1.5"
                            : "hover:text-[#F47C61] transition-colors font-medium block"
                        }
                      >
                        {link.label}
                        {link.href === "/mandatory-public-disclosure" && (
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">
                            Official
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Contact Us */}
              <div className="lg:col-span-3 xl:col-span-3 flex flex-col">
                <h4 className="text-base sm:text-lg font-bold text-[#17345F] mb-4 sm:mb-6">
                  Contact Us
                </h4>
                <div className="space-y-3.5 sm:space-y-4 text-sm sm:text-[14.5px] text-[#475569] leading-relaxed">
                  <div>
                    <span className="text-xs sm:text-[12.5px] text-slate-500 font-medium block mb-0.5">
                      Address:
                    </span>
                    <span className="text-[#475569] font-medium block">
                      Airport Road, Ghari, Imphal-West,
                      <br />
                      Manipur - 795001, India
                    </span>
                  </div>

                  <div>
                    <span className="text-xs sm:text-[12.5px] text-slate-500 font-medium block mb-0.5">
                      Mobile:
                    </span>
                    <span className="text-[#475569] font-medium block">
                      {contact.mobile.join(" / ")}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs sm:text-[12.5px] text-slate-500 font-medium block mb-0.5">
                      Phone:
                    </span>
                    <span className="text-[#475569] font-medium block">
                      {contact.phone}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs sm:text-[12.5px] text-slate-500 font-medium block mb-0.5">
                      Email:
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="hover:text-[#F47C61] transition-colors font-medium block break-all"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Subtle Divider and Copyright */}
            <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <p className="text-xs sm:text-[12.5px] text-[#64748B] font-normal">
                {footer.copyright}
              </p>
             
                
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
