'use client';

import { Paper, Text, Title, Button } from '@mantine/core';
import classes from './ArticleCard.module.css';

export function ArticleCardImage({ image, subtitle, title, ctaText }) {
  return (
    <Paper shadow="md" p="xl" radius="lg" className={classes.card} style={{ backgroundImage: `url(${image})`}}>
        <div className={classes.overlay}></div>
      <div style={{zIndex:2000}}>
        <Text className={classes.category} size="xs">
          {subtitle}
        <Text className={classes.title}>
          {title}
        </Text>
        </Text>
      </div>
      <Button variant="white" color="dark">
        {ctaText}
      </Button>
    </Paper>
  );
}