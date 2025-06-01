import React from 'react';
import { Card, Text, List } from '@mantine/core';

interface Notification {
  id: string;
  message: string;
  severity: string;
}

interface NotificationCenterProps {
  notifications: Notification[];
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({ notifications }) => {
  return (
    <Card shadow="md" radius="md" style={{ background: 'rgba(20,20,40,0.8)', padding: '1em' }}>
      <List spacing="xs" size="sm">
        {notifications.map((notif) => (
          <List.Item key={notif.id}>
            <Text color={notif.severity === 'Critical' ? 'red' : notif.severity === 'High' ? 'orange' : 'yellow'}>
              {notif.message}
            </Text>
          </List.Item>
        ))}
      </List>
    </Card>
  );
};

export default NotificationCenter;
