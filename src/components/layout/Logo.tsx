import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Get World Digital home">
      <svg
        viewBox="0 0 52 36"
        className="h-8 w-auto"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gwd-logo" x1="0" y1="0" x2="52" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2f6bff" />
            <stop offset="1" stopColor="#0a3fd6" />
          </linearGradient>
        </defs>
        {/* G */}
        <path
          d="M29 8.2A13 13 0 1 0 29 27.8"
          stroke="url(#gwd-logo)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Arrow */}
        <path d="M17 18h17" stroke="url(#gwd-logo)" strokeWidth="6" strokeLinecap="round" />
        <path d="M31 7.5 49 18 31 28.5Z" fill="url(#gwd-logo)" strokeLinejoin="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[17px] font-extrabold tracking-tight text-[#0b1533]">
          GET WORLD
        </span>
        <span className="mt-1 text-[10px] font-semibold tracking-[0.42em] text-[#0b1533]">
          DIGITAL
        </span>
      </span>
    </Link>
  );
}
