"use client";

import { useState, useEffect } from "react";
import {
  Card,
  Avatar,
  Text,
  Group,
  Button,
  Progress,
  Stack,
  Title,
  Badge,
  Grid,
  Table,
  Image,
  SimpleGrid,
  Paper,
  Container,
} from "@mantine/core";
import {
  IconAward,
  IconCoin,
  IconTrophy,
  IconSend,
  IconReceive,
} from "@tabler/icons-react";
import {
  TransactionHistory,
  ProfileCard,
  NFTGallery,
  RewardsSection,
} from "../../../components/profile/ProfilePage";

const levelThresholds = [0, 100, 250, 500, 1000];

export default function Profile() {
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    // In a real app, you'd fetch the user's data from your backend or blockchain
    setPoints(327);
    const newLevel =
      levelThresholds.findIndex((threshold) => points < threshold) ||
      levelThresholds.length;
    setLevel(newLevel);
  }, [points]);

  const currentLevelThreshold = levelThresholds[level - 1] || 0;
  const nextLevelThreshold = levelThresholds[level] || points;
  const progress =
    ((points - currentLevelThreshold) /
      (nextLevelThreshold - currentLevelThreshold)) *
    100;

  const stats = [
    { icon: IconAward, value: level, label: "Level" },
    { icon: IconCoin, value: points, label: "Points" },
    { icon: IconTrophy, value: "3", label: "Achievements" },
  ];

  return (
    <Container size="xl" style={{ marginTop: 20 }}>
      <Stack>
        <ProfileCard
          stats={stats}
          points={points}
          nextLevelThreshold={nextLevelThreshold}
          progress={progress}
        />
        <TransactionHistory />
        <RewardsSection />
      </Stack>
    </Container>
  );
}
