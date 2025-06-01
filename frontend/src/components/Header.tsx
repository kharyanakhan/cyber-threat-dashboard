import React from 'react';
import { Group, Title } from '@mantine/core';

const Header: React.FC = () => {
  return (
    <Group position="apart" style={{ padding: '1em 2em' }}>
      <Title
        order={2}
        style={{
          color: '#00f0ff',
          fontFamily: 'Roboto Mono, monospace',
        }}
      >
        CyberIntel Dashboard
      </Title>
    </Group>
  );
};

export default Header;
