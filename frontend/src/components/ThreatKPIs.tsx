import React from 'react';
import { Card, Group, Title, Text, Grid } from '@mantine/core';

const ThreatKPIs: React.FC = () => {
  return (
    <Grid gutter="md" style={{ marginTop: '1.5em' }}>
      {[
        { title: 'New Threats', value: 120 },
        { title: 'Shodan Alerts', value: 45 },
        { title: 'Malware Samples', value: 30 },
        { title: 'Tracked Adversaries', value: 10 },
      ].map((item, index) => (
        <Grid.Col span="content" key={index}>
          <Card
            shadow="md"
            padding="lg"
            style={{
              width: 200,
              background: 'rgba(0,0,0,0.4)',
              borderRadius: '10px',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Group position="center">
              <Title order={4} style={{ color: '#00f0ff' }}>
                {item.title}
              </Title>
            </Group>
            <Text size="xl" weight={700} align="center" mt="md">
              {item.value}
            </Text>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default ThreatKPIs;
