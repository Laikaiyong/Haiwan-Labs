'use client';

import { HeroSection } from "../../components/root/HeroSection";
import { Image } from '@mantine/core';
import { FeaturesTitle } from "../../components/root/FeaturesImages";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        radius="md"
        style={{ width: "100%" }}
        h={typeof window !== 'undefined' && window.innerWidth < 768 ? 400 : 600}
        src="./haiwanlab.jpg"
      />
      <div style={{ margin: "5%" }}>
        <HeroSection />
        <FeaturesTitle />
      </div>
    </main>
  );
}
