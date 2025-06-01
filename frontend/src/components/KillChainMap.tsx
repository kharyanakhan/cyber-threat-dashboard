import React, { useState, useEffect } from 'react';
import { Card, Text, Progress, Group } from '@mantine/core';

const stages = ['Reconnaissance', 'Weaponization', 'Delivery', 'Exploitation', 'Installation', 'C2', 'Actions on Objectives'];

const KillChainMap: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < stages.length ? prev + 1 : prev));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card shadow="md" radius="md" style={{ padding: '1em', background: 'rgba(20,20,40,0.8)' }}>
      <Text weight={700} color="cyan" mb="md">Attack Kill Chain Progression</Text>
      {stages.map((stage, idx) => (
        <Group key={idx} position="apart" style={{ marginBottom: '0.5em' }}>
          <Text>{stage}</Text>
          <Progress value={progress > idx ? 100 : 0} color="cyan" style={{ flex: 1 }} />
        </Group>
      ))}
    </Card>
  );
};

export default KillChainMap;

