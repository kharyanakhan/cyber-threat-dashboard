import React, { useEffect, useState, useRef } from 'react';
import { Card, Title, List, Text } from '@mantine/core';

const mockBreachData = [
  { company: 'ACME Corp', breachType: 'Credentials leak', time: '10 min ago' },
  { company: 'Globex Inc.', breachType: 'Internal documents leaked', time: '20 min ago' },
  { company: 'Cyberdyne Systems', breachType: 'Admin passwords sold', time: '30 min ago' },
  { company: 'Umbrella Corporation', breachType: 'R&D data compromised', time: '1 hr ago' },
  { company: 'Stark Industries', breachType: 'Zero-day exploit found', time: '2 hr ago' },
];

const DarknetBreachFeed: React.FC = () => {
  const [breaches, setBreaches] = useState(mockBreachData);

  useEffect(() => {
    // Future: fetch from backend darknet feed here
  }, []);

  return (
    <Card padding="lg" style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '10px', height: 300 }}>
      <Title order={4} style={{ color: '#00f0ff' }}>Darknet Breach Feed 🌎</Title>
      <List spacing="xs" size="sm" mt="md">
        {breaches.map((breach, idx) => (
          <List.Item key={idx}>
            <Text size="sm" color="gray">
              {breach.time}
            </Text>
            <Text size="sm" weight={700}>
              {breach.company}: {breach.breachType}
            </Text>
          </List.Item>
        ))}
      </List>
    </Card>
  );
};

export default DarknetBreachFeed;
