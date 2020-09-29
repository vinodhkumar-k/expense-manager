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

      const group = d3.select(document.getElementsByClassName('donutChartSvgContainer')[0]).append("g")
        .classed("donutG", true)
        .attr("transform", "translate(" + 300 + "," + 150 + ")"); // Pass transform properties as props

      const arc = d3.arc().innerRadius(totalRadius - donutHoleRadius).outerRadius(totalRadius);
      const arcs = d3.pie().value((d) => { return d.acres; })(hopsData);

      arcs.forEach(function (d, i) {
        group.append("path")
          .attr("fill", color(i))
          .transition()
          .duration(2000)
          .attrTween("d", function () {
            let start = { startAngle: 0, endAngle: 0 };
            let interpolator = d3.interpolate(start, d);
            return function (t) {
              return arc(interpolator(t));
            };
          })
      });
    },
    [hopsData.length] // pass length property
  );
  return (
    <svg ref={ref} style={{ height: 350, width: 500, marginRight: 0, marginLeft: 0 }} className="donutChartSvgContainer">
      <g className="plot-area"/>
    </svg>
  );
}

export default DonutChart;
