import React, { useEffect, useRef } from 'react';
import { Card, Title } from '@mantine/core';
import * as d3 from 'd3';

const mockThreatData = [
  { date: '2024-04-15', threats: 5 },
  { date: '2024-04-16', threats: 10 },
  { date: '2024-04-17', threats: 8 },
  { date: '2024-04-18', threats: 12 },
  { date: '2024-04-19', threats: 15 },
  { date: '2024-04-20', threats: 20 },
];

const ThreatCharts: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const parseDate = d3.timeParse('%Y-%m-%d');

    const data = mockThreatData.map(d => ({
      date: parseDate(d.date) as Date,
      threats: d.threats
    }));

    const x = d3.scaleTime()
      .domain(d3.extent(data, d => d.date) as [Date, Date])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.threats)!])
      .range([height, 0]);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).tickFormat(d3.timeFormat('%b %d')));

    svg.append('g')
      .call(d3.axisLeft(y));

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#00f0ff')
      .attr('stroke-width', 2)
      .attr('d', d3.line<any>()
        .x(d => x(d.date))
        .y(d => y(d.threats))
      );

  }, []);

  return (
    <Card padding="lg" style={{ height: 400, background: 'rgba(0,0,0,0.4)', borderRadius: '10px' }}>
      <Title order={4} style={{ color: '#00f0ff' }}>Threat Trends 📈</Title>
      <div ref={chartRef} style={{ marginTop: '1em', height: '300px' }} />
    </Card>
  );
};

export default ThreatCharts;
