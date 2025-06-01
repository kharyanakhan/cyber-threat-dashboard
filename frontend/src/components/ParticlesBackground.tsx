import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // lightweight engine

const ParticlesBackground: React.FC = () => {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine); // load slim features only (stars, basic particles)
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false, // ✅ IMPORTANT: do not force browser fullscreen
        },
        background: {
          color: {
            value: "#0d0d1a", // ✅ Dark deep space background
          },
        },
        particles: {
          number: {
            value: 100, // ✅ 100 small stars
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#00f0ff", // ✅ Neon cyan for star color
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: 1,
          },
          move: {
            enable: true,
            speed: 0.2, // ✅ Slow smooth movement
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
        detectRetina: true, // ✅ High-res particles
      }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none', // ✅ Don't block clicks
      }}
    />
  );
};

export default ParticlesBackground;

