'use client';

import { Text, SimpleGrid, Container, rem } from '@mantine/core';
import { IconTruck, IconCertificate, IconCoin } from '@tabler/icons-react';
import classes from './FeaturesAsymmetrical.module.css';
import { ArticleCardImage } from './ArticleCard';

function Feature({ icon: Icon, title, description, className, ...others }) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon style={{ width: rem(38), height: rem(38) }} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    key: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Trashed_vegetables_in_Luxembourg.jpeg/440px-Trashed_vegetables_in_Luxembourg.jpeg",
    subtitle: "Reduce",
    title: "Reduce Food waste by ~58,000 KG by 2030",
    ctaText: "Learn more"
  },
  {
    key: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Cat_Food.jpg/440px-Cat_Food.jpg",
    subtitle: "Reuse",
    title: "1st Petfood company that utilizes Solana Web3",
    ctaText: "Learn more"
  },
  {
    key: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Wolfsburg_VW-Werk.jpg/500px-Wolfsburg_VW-Werk.jpg",
    subtitle: "Reduce",
    title: "Provide pet food options with lower carbon emissions",
    ctaText: "Learn more"
  },
];

export function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <ArticleCardImage key={item.key} {...item} />);

  return (
    <Container mt={30} mb={30} mx={50} size="xl">
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}