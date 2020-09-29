
import React from 'react';
import * as d3 from 'd3';

import { useD3 } from '../../../hooks/useD3';
import { schemeCategory10 } from 'd3';

const hopsData = [{
  name: 'Washington',
  acres: 32205
}, {
  name: 'Oregon',
  acres: 6807
}, {
  name: 'Idaho',
  acres: 4975
}, {
  name: 'Other States',
  acres: 1244
}, {
  name: 'Canada',
  acres: 257
}];

const DonutChart = () => {
  const ref = useD3(
    (svg) => {
      const height = 300;
      const width = 300;
      const totalRadius = Math.min(width, height) / 2;
      const donutHoleRadius = totalRadius * 0.5;
      const color = d3.scaleOrdinal(schemeCategory10);

      const arc = d3.arc().innerRadius(totalRadius - donutHoleRadius).outerRadius(totalRadius);
    },
    [] // pass length property
  );
  return (
    <svg ref={ref} style={{ height: 300, width: 300, marginRight: 0, marginLeft: 0 }}>
      <g className="plot-area" />
    </svg>
  );
}

export default DonutChart;
