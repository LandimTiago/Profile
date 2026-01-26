import ExperienceHighlight from "@/components/home/ExperienceHighlight";
import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/highlights";
import HowIGenerateValue from "@/components/home/HowGenerateValue";
import WhatIDo from "@/components/home/WhatIDo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Engineer focado em sistemas críticos",
  description:
    "Construo sistemas robustos, escaláveis e orientados a resultado. Experiência com backend, frontend e arquitetura.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Highlights />
      <WhatIDo />
      <ExperienceHighlight />
      <HowIGenerateValue />
    </div>
  );
}
