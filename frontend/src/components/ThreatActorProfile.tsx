import React from 'react';
import { Card, Text, List } from '@mantine/core';

const actors = [
  { name: 'APT29', tactics: ['Credential Dumping', 'Spearphishing', 'Privilege Escalation'] },
  { name: 'DarkHydrus', tactics: ['DNS Tunneling', 'Watering Hole Attacks'] },
  { name: 'FIN7', tactics: ['Point of Sale Malware', 'Lateral Movement'] },
];

const ThreatActorProfile: React.FC = () => {
  return (
    <div>
      {actors.map((actor, idx) => (
        <Card key={idx} shadow="md" radius="md" style={{ marginBottom: '1em', background: 'rgba(20,20,40,0.8)' }}>
          <Text weight={700} color="cyan">{actor.name}</Text>
          <List spacing="xs" size="sm" mt="xs">
            {actor.tactics.map((tactic, i) => (
              <List.Item key={i}>{tactic}</List.Item>
            ))}
          </List>
        </Card>
      ))}
    </div>
  );
};

export default ThreatActorProfile;
