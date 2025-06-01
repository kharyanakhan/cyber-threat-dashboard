import React from 'react';
import { MantineProvider } from '@mantine/core';
import Dashboard from './pages/Dashboard';
import ParticlesBackground from './components/ParticlesBackground';

const App: React.FC = () => {
  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark',
        fontFamily: 'Orbitron, monospace',
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        {/* Particles behind */}
        <ParticlesBackground />
        
        {/* Dashboard content */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}>
          <Dashboard />
        </div>
      </div>
    </MantineProvider>
  );
};

export default App;

