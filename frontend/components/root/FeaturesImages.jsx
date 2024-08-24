'use client';

import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode, IconBrandSupabase, IconPoint, IconDogBowl, IconFishBone, IconGrill } from '@tabler/icons-react';
import classes from './FeaturesTitle.module.css';

const features = [
  {
    icon: IconFishBone,
    title: 'Sourcing',
    description: 'source surplus food at a low price from major supermarkets across Malaysia',
  },
  {
    icon: IconGrill,
    title: 'Producing',
    description: 'Processed into safe and tested pet food',
  },
  {
    icon: IconDogBowl,
    title: 'Selling',
    description:
      'Distribute to Major retailers & B2C',
  },
  {
    icon: IconPoint,
    title: 'Points',
    description:
      'Earn points by contributing to the good deeds',
  },
];

export function FeaturesTitle() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'indigo', to: 'indigo' }}
      >
        <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
          Solana ❤️
          </Title>
          <Text c="dimmed">
          Web 3 Technologies + Sustainable  Practices
            <br /><br />
          A Start up that produces pet food using surplus food 
          </Text>

          <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'indigo', to: 'indigo' }}
            size="lg"
            radius="md"
            mt="xl"
          >
            Get started
          </Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}