export interface Threat {
    ip: string;
    threat: string;
    severity: string;
    location: { lat: number; lng: number };
  }
  
  export interface Campaign {
    name: string;
    threats: Threat[];
  }
  
  export const correlateThreatsToCampaigns = (threats: Threat[]): Campaign[] => {
    const campaigns: Campaign[] = [];
  
    threats.forEach((threat) => {
      const matchedCampaign = campaigns.find((campaign) =>
        campaign.threats.some(
          (t) =>
            t.ip.split('.')[0] === threat.ip.split('.')[0] || // Same IP range
            t.threat.includes(threat.threat.split(' ')[0])    // Same malware keyword
        )
      );
  
      if (matchedCampaign) {
        matchedCampaign.threats.push(threat);
      } else {
        campaigns.push({
          name: generateCampaignName(),
          threats: [threat],
        });
      }
    });
  
    return campaigns;
  };
  
  const adjectives = ['Silent', 'Dark', 'Phantom', 'Crimson', 'Shadow'];
  const nouns = ['Wind', 'Hydra', 'Falcon', 'Reaper', 'Viper'];
  
  const generateCampaignName = () => {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${adj} ${noun} Operation`;
  };
  