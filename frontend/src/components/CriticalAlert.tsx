import React, { useEffect, useState } from 'react';
import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

interface CriticalAlertProps {
  message: string;
}

const CriticalAlert: React.FC<CriticalAlertProps> = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // auto-dismiss after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <Alert
      icon={<IconAlertCircle />}
      title="Critical Threat Detected!"
      color="red"
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        width: 300,
        fontWeight: 'bold',
        backgroundColor: '#330000',
        border: '2px solid red',
        animation: 'shake 0.5s',
      }}
    >
      {message}
    </Alert>
  );
};

export default CriticalAlert;
