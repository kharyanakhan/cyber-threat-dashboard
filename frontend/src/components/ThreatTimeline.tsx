import React, { useState, useEffect } from 'react';
import { Timeline, Text } from '@mantine/core';

const ThreatTimeline: React.FC = () => {
  const [events, setEvents] = useState([
    { title: 'Initial Malware Outbreak', date: '2025-04-20' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEvent = {
        title: ['New Phishing Attack', 'Zero-day Detected', 'Ransomware Campaign'][Math.floor(Math.random() * 3)],
        date: new Date().toLocaleDateString(),
      };
      setEvents((prev) => [newEvent, ...prev]);
    }, 15000); // New event every 15s

    return () => clearInterval(interval);
  }, []);

  return (
    <Timeline active={0} bulletSize={24} lineWidth={2}>
      {events.map((event, idx) => (
        <Timeline.Item key={idx} title={event.title}>
          <Text color="dimmed" size="xs">{event.date}</Text>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default ThreatTimeline;
