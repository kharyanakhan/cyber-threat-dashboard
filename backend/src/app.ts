import express from 'express';
import cors from 'cors';
import shodanHandler from './handlers/shodanHandler';
import virusTotalHandler from './handlers/virusTotalHandler';
import mitreHandler from './handlers/mitreHandler';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/shodan', shodanHandler);
app.get('/api/virustotal', virusTotalHandler);
app.get('/api/mitre', mitreHandler);

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
