import ExperienceHighlight from "@/components/home/ExperienceHighlight";
import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/highlights";
import HowIGenerateValue from "@/components/home/HowGenerateValue";
import WhatIDo from "@/components/home/WhatIDo";

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
