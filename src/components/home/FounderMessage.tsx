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
      className="pt-28 sm:pt-36 lg:pt-44 pb-14 sm:pb-18 lg:pb-20 bg-[#E8EFF8] overflow-visible"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
        {/* White Card with pop-out founder head and shoulders */}
        <div className="relative bg-white rounded-2xl sm:rounded-[32px] shadow-[0_20px_50px_rgba(23,52,95,0.08)]">
          <div className="flex flex-col lg:flex-row items-end">

            {/* Left – Founder Photo */}
            <div className="w-full lg:w-[36%] xl:w-[34%] flex justify-center lg:justify-start lg:pl-6 xl:pl-8 relative z-20 shrink-0">
              <div className="relative w-[240px] sm:w-[300px] lg:w-[360px] xl:w-[390px] h-[380px] sm:h-[460px] lg:h-[560px] xl:h-[600px] -mt-24 sm:-mt-32 lg:-mt-44 xl:-mt-52">
                <Image
                  src={IMAGES.founder}
                  alt="Founder of Kids' Foundation, Imphal"
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 390px"
                  className="object-contain object-bottom drop-shadow-md"
                  priority
                />
              </div>
            </div>

            {/* Right – Content */}
            <div className="w-full lg:w-[64%] xl:w-[66%] px-6 sm:px-10 lg:pr-14 lg:pl-4 py-8 sm:py-10 lg:py-12">
              <h2 className="text-2xl sm:text-[32px] lg:text-[36px] font-bold text-[#17345F] tracking-tight leading-[1.2] mb-4 sm:mb-5">
                {founder.heading}
              </h2>

              <div className="space-y-4 text-[15px] sm:text-[16px] text-[#64748B] leading-[1.75] max-w-3xl">
                <p>{founder.paragraph1}</p>
                <p>{founder.paragraph2}</p>
              </div>

              <div className="mt-6 sm:mt-8">
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
