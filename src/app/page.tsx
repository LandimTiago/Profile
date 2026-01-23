import ExperienceHighlight from "@/components/home/ExperienceHighlight";
import Hero from "@/components/home/Hero";
import WhatIDo from "@/components/home/WhatIDo";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <WhatIDo />
      <ExperienceHighlight />
    </div>
  );
}
