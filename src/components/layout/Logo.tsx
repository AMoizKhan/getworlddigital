import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5"
      aria-label="Get World Digital home"
    >
      <Image
        src="/brand/logo-mark.png"
        alt="Get World Digital logo"
        width={225}
        height={160}
        loading="eager"
        className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
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
