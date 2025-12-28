"use client";

import Image from "next/image";
import { MARQUEE_IMAGES } from "@/lib/constants";

export function ServicesMarquee() {
  const midpoint = Math.ceil(MARQUEE_IMAGES.length / 2);
  const firstRow = MARQUEE_IMAGES.slice(0, midpoint);
  const secondRow = MARQUEE_IMAGES.slice(midpoint);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      {/* First Row - Left to Right */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 marquee-gradient-left z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 marquee-gradient-right z-10" />
        <div className="flex items-center animate-marquee hover:pause">
          {[...firstRow, ...firstRow].map((src, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 h-[200px] md:h-[250px] mx-2 rounded-xl overflow-hidden bg-surface"
            >
              <Image
                src={src}
                alt=""
                width={400}
                height={250}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 marquee-gradient-left z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 marquee-gradient-right z-10" />
        <div className="flex items-center animate-marquee-reverse hover:pause">
          {[...secondRow, ...secondRow].map((src, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 h-[200px] md:h-[250px] mx-2 rounded-xl overflow-hidden bg-surface"
            >
              <Image
                src={src}
                alt=""
                width={400}
                height={250}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
