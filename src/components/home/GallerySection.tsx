"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GALLERY_ITEMS, GALLERY_HEADER } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 relative bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
        {/* Header */}
        <SectionHeading
          label={GALLERY_HEADER.label}
          heading={GALLERY_HEADER.heading}
          description={GALLERY_HEADER.description}
          align="center"
          className="mb-8 sm:mb-10"
        />

        {/* Uniform Gallery Grid – All Containers Identical in Size & aspect-[16/10] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 bg-slate-900 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F38]/85 via-[#0E1F38]/25 to-transparent transition-opacity group-hover:from-[#0E1F38]/95" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-left">
                <h3 className="text-white font-bold text-sm sm:text-base leading-snug drop-shadow-xs group-hover:text-[#FBBF24] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                {item.category && (
                  <span className="text-white/80 text-xs sm:text-[13px] font-medium leading-tight block mt-1">
                    {item.category}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href={GALLERY_HEADER.bottomLinkHref}
            className="inline-flex items-center text-[#F47C61] hover:text-[#E0684E] font-semibold text-sm sm:text-base transition-colors group"
          >
            <span>{GALLERY_HEADER.bottomLinkText}</span>
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(index) => setLightboxIndex(index)}
      />
    </section>
  );
}