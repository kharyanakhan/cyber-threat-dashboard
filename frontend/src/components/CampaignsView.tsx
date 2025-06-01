import React from 'react';
import { Card, Title, Text } from '@mantine/core';

const CampaignsView: React.FC = () => {
  return (
    <Card padding="lg" style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '10px' }}>
      <Title order={4} style={{ color: '#00f0ff' }}>Campaign Correlation 🧠</Title>
      <Text mt="md">(Campaigns will be dynamically listed here based on threat correlation.)</Text>
    </Card>
  );
};

export default CampaignsView;
