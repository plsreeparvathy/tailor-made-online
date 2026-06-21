interface BlockPrintPatternProps {
  className?: string;
  opacity?: number;
}

export default function BlockPrintPattern({
  className = "",
  opacity = 0.06,
}: BlockPrintPatternProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        <defs>
          <pattern
            id="blockPrintButa"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <g fill="#E888A0">
              <ellipse cx="40" cy="40" rx="12" ry="16" opacity="0.8" />
              <ellipse cx="40" cy="28" rx="6" ry="8" opacity="0.6" />
              <path
                d="M40 56 Q30 48 28 40 Q26 32 40 24 Q54 32 52 40 Q50 48 40 56"
                opacity="0.5"
              />
              <circle cx="34" cy="36" r="2" opacity="0.7" />
              <circle cx="46" cy="36" r="2" opacity="0.7" />
              <path
                d="M0 40 L20 40 M60 40 L80 40 M40 0 L40 20 M40 60 L40 80"
                stroke="#E888A0"
                strokeWidth="0.5"
                opacity="0.3"
                fill="none"
              />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blockPrintButa)" />
      </svg>
    </div>
  );
}
