import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { IMAGES } from "@/data/images";

export function FounderMessage() {
  const { founder } = SITE_CONFIG;

  return (
    <section
      id="founder"
      className="pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-[#E8EFF8]"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
        <div className="relative bg-white rounded-2xl sm:rounded-[28px] shadow-[0_20px_50px_rgba(23,52,95,0.08)]">
          <div className="flex flex-col lg:flex-row items-end">

            {/* Left – Founder Photo */}
            <div className="w-full lg:w-[38%] flex justify-center lg:justify-start relative z-10">
              <div className="relative w-[220px] sm:w-[280px] lg:w-[380px] h-[320px] sm:h-[440px] lg:h-[560px] -mt-20 sm:-mt-28 lg:-mt-40">
                <Image
                  src={IMAGES.founder}
                  alt="Founder of Kids' Foundation, Imphal"
                  fill
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 380px"
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>

            {/* Right – Content */}
            <div className="w-full lg:w-[62%] px-5 sm:px-8 lg:pr-16 lg:pl-6 py-8 sm:py-12 lg:py-14">
              <h2 className="text-2xl sm:text-[32px] lg:text-[36px] font-bold text-[#17345F] tracking-tight leading-[1.2] mb-4 sm:mb-6">
                {founder.heading}
              </h2>

              <div className="space-y-5 text-[15px] sm:text-[16px] text-[#64748B] leading-[1.75]">
                <p>{founder.paragraph1}</p>
                <p>{founder.paragraph2}</p>
              </div>

              <div className="mt-8">
                <Link
                  href={founder.linkHref}
                  className="inline-flex items-center gap-1.5 text-[#F47C61] hover:text-[#E0684E] font-medium text-[15px] transition-colors group"
                >
                  <span>{founder.linkText || "Learn more"}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
