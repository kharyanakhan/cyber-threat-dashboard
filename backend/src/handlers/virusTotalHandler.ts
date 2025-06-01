import { Request, Response } from 'express';

const virusTotalHandler = async (req: Request, res: Response) => {
  const data = [
    { file: 'malware.exe', detections: 32, type: 'Trojan' },
    { file: 'ransomware.docx', detections: 15, type: 'Ransomware' },
  ];
  res.json(data);
};

export default virusTotalHandler;
