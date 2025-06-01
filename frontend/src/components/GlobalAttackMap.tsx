import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface AttackLocation {
  lat: number;
  lng: number;
  title: string;
}

const initialLocations: AttackLocation[] = [
  { lat: 51.5, lng: -0.09, title: 'Attack from London' },
  { lat: 48.85, lng: 2.35, title: 'Attack from Paris' },
  { lat: 40.71, lng: -74.0, title: 'Attack from New York' },
];

const GlobalAttackMap: React.FC = () => {
  const [locations, setLocations] = useState<AttackLocation[]>(initialLocations);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLocation = {
        lat: Math.random() * 180 - 90,
        lng: Math.random() * 360 - 180,
        title: 'Attack detected 🌐',
      };
      setLocations((prev) => [...prev, randomLocation]);
    }, 10000); // New attack every 10 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '70vh', borderRadius: '8px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((loc, idx) => (
        <Marker key={idx} position={[loc.lat, loc.lng]}>
          <Popup>{loc.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default GlobalAttackMap;

