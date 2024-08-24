"use client";

import {
  Container,
} from "@mantine/core";
import PetFoodCustomer from "../../../components/logistic/PetFoodCustomer";

export default function Purchase() {

  return (
    <Container size="xl" style={{ marginTop: 20 }}>
      <PetFoodCustomer />
    </Container>
  );
}
