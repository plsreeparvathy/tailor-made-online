interface BlockPrintDividerProps {
  className?: string;
  color?: string;
}

export default function BlockPrintDivider({
  className = "",
  color = "#F0B090",
}: BlockPrintDividerProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className="h-3 w-full"
        viewBox="0 0 1200 12"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dividerPattern"
            x="0"
            y="0"
            width="24"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0 6 L6 0 L12 6 L18 0 L24 6" fill="none" stroke={color} strokeWidth="1" />
            <circle cx="6" cy="6" r="2" fill={color} opacity="0.6" />
            <circle cx="18" cy="6" r="2" fill={color} opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dividerPattern)" />
      </svg>
    </div>
  );
}
