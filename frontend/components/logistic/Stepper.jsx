'use client';

import { useState } from 'react';
import {
  IconUserCheck,
  IconMailOpened,
  IconShieldCheck,
  IconCircleCheck,
  IconFishBone,
  IconGrill,
  IconDogBowl,
} from '@tabler/icons-react';
import { Stepper, rem } from '@mantine/core';
import { SurplusFoodPage } from './SurplusFoodPage';
import { PetFoodManufacturingPage } from './PetFoodManufacturingPage';
import PetFoodSalesPage from './PetFoodSales';

export default function StepperDemo() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


  return (
    <Stepper
      active={active}
      color='orange'
      onStepClick={setActive}
      completedIcon={<IconCircleCheck style={{ width: rem(18), height: rem(18) }} />}
    >
      <Stepper.Step
        icon={<IconFishBone style={{ width: rem(18), height: rem(18) }} />}
        label="Step 1"
        description="Sourcing"
      >
        <div>
            <SurplusFoodPage />
        </div>
       </Stepper.Step>
      <Stepper.Step
        icon={<IconGrill style={{ width: rem(18), height: rem(18) }} />}
        label="Step 2"
        description="Producing"
      >
        <div>
            <PetFoodManufacturingPage />
        </div>
    </Stepper.Step>
      <Stepper.Step
        icon={<IconDogBowl style={{ width: rem(18), height: rem(18) }} />}
        label="Step 3"
        description="Selling"
      >
        <div>
            <PetFoodSalesPage />
        </div>
        </Stepper.Step>
    </Stepper>
  );
}