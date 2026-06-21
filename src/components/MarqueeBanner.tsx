"use client";

const marqueeText =
  "Block Prints  •  Ethnic Wear  •  Low MOQ  •  100 Pieces Minimum  •  Kurtis  •  Co-ord Sets  •  Handloom  •  Bengaluru  •  Since 2017  •  Women-Led  •  ";

export default function MarqueeBanner() {
  return (
    <div className="overflow-hidden bg-pink-deep py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="mx-4 font-subheading text-sm tracking-widest text-peach-light sm:text-base"
          >
            {marqueeText}
          </span>
        ))}
      </div>
    </div>
  );
}
