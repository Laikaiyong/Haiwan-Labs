import React, { useMemo } from 'react';
import { Tabs, Card, Text, Button, Group, Image, Grid } from '@mantine/core';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';

// Make sure to import the required CSS
import '@solana/wallet-adapter-react-ui/styles.css';

const RETAILER_WALLET = new PublicKey('Cnw2uPvDngFTQV9j2MRCAMVLHYvaht3218zV5NrSTXz2');

const petFoods = [
  { name: 'ECO 10 Organic Vegetarian', image: 'https://www.naturalcore.co/wp-content/uploads/2015/03/Slide9.png', sol: 0.0002 },
  { name: 'ECO 2 Organic Duck', image: 'https://www.naturalcore.co/wp-content/uploads/2014/07/Slide6-768x768.jpg', sol: 0.005 },
  { name: 'BENE2 M50', image: 'https://www.naturalcore.co/wp-content/uploads/2016/04/bene_m50_renew_Jun_2020_50-400x400.png', sol: 0.05 },
  { name: 'Meat Stick For Dog', image: 'https://www.naturalcore.co/wp-content/uploads/2021/10/Slide18-768x768.jpg', sol: 0.1 },
  { name: 'ECO 9B Organic Senior', image: 'https://www.naturalcore.co/wp-content/uploads/2015/08/Slide11-768x768.jpg', sol: 2 },
];

const PetFoodCustomer = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const handleSolanaTransaction = async (amount, recipient = RETAILER_WALLET) => {
    if (!publicKey) {
      alert('Please connect your wallet first!');
      return;
    }

    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipient,
          lamports: amount * LAMPORTS_PER_SOL,
        })
      );

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'processed');
      alert(`Transaction successful! Signature: ${signature}`);
    } catch (error) {
      console.error('Error processing Solana transaction:', error);
      alert(`Transaction failed: ${error.message}`);
    }
  };

  return (
    <Card shadow="sm" padding="lg">
          <Grid>
            {petFoods.map((food, index) => (
              <Grid.Col key={index} span={6} sm={4} md={3}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image src={food.image} height={160} alt={food.name} />
                  </Card.Section>
                  <Text weight={500} mt="md">{food.name}</Text>
                  <Text size="sm" c="dimmed">{food.sol} SOL</Text>
                  <Button color='indigo' onClick={() => handleSolanaTransaction(food.sol)} fullWidth mt="sm">
                    Buy Now
                  </Button>
                </Card>
              </Grid.Col>
            ))}
          </Grid>

      <Text mt="xl" size="sm" c="dimmed">
        Our pet food is manufactured from food waste, promoting sustainability and providing
        nutrition for your pets.
      </Text>
    </Card>
  );
};

export default PetFoodCustomer;