"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PageAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Kill prior triggers on navigation
    ScrollTrigger.getAll().forEach((t) => t.kill());

    // Hero entrance (fires immediately on load)
    const heroEls = document.querySelectorAll("[data-hero-anim]");
    if (heroEls.length) {
      gsap.fromTo(
        heroEls,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power2.out", delay: 0.05 }
      );
    }

    // Individual section fade-up on scroll
    document.querySelectorAll("[data-animate]").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Staggered grid children
    document.querySelectorAll("[data-stagger]").forEach((grid) => {
      gsap.fromTo(
        Array.from(grid.children),
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);

  return null;
}
