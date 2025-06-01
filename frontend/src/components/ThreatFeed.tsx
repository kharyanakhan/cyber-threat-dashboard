import React from 'react';
import { Card, Text, Badge, Group, Button } from '@mantine/core';

interface Threat {
  id: string;
  title: string;
  severity: string;
  description: string;
  timestamp: number;
}

interface ThreatFeedProps {
  threats: Threat[];
}

const ThreatFeed: React.FC<ThreatFeedProps> = ({ threats }) => {
  const now = Date.now();

  return (
    <div>
      {threats.map((threat) => {
        const ageMinutes = Math.floor((now - threat.timestamp) / 60000);
        const oldThreat = ageMinutes > 5;

        return (
          <Card key={threat.id} shadow="md" radius="md" style={{ marginBottom: '1em', background: oldThreat ? 'rgba(255, 150, 150, 0.2)' : 'rgba(20,20,40,0.8)' }}>
            <Group position="apart">
              <Text weight={700} color={oldThreat ? 'red' : 'cyan'}>{threat.title}</Text>
              <Badge color={threat.severity === 'Critical' ? 'red' : threat.severity === 'High' ? 'orange' : 'yellow'}>
                {threat.severity}
              </Badge>
            </Group>
            <Text size="sm" mt="xs">{threat.description}</Text>
            {oldThreat && <Badge color="red" mt="sm">Needs Review</Badge>}
            <Group mt="md" spacing="xs">
              <Button size="xs" color="blue">Investigate</Button>
              <Button size="xs" color="red">Block</Button>
              <Button size="xs" variant="outline">Resolve</Button>
            </Group>
          </Card>
        );
      })}
    </div>
  );
};

export default ThreatFeed;



