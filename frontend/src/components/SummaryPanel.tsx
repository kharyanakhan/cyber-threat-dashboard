// src/components/SummaryPanel.tsx

import React from 'react';
import { Group, Badge, Card, Text } from '@mantine/core';

interface Threat {
  status: 'Open' | 'Investigating' | 'Resolved';
}

const SummaryPanel: React.FC<{ threats: Threat[] }> = ({ threats }) => {
  const countByStatus = (status: string) => threats.filter((t) => t.status === status).length;

  return (
    <Card
      shadow="sm"
      radius="md"
      style={{ backgroundColor: 'rgba(0,0,0,0.4)', marginBottom: '1em' }}
      withBorder
    >
      <Group position="apart">
        <Text weight={600} color="cyan">
          SOC Summary:
        </Text>
        <Group>
          <Badge color="blue" size="lg" radius="sm">
            Open: {countByStatus('Open')}
          </Badge>
          <Badge color="grape" size="lg" radius="sm">
            Investigating: {countByStatus('Investigating')}
          </Badge>
          <Badge color="teal" size="lg" radius="sm">
            Resolved: {countByStatus('Resolved')}
          </Badge>
        </Group>
      </Group>
    </Card>
  );
};

export default SummaryPanel;
