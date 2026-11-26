"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function HeaderScrollShell({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY <= 12) {
        setVisible(true);
      } else if (currentY < lastScrollY.current) {
        // Scrolling up -> show immediately
        setVisible(true);
      } else if (currentY > lastScrollY.current && currentY > 24) {
        // Scrolling down -> hide cleanly
        setVisible(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-transparent font-sans transition-all duration-300 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full pointer-events-none opacity-0"
      }`}
    >
      {children}
    </header>
  );
}
