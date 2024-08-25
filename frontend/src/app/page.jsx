'use client';

import { HeroSection } from "../../components/root/HeroSection";
import { Image, Title, Group } from '@mantine/core';
import { FeaturesTitle } from "../../components/root/FeaturesImages";
import classes from './Index.module.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        radius="md"
        style={{ width: "100%" }}
        h={800}
        src="./haiwanlab.jpg"
      />
      <div style={{ margin: "5%" }}>
        <HeroSection />
        <FeaturesTitle />
        <Group style={{textAlign: "center", justifyContent: "center"}}>
            <Title className={classes.title} order={2}>
              Built on Solana
            </Title>
            <Image
              w={35}
              src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
            />
          </Group>
      </div>
    </main>
  );
}
