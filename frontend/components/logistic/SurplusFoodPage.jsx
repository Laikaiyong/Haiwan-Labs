'use client';

import { useState } from 'react';
import { 
  Container, Title, Card, Image, Text, Badge, Button, Group, 
  SimpleGrid, Select, Table, ScrollArea
} from '@mantine/core';
import { IconShoppingCart, IconLeaf } from '@tabler/icons-react';

const companies = [
  { value: 'aeon', label: 'AEON', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/AeonLogo.svg/510px-AeonLogo.svg.png' },
  { value: 'jaya', label: 'Jaya Grocer', image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Jaya_Grocer_logo.png' },
  { value: 'lotus', label: 'Lotus', image: 'https://play-lh.googleusercontent.com/_hj7TTfgnCg2EVqla_usxGQIBhMwWRWqHVfHHJxJkFC87O6vRsKKcjA5KAGTgvkIm5I' },
];

const surplusFood = {
  aeon: [
    { id: 1, name: 'Apples', quantity: '10 kg', expiryDate: '2023-08-30', price: 'RM 5.00/kg' },
    { id: 2, name: 'Bread', quantity: '20 loaves', expiryDate: '2023-08-25', price: 'RM 2.00/loaf' },
    { id: 3, name: 'Milk', quantity: '15 L', expiryDate: '2023-08-28', price: 'RM 3.50/L' },
  ],
  jaya: [
    { id: 1, name: 'Bananas', quantity: '15 kg', expiryDate: '2023-08-27', price: 'RM 4.00/kg' },
    { id: 2, name: 'Yogurt', quantity: '30 cups', expiryDate: '2023-08-26', price: 'RM 1.50/cup' },
    { id: 3, name: 'Chicken', quantity: '10 kg', expiryDate: '2023-08-25', price: 'RM 8.00/kg' },
  ],
  lotus: [
    { id: 1, name: 'Tomatoes', quantity: '8 kg', expiryDate: '2023-08-26', price: 'RM 3.00/kg' },
    { id: 2, name: 'Eggs', quantity: '10 trays', expiryDate: '2023-09-05', price: 'RM 10.00/tray' },
    { id: 3, name: 'Fish', quantity: '5 kg', expiryDate: '2023-08-25', price: 'RM 15.00/kg' },
  ],
};

export function SurplusFoodPage() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="xl">Haiwan Lab Surplus Food Sourcing</Title>
      
      <Select
        label="Select a supermarket"
        placeholder="Choose a company"
        data={companies}
        value={selectedCompany}
        onChange={setSelectedCompany}
        mb="xl"
        searchable
        nothingFound="No options"
        maxDropdownHeight={400}
        icon={<IconShoppingCart size="1rem" />}
      />

      <SimpleGrid cols={3} spacing="lg" mb="xl">
        {companies.map((company) => (
          <CompanyCard 
            key={company.value}
            {...company}
            isSelected={selectedCompany === company.value}
            onSelect={() => setSelectedCompany(company.value)}
          />
        ))}
      </SimpleGrid>

      {selectedCompany && (
        <Card withBorder radius="md" p="xl" mb="xl">
          <Title order={2} mb="md">Sourced Surplus Food from {companies.find(c => c.value === selectedCompany).label}</Title>
          <ScrollArea>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Quantity</Table.Th>
                  <Table.Th>Expiry Date</Table.Th>
                  <Table.Th>Price</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {surplusFood[selectedCompany].map((item) => (
                  <Table.Tr key={item.id}>
                    <Table.Td>{item.name}</Table.Td>
                    <Table.Td>{item.quantity}</Table.Td>
                    <Table.Td>{item.expiryDate}</Table.Td>
                    <Table.Td>{item.price}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </ScrollArea>
        </Card>
      )}

      <Text c="dimmed" size="sm">
        Note: All surplus food data is stored securely on the blockchain to ensure transparency and traceability.
      </Text>
    </Container>
  );
}

function CompanyCard({ value, label, image, isSelected, onSelect }) {
  return (
    <Card 
      shadow="sm" 
      padding="lg" 
      radius="md" 
      withBorder
      style={{ border: isSelected ? '2px solid var(--mantine-color-blue-filled)' : undefined }}
    >
      <Card.Section>
        <Image
            style={{
                objectFit: 'scale-down'
            }}
          src={image}
          height={160}
          alt={label}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{label}</Text>
        <Badge color="green" variant="light">
          Partner
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        Providing surplus food to reduce waste and help the community.
      </Text>

      <Button 
        color="indigo" 
        fullWidth 
        mt="md" 
        radius="md"
        onClick={onSelect}
        leftSection={<IconLeaf size={14} />}
      >
        {isSelected ? 'Selected' : 'Select'}
      </Button>
    </Card>
  );
}