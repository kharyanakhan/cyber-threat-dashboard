import reports from '../data/threatReports.json';

export const matchThreatToReports = (threatText: string) => {
  const matches = reports.filter((report) =>
    report.relatedIndicators.some(indicator =>
      threatText.toLowerCase().includes(indicator.toLowerCase())
    )
  );

  return matches;
};
