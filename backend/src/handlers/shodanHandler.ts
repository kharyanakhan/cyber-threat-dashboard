import { Request, Response } from 'express';

const shodanHandler = async (req: Request, res: Response) => {
  // MOCK attack data with coordinates
  const data = [
    {
      ip: '8.8.8.8',
      location: { lat: 37.3861, lng: -122.0839 }, // Mountain View, CA
      threat: 'Open port detected',
      severity: 'High',
    },
    {
      ip: '1.1.1.1',
      location: { lat: -33.8688, lng: 151.2093 }, // Sydney, AU
      threat: 'Potential malware host',
      severity: 'Critical',
    },
    {
      ip: '203.0.113.1',
      location: { lat: 48.8566, lng: 2.3522 }, // Paris
      threat: 'Botnet C2 server',
      severity: 'Critical',
    },
  ];
  res.json(data);
};

export default shodanHandler;
