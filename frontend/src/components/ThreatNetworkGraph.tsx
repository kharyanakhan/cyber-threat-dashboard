import React from 'react';
import { Card, Text } from '@mantine/core';

const ThreatNetworkGraph: React.FC = () => {
  return (
    <Card shadow="md" radius="md" style={{ height: '400px', background: 'rgba(20,20,40,0.8)', padding: '1em' }}>
      <Text weight={700} color="cyan" mb="md">Threat Relationship Map (Static Demo)</Text>
      <Text size="sm">Actor ➔ Malware ➔ IP ➔ C2 Server</Text>
      <Text size="sm" mt="md">APT29 ➔ Credential Dumper ➔ 203.0.113.10 ➔ C2 Server A</Text>
      <Text size="sm">FIN7 ➔ PoS Malware ➔ 198.51.100.5 ➔ C2 Server B</Text>
    </Card>
  );
};

export default ThreatNetworkGraph;
