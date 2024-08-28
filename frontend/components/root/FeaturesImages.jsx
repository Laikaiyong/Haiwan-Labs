"use client";

import {
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Container,
  Grid,
  rem,
  Image,
  Group,
} from "@mantine/core";
import {
  IconReceiptOff,
  IconFlame,
  IconCircleDotted,
  IconFileCode,
  IconBrandSupabase,
  IconPoint,
  IconDogBowl,
  IconFishBone,
  IconGrill,
} from "@tabler/icons-react";
import classes from "./FeaturesTitle.module.css";

const features = [
  {
    icon: IconFishBone,
    title: "Sourcing",
    description:
      "source surplus food at a low price from major supermarkets across Malaysia",
  },
  {
    icon: IconGrill,
    title: "Producing",
    description: "Processed into safe and tested pet food",
  },
  {
    icon: IconDogBowl,
    title: "Selling",
    description: "Distribute to Major retailers & B2C",
  },
];

export function FeaturesTitle() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={90}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "indigo", to: "indigo" }}>
        <feature.icon
          style={{ width: rem(40), height: rem(40) }}
          stroke={1.5}
        />
      </ThemeIcon>
      <Title order={2} mt={"sm"}>
        {feature.title}
      </Title>
      <Text c="dimmed" fz="md">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    // <div className={classes.wrapper}>
    //   <Grid gutter={80}>
    //     <Grid.Col span={{ base: 12, md: 5 }}>
    //       <Text c="dimmed">
    //         Web 3 Technologies + Sustainable Practices
    //         <br />
    //         <br />A Start up that produces pet food using surplus food
    //       </Text>

    //       <Button
    //         variant="gradient"
    //         gradient={{ deg: 133, from: "indigo", to: "indigo" }}
    //         size="lg"
    //         radius="md"
    //         mt="xl">
    //         Get started
    //       </Button>
    //     </Grid.Col>
    //     <Grid.Col span={{ base: 12, md: 7 }}>
    //       <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
    //         {items}
    //       </SimpleGrid>
    //     </Grid.Col>
    //   </Grid>
    // </div>
        <Container mt={30} mb={30} mx={50} size="2xl" style={{ textAlign: "center"}}>
                      <Title className={classes.title} style={{ margin: "3rem" }} order={2}>
              What We Do
            </Title>
        <SimpleGrid mx={50} cols={{ base: 1, sm: 3 }} spacing={{base: 0, sm: 50}}>
          {items}
        </SimpleGrid>
      </Container>
  );
}
