import React from 'react';
import * as d3 from 'd3';

import { useD3 } from '../../../hooks/useD3';
import { schemeCategory10 } from 'd3';

const DonutChart = ({data}) => {
  const ref = useD3(
    (svg) => {
      const height = 300;
      const width = 700;
      const totalRadius = Math.min(width, height) / 2;
      const donutHoleRadius = totalRadius * 0.5;
      const color = d3.scaleOrdinal(schemeCategory10);

      const group = svg.append("g")
        .classed("donutG", true)
        .attr("transform", "translate(" + 300 + "," + 150 + ")"); // Pass transform properties as props

      const arc = d3.arc().innerRadius(totalRadius - donutHoleRadius).outerRadius(totalRadius);
      const arcs = d3.pie().value((d) => { return d.AMOUNT; })(data); // hard coded Amount

      arcs.forEach(function (d, i) {
        group.append("path")
          .attr("fill", color(i))
          .transition()
          .duration(2000)
          .attrTween("d", function () {
            let start = { startAngle: 0, endAngle: 0 };
            let interpolator = d3.interpolate(start, d);
            return t => arc(interpolator(t))
          })
      });

      // Create the legend
      const legendG = svg.selectAll(".legendG")
        .data(data)
        .enter()
        .append("g")
        .classed("legendG", true)
        .attr("transform", (d, i) => {
          return "translate(" + 500 + "," + (i * 40 + 50) + ")";  // Legend translate properties should be props
        });

      legendG.append("rect")
        .attr("width", 30)
        .attr("height", 30)
        .attr("fill", (d, i) => color(i));

      legendG.append("text")
        .text(d => d.CATEGORY) // hard coded CATEGORY
        .style("font-size", '1em')
        .style("font-family", "Roboto, sans-serif")
        .attr("y", 20)
        .attr("x", 40);
    },
    [data.length]
  );
  return (
    <svg ref={ref} style={{ height: 300, width: 700, marginRight: 0, marginLeft: 0 }} className="donutChartSvgContainer">
      <g className="plot-area" />
    </svg>
  );
}

export default DonutChart;
