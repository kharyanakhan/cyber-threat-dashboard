import React from 'react';
import { Container } from '@mantine/core';
import SectionHeader from '../components/SectionHeader';
import KillChainMap from '../components/KillChainMap';
import CampaignsView from '../components/CampaignsView';
import TopTTPsChart from '../components/TopTTPsChart';
import ThreatCharts from '../components/ThreatCharts';

const Campaigns: React.FC = () => {
  return (
    <Container fluid p="md">
      <SectionHeader title="Adversary Campaigns 🎯" />
      <KillChainMap />
      <CampaignsView />
      <TopTTPsChart />
      <ThreatCharts />
    </Container>
  );
};

export default Campaigns;
