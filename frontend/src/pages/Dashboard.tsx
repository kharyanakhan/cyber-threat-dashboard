import React, { useState, useEffect } from 'react';
import { Container, Tabs, Group, Card, Text, SimpleGrid, Badge } from '@mantine/core';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ThreatKPIs from '../components/ThreatKPIs';
import GlobalAttackMap from '../pages/GlobalMap';
import ThreatActorProfile from '../components/ThreatActorProfile';
import ThreatCharts from '../components/ThreatCharts';
import TopTTPsChart from '../components/TopTTPsChart';
import DarknetBreachFeed from '../components/DarknetBreachFeed';
import ThreatFeed from '../components/ThreatFeed';
import KillChainMap from '../components/KillChainMap';
import CampaignsView from '../components/CampaignsView';
import AnalystNotes from '../components/AnalystNotes';
import ShareExportControls from '../components/ShareExportControls';
import NotificationCenter from '../components/NotificationCenter';
import ThreatTimeline from '../components/ThreatTimeline';
import ThreatNetworkGraph from '../components/ThreatNetworkGraph';

interface Threat {
  id: string;
  title: string;
  severity: string;
  description: string;
}

const Dashboard: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [ipSearch, setIpSearch] = useState<string>('');
  const [threats, setThreats] = useState<Threat[]>([]);
  const [notifications, setNotifications] = useState<{ id: string; message: string; severity: string }[]>([]);

  const threatTitles = [
    'Dark Viper Operation',
    'Silent Reaper Operation',
    'Phantom Hydra Attack',
    'Shadow Worm C2',
    'Nova Strike Breach',
    'Blackout Intrusion',
  ];

  const severities = ['Critical', 'High', 'Medium', 'Low'];

  const generateThreat = () => {
    const randomTitle = threatTitles[Math.floor(Math.random() * threatTitles.length)];
    const randomSeverity = severities[Math.floor(Math.random() * severities.length)];
    const randomIp = `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;

    const threat = {
      id: Math.random().toString(36).substr(2, 9),
      title: randomTitle,
      severity: randomSeverity,
      description: `Suspicious activity detected from IP ${randomIp}`,
    };

    setThreats((prev) => [threat, ...prev.slice(0, 9)]);
    setNotifications((prev) => [
      { id: threat.id, message: `${threat.title} (${randomIp})`, severity: threat.severity },
      ...prev.slice(0, 19),
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      generateThreat();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Header */}
      <Group position="apart" style={{ padding: '1em 2em' }}>
        <Header />
        <NotificationCenter notifications={notifications} />
      </Group>

      {/* Tabs Section */}
      <Container size="xl" style={{ marginTop: '1em', minHeight: '90vh' }}>
        <Tabs
          variant="outline"
          radius="md"
          color="cyan"
          defaultValue="dashboard"
          styles={{
            tab: {
              fontSize: '1em',
              fontWeight: 'bold',
              padding: '0.7em 1.2em',
              color: '#00f0ff',
              borderBottom: '2px solid transparent',
              backgroundColor: 'transparent',
              transition: 'all 0.3s ease',
            },
            tabActive: {
              borderBottom: '2px solid #00f0ff',
              backgroundColor: 'rgba(0,255,255,0.05)',
              color: '#00f0ff',
            },
            list: {
              marginBottom: '1em',
              justifyContent: 'center',
            },
          }}
        >
          <Tabs.List grow>
            <Tabs.Tab value="dashboard">Dashboard 🛡️</Tabs.Tab>
            <Tabs.Tab value="global-map">Global Map 🌍</Tabs.Tab>
            <Tabs.Tab value="threat-intel">Threat Intel 🧠</Tabs.Tab>
            <Tabs.Tab value="campaigns">Campaigns 🎯</Tabs.Tab>
            <Tabs.Tab value="darknet">Darknet Intelligence 🌌</Tabs.Tab>
            <Tabs.Tab value="notifications">Notifications 🔔</Tabs.Tab>
          </Tabs.List>

          {/* Dashboard Panel */}
          <Tabs.Panel value="dashboard" pt="md">
            <SimpleGrid cols={2} spacing="lg">
              {/* Left side: Filter + KPIs */}
              <div>
                <Card
                  shadow="md"
                  style={{
                    background: 'rgba(10, 10, 30, 0.8)',
                    borderRadius: '12px',
                    padding: '1em',
                  }}
                >
                  <SearchBar filter={filter} setFilter={setFilter} ipSearch={ipSearch} setIpSearch={setIpSearch} />
                </Card>

                <div style={{ marginTop: '2em' }}>
                  <ThreatKPIs />
                </div>
              </div>

              {/* Right side: Threat Feed */}
              <div>
                <ThreatFeed threats={threats} />
              </div>
            </SimpleGrid>
          </Tabs.Panel>

          {/* Other Tabs */}
          <Tabs.Panel value="global-map" pt="md">
            <div style={{ height: '80vh', width: '100%' }}>
              <GlobalAttackMap />
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="threat-intel" pt="md">
            <ThreatActorProfile />
            <ThreatTimeline />
            <ThreatNetworkGraph />
          </Tabs.Panel>

          <Tabs.Panel value="campaigns" pt="md">
            <KillChainMap />
            <CampaignsView />
            <TopTTPsChart />
            <ThreatCharts />
          </Tabs.Panel>

          <Tabs.Panel value="darknet" pt="md">
            <DarknetBreachFeed />
          </Tabs.Panel>

          <Tabs.Panel value="notifications" pt="md">
            <Group position="center" style={{ marginBottom: '1em' }}>
              <Text weight={700} color="cyan" size="lg">
                Past Threat Notifications
              </Text>
            </Group>
            <NotificationCenter notifications={notifications} />
          </Tabs.Panel>

        </Tabs>
      </Container>
    </>
  );
};

export default Dashboard;


