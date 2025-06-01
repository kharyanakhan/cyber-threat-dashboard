import React, { useEffect, useRef } from 'react';
import { Card, Title } from '@mantine/core';
import * as d3 from 'd3';

const mockTTPsData = [
  { technique: 'Phishing', count: 20 },
  { technique: 'Credential Dumping', count: 15 },
  { technique: 'Lateral Movement', count: 12 },
  { technique: 'C2 Communication', count: 9 },
  { technique: 'Privilege Escalation', count: 7 },
];

const TopTTPsChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const margin = { top: 20, right: 20, bottom: 30, left: 150 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const y = d3.scaleBand()
      .domain(mockTTPsData.map(d => d.technique))
      .range([0, height])
      .padding(0.2);

    const x = d3.scaleLinear()
      .domain([0, d3.max(mockTTPsData, d => d.count)!])
      .range([0, width]);

    svg.append('g')
      .call(d3.axisLeft(y).tickSize(0).tickPadding(10));

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(5))
      .select(".domain").remove();

    svg.selectAll('rect')
      .data(mockTTPsData)
      .enter()
      .append('rect')
      .attr('y', d => y(d.technique)!)
      .attr('width', d => x(d.count))
      .attr('height', y.bandwidth())
      .attr('fill', '#00f0ff');
  }, []);

  return (
    <Card padding="lg" style={{ height: 400, background: 'rgba(0,0,0,0.4)', borderRadius: '10px' }}>
      <Title order={4} style={{ color: '#00f0ff' }}>Top MITRE TTPs 📊</Title>
      <div ref={chartRef} style={{ marginTop: '1em', height: '300px' }} />
    </Card>
  );
};

export default TopTTPsChart;
