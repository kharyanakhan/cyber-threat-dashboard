import React, { useState } from 'react';
import { Button, Modal, Text, Group } from '@mantine/core';

const ShareExportControls: React.FC = () => {
  const [opened, setOpened] = useState(false);

  const handleExport = () => {
    setOpened(true);
    // (Future: Add real file generation here)
  };

  return (
    <>
      <Group mt="md" spacing="md">
        <Button
          size="xs"
          variant="outline"
          radius="md"
          onClick={handleExport}
          style={{ borderColor: '#00cfff', color: '#00cfff' }}
        >
          Export Threat Report
        </Button>

        <Button
          size="xs"
          variant="outline"
          radius="md"
          onClick={handleExport}
          style={{ borderColor: '#00cfff', color: '#00cfff' }}
        >
          Share Intelligence
        </Button>
      </Group>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Success!"
        centered
        overlayOpacity={0.55}
        overlayBlur={3}
        styles={{
          modal: {
            backgroundColor: '#0d0d1a',
            color: '#00f0ff',
          },
          title: {
            color: '#00cfff',
          },
        }}
      >
        <Text>Threat report successfully exported and shared!</Text>
      </Modal>
    </>
  );
};

export default ShareExportControls;
