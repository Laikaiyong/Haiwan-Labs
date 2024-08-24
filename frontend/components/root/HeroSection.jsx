"use client";

import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HeroSection.module.css';

export function HeroSection() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.highlight}>Haiwan</span> Lab
          </Title>
          <Text c="dimmed" mt="md">
            Revolutionizing the way we take care of pets
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl" className={classes.orangebackground}>
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              Reduce Food waste by <b>~58,000 KG</b> by <b>2030</b>
            </List.Item>
            <List.Item>
            1st Petfood company that utilizes <b>Solana Web3</b>
            </List.Item>
            <List.Item>
            Providing pet food options with <b>lower carbon emissions</b>
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={[classes.control, classes.orangebackground]}>
              Get started
            </Button>
            <Button variant="default" radius="xl" onClick={() => {
              window.open(
                'https://github.com/Laikaiyong/Haiwan-Labs',
                '_blank' // <- This is what makes it open in a new window.
              );
            }}  size="md" className={classes.control}>
              Source code
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}