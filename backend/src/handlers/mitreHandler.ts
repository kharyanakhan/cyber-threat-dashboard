import { Request, Response } from 'express';

const mitreHandler = async (req: Request, res: Response) => {
  const data = [
    { group: 'APT29', ttps: ['Spearphishing', 'Credential Dumping'] },
    { group: 'FIN7', ttps: ['Malware Deployment', 'Lateral Movement'] },
  ];
  res.json(data);
};

export default mitreHandler;
