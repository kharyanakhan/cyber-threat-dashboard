import React from 'react';
import { Container } from '@mantine/core';
import SectionHeader from '../components/SectionHeader';
import DarknetBreachFeed from '../components/DarknetBreachFeed';

const Darknet: React.FC = () => {
  return (
    <Container fluid p="md">
      <SectionHeader title="Darknet Intelligence 🌌" />
      <DarknetBreachFeed />
    </Container>
  );
};

export default Darknet;
