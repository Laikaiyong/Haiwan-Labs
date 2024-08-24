'use client';

import React, { useState } from 'react';
import { 
  Container, Title, Card, Text, Badge, Button, Group, 
  SimpleGrid, Table, ScrollArea, Accordion, ThemeIcon, rem
} from '@mantine/core';
import { 
  IconMeat, IconTestPipe, IconPackage, IconTruck, 
  IconCheck, IconClock, IconHash
} from '@tabler/icons-react';

const petFoodData = [
  {
    id: 1,
    name: 'Chicken Delight',
    manufacturer: 'PetNutrition Co.',
    ingredients: 'Surplus chicken, rice, vegetables',
    status: 'Completed',
    stages: [
      { name: 'Processing', status: 'completed', txHash: '0x123...abc' },
      { name: 'Testing', status: 'completed', txHash: '0x456...def' },
      { name: 'Packaging', status: 'completed', txHash: '0x789...ghi' },
      { name: 'Distribution', status: 'completed', txHash: '0xabc...123' },
    ],
  },
  {
    id: 2,
    name: 'Fish Feast',
    manufacturer: 'OceanPet Foods',
    ingredients: 'Surplus fish, sweet potatoes, peas',
    status: 'In Progress',
    stages: [
      { name: 'Processing', status: 'completed', txHash: '0xdef...456' },
      { name: 'Testing', status: 'completed', txHash: '0xghi...789' },
      { name: 'Packaging', status: 'in_progress', txHash: null },
      { name: 'Distribution', status: 'pending', txHash: null },
    ],
  },
  {
    id: 3,
    name: 'Veggie Bites',
    manufacturer: 'GreenPaw Inc.',
    ingredients: 'Surplus vegetables, lentils, brown rice',
    status: 'Testing',
    stages: [
      { name: 'Processing', status: 'completed', txHash: '0xjkl...012' },
      { name: 'Testing', status: 'in_progress', txHash: null },
      { name: 'Packaging', status: 'pending', txHash: null },
      { name: 'Distribution', status: 'pending', txHash: null },
    ],
  },
];

const stageIcons = {
  Processing: IconMeat,
  Testing: IconTestPipe,
  Packaging: IconPackage,
  Distribution: IconTruck,
};

export function PetFoodManufacturingPage() {
  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="xl">Pet Food Manufacturing from Surplus Food</Title>
      
      <Text mb="xl">
        Surplus food is processed into safe and tested pet food, then packaged and distributed to retailers and customers. 
        Each stage of the process is recorded on the blockchain for transparency and traceability.
      </Text>

      <SimpleGrid cols={1} spacing="lg">
        {petFoodData.map((product) => (
          <PetFoodCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

function PetFoodCard({ product }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart" mb="xs">
        <Title order={2}>{product.name}</Title>
        <Badge color={getStatusColor(product.status)} variant="light">
          {product.status}
        </Badge>
      </Group>

      <Text><strong>Manufacturer:</strong> {product.manufacturer}</Text>
      <Text><strong>Ingredients:</strong> {product.ingredients}</Text>

      <Accordion variant="contained" radius="md" mt="md">
        <Accordion.Item value="manufacturing-stages">
          <Accordion.Control>Manufacturing Stages</Accordion.Control>
          <Accordion.Panel>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Stage</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Blockchain Transaction</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {product.stages.map((stage, index) => (
                  <Table.Tr key={index}>
                    <Table.Td>
                      <Group>
                        <ThemeIcon color={getStatusColor(stage.status)} size={24} radius="xl">
                          {React.createElement(stageIcons[stage.name], { size: '1rem' })}
                        </ThemeIcon>
                        {stage.name}
                      </Group>
                    </Table.Td>
                    <Table.Td>
                      <Badge color={getStatusColor(stage.status)}>
                        {formatStatus(stage.status)}
                      </Badge>
                    </Table.Td>
                    <Table.Td>
                      {stage.txHash ? (
                        <Group>
                          <IconHash size={16} />
                          <Text size="sm">{stage.txHash}</Text>
                        </Group>
                      ) : (
                        'Pending'
                      )}
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Card>
  );
}

function getStatusColor(status) {
  switch (status.toLowerCase()) {
    case 'completed':
      return 'green';
    case 'in progress':
    case 'in_progress':
      return 'blue';
    case 'testing':
      return 'yellow';
    default:
      return 'gray';
  }
}

function formatStatus(status) {
  return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}