import React from 'react';
import { Container } from '@mantine/core';
import SectionHeader from '../components/SectionHeader';
import ThreatActorProfile from '../components/ThreatActorProfile';
import ThreatTimeline from '../components/ThreatTimeline';
import ThreatNetworkGraph from '../components/ThreatNetworkGraph';

const ThreatIntel: React.FC = () => {
  return (
    <Container fluid p="md">
      <SectionHeader title="Threat Intelligence 🧠" />
      <ThreatActorProfile />
      <ThreatTimeline />
      <ThreatNetworkGraph />
    </Container>
  );
};

export default ThreatIntel;
