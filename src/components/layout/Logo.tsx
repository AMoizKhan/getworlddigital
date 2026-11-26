import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center"
      aria-label="Get World Digital home"
    >
      <Image
        src="/brand/logo-full.png"
        alt="Get World Digital — Innovate, Automate, Grow"
        width={558}
        height={160}
        loading="eager"
        className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-12"
      />
    </Link>
  );
}
