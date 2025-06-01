import React, { useEffect, useState } from 'react';
import { Card, Title, List } from '@mantine/core';
import { fetchShodanData } from '../services/api';

const ThreatFeed: React.FC = () => {
  const [threats, setThreats] = useState<any[]>([]);

  useEffect(() => {
    fetchShodanData()
      .then((response) => {
        setThreats(response.data);
      })
      .catch((error) => {
        console.error('Error fetching threat feed:', error);
      });
  }, []);

  return (
    <Card padding="lg" style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '10px' }}>
      <Title order={4} style={{ color: '#00f0ff' }}>Threat Feed 🛡️</Title>
      <List spacing="xs" size="sm" mt="md">
        {threats.map((threat, idx) => (
          <List.Item key={idx}>
            [{threat.severity}] {threat.threat} - {threat.ip}
          </List.Item>
        ))}
      </List>
    </Card>
  );
};

export default ThreatFeed;
