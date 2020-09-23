import React from 'react';
import * as d3 from 'd3';

import { useD3 } from '../../../hooks/useD3';

const BarChart = ({data}) => {
  const ref = useD3(
    (svg) => {
      const height = 500;
      const width = 500;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      const x = d3.scaleBand()
                  .domain(data.map(d => d.DATE))
                  .rangeRound([margin.left, width - margin.right])
                  .padding(0.1);

      const y = d3.scaleLinear()
                  .domain([0, d3.max(data, d => d.sales)])
                  .rangeRound([height - margin.bottom, margin.top]);

      svg.append('g').call(d3.axisLeft(y));
      
      svg.append('g')
         .call(d3.axisBottom(x));
    },
    [data.length]
  );

  return (
    <svg ref={ref} style={{height: 500, width: '100%', marginRight: 0, marginLeft: 0}}>
      <g className="plot-area"/>
      <g className="x-axis"/>
      <g className="y-axis"/>
    </svg>
  );
}

export default BarChart;