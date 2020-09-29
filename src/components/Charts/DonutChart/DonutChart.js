import React from 'react';
import * as d3 from 'd3';

import { useD3 } from '../../../hooks/useD3';
import { schemeCategory10 } from 'd3';

const DonutChart = () => {
  return (
    <svg ref={ref} style={{ height: 300, width: 300, marginRight: 0, marginLeft: 0 }}>
      <g className="plot-area" />
    </svg>
  );
}

export default DonutChart;
