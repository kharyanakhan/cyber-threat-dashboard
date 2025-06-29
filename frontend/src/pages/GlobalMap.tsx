import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

const attackLocations = [
  { lat: 51.5, lng: -0.09, title: 'Attack from London' },
  { lat: 48.85, lng: 2.35, title: 'Attack from Paris' },
  { lat: 40.71, lng: -74.0, title: 'Attack from New York' },
  { lat: 35.68, lng: 139.69, title: 'Attack from Tokyo' },
  { lat: 55.75, lng: 37.61, title: 'Attack from Moscow' },
];

// Custom hook to fix Leaflet map resize
const ResizeMap = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100); // allow tab animation to finish
  }, [map]);
  return null;
};

const GlobalAttackMap: React.FC = () => {
  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '70vh', width: '100%', borderRadius: '8px' }}>
      <ResizeMap />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {attackLocations.map((loc, idx) => (
        <Marker key={idx} position={[loc.lat, loc.lng]}>
          <Popup>{loc.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default GlobalAttackMap;
