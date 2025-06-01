// src/components/SectionHeader.tsx

import React from 'react';
import { Text, Divider } from '@mantine/core';

const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <Text size="xl" weight={700} color="cyan" mb="xs">
        {title}
      </Text>
      <Divider size="sm" color="cyan" mb="md" />
    </>
  );
};

export default SectionHeader;
