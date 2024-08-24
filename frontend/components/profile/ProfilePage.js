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
  IconMailBitcoin
} from "@tabler/icons-react";

import classes from "./ProfilePage.module.css";

export const ProfileCard = ({
  stats,
  points,
  nextLevelThreshold,
  progress,
}) => {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Group justify="center" gap="xs">
        <stat.icon size={20} />
        <Text ta="center" fz="lg" fw={500}>
          {stat.value}
        </Text>
      </Group>
      <Text ta="center" fz="sm" c="dimmed" mt={5}>
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding="xl" radius="md" className={classes.card}>
      <Card.Section
        h={140}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        Crypto Enthusiast
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        Dnhm..NWqa
      </Text>
      <Group mt="md" justify="center" gap={30}>
        {items}
      </Group>
      <Stack mt="xl">
        <Group justify="space-between">
          <Title order={4}>Level Progress</Title>
          <Badge size="lg">{`${points} / ${nextLevelThreshold}`}</Badge>
        </Group>
        <Progress value={progress} size="lg" radius="xl" />
      </Stack>
      <Button
        fullWidth
        radius="md"
        mt="xl"
        size="md"
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan" }}>
        Claim Rewards
      </Button>
    </Card>
  );
};

export const TransactionHistory = () => {
  const transactions = [
    {
      id: 1,
      type: "send",
      amount: "0.5 SOL",
      to: "0x1234...5678",
      date: "2023-04-01",
    },
    {
      id: 2,
      type: "receive",
      amount: "0.91 SOL",
      from: "0x8765...4321",
      date: "2023-03-28",
    },
    {
      id: 3,
      type: "send",
      amount: "0.0009 SOL",
      to: "0x2468...1357",
      date: "2023-03-25",
    },
  ];

  const rows = transactions.map((transaction) => (
    <Table.Tr key={transaction.id}>
      <Table.Td>
        {transaction.type === "send" ? (
          <IconSend size={20} />
        ) : (
          <IconMailBitcoin size={20} />
        )}
      </Table.Td>
      <Table.Td>{transaction.amount}</Table.Td>
      <Table.Td>
        {transaction.type === "send"
          ? `To: ${transaction.to}`
          : `From: ${transaction.from}`}
      </Table.Td>
      <Table.Td>{transaction.date}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Card withBorder padding="md">
      <Title order={3} mb="md">
        Transaction History
      </Title>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Type</Table.Th>
            <Table.Th>Amount</Table.Th>
            <Table.Th>To/From</Table.Th>
            <Table.Th>Date</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Card>
  );
};

export const NFTGallery = () => {
  const nfts = [
    { id: 1, name: "Cool Cat #1234", image: "https://placekitten.com/200/200" },
    {
      id: 2,
      name: "Bored Ape #5678",
      image: "https://placekitten.com/201/201",
    },
    {
      id: 3,
      name: "Crypto Punk #9101",
      image: "https://placekitten.com/202/202",
    },
  ];

  return (
    <Card withBorder padding="md">
      <Title order={3} mb="md">
        NFT Gallery
      </Title>
      <SimpleGrid cols={3}>
        {nfts.map((nft) => (
          <Paper key={nft.id} p="xs" withBorder>
            <Image src={nft.image} alt={nft.name} radius="md" />
            <Text ta="center" mt="xs">
              {nft.name}
            </Text>
          </Paper>
        ))}
      </SimpleGrid>
    </Card>
  );
};

export const RewardsSection = () => {
  const rewards = [
    { id: 1, name: "Exclusive NFT", points: 500 },
    { id: 2, name: "100 USDC", points: 1000 },
    { id: 3, name: "VIP Access", points: 2000 },
  ];

  return (
    <Card withBorder padding="md">
      <Title order={3} mb="md">
        Available Rewards
      </Title>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Reward</Table.Th>
            <Table.Th>Points Required</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rewards.map((reward) => (
            <Table.Tr key={reward.id}>
              <Table.Td>{reward.name}</Table.Td>
              <Table.Td>{reward.points}</Table.Td>
              <Table.Td>
                <Button variant="light" size="xs">
                  Claim
                </Button>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Card>
  );
};
