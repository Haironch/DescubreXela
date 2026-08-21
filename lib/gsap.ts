"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  // nuestros scrubs son decorativos, no necesitan recalcularse en cada
  // pixel de scroll — esto reduce el trabajo por frame sin notarse.
  ScrollTrigger.config({ limitCallbacks: true });
}

export { gsap, ScrollTrigger };
