"use client";

import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HeroSection.module.css';
import { FeaturesAsymmetrical } from './ArticleCards';

export function HeroSection() {
  return (
    <Container style={{ textAlign: "center", margin: 0}} size="2xl">
      <div className={classes.inner} style={{marginLeft: "auto", marginRight: "auto"}}>
        <div className={classes.content}>
          <Title className={classes.title} c="indigo">
            {/* <span className={classes.highlight}>Haiwan</span> Lab */}
            A Start up that produces pet food using surplus food
          </Title>
          {/* <Text c="dimmed" mt="md">
            Revolutionizing the way we take care of pets
          </Text> */}


          <Group mt={30} style={{ width: "100%", margin: "auto", textAlign: "center", display: "flex", justifyContent: "center"}} >
          <FeaturesAsymmetrical />
            <Button radius="xl" size="md" style={{ alignSelf: "center"}} className={[classes.control, classes.orangebackground]}>
              Start Buying
            </Button>
            {/* <Button variant="default" radius="xl" onClick={() => {
              window.open(
                'https://github.com/Laikaiyong/Haiwan-Labs',
                '_blank' // <- This is what makes it open in a new window.
              );
            }}  size="md" className={classes.control}>
              Source code
            </Button> */}
          </Group>
        </div>
      </div>
    </Container>
  );
}