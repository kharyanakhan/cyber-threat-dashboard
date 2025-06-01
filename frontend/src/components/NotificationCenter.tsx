import React from 'react';
import { Card, Text, List, Transition } from '@mantine/core';

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
        {notifications.map((notif, idx) => (
          <Transition key={notif.id} mounted transition="fade" duration={500} timingFunction="ease">
            {(styles) => (
              <List.Item style={styles}>
                <Text color={notif.severity === 'Critical' ? 'red' : notif.severity === 'High' ? 'orange' : 'yellow'}>
                  {notif.message}
                </Text>
              </List.Item>
            )}
          </Transition>
        ))}
      </List>
    </Card>
  );
};

export default NotificationCenter;
