import React, { useEffect, useState } from 'react';
import { Card, Title } from '@mantine/core';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { fetchShodanData } from '../services/api';
import L from 'leaflet';

const GlobalAttackMap: React.FC = () => {
  const [attacks, setAttacks] = useState<any[]>([]);

  useEffect(() => {
    fetchShodanData()
      .then((response) => {
        setAttacks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Shodan data:', error);
      });
  }, []);

  const customMarker = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/252/252025.png',
    iconSize: [25, 25],
  });

  return (
    <Card padding="lg" style={{ height: 400, background: 'rgba(0,0,0,0.4)', borderRadius: '10px' }}>
      <Title order={4} style={{ color: '#00f0ff' }}>Global Attack Map 🌎</Title>
      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false} style={{ height: '300px', marginTop: '1em' }}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
        {attacks.map((attack, idx) => (
          <Marker
            key={idx}
            position={[attack.location.lat, attack.location.lng]}
            icon={customMarker}
          >
            <Popup>
              <strong>IP:</strong> {attack.ip} <br />
              <strong>Threat:</strong> {attack.threat} <br />
              <strong>Severity:</strong> {attack.severity}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Card>
  );
};

export default GlobalAttackMap;
