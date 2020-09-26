import React from 'react';
import * as d3 from 'd3';

import { useD3 } from '../../../hooks/useD3';

const BarChart = ({data, SVGHeight, SVGWidth, containerMargin}) => {
  const ref = useD3(
    (svg) => {
      const height = SVGHeight - containerMargin.top - containerMargin.bottom;
      const width = SVGWidth - containerMargin.left - containerMargin.right;
      const margin = containerMargin;

      const x = d3.scaleBand()
                  .domain(data.map(d => d.DATE))
                  .rangeRound([margin.left, width - margin.right])
                  .padding(0.1);

      const y = d3.scaleLinear()
                  .domain([0, d3.max(data, d => d.AMOUNT)])
                  .rangeRound([height - margin.bottom, margin.top]);

      /*svg.append('g').call(d3.axisLeft(y));
      svg.append('g')
         .attr('transform', `translate(0, ${height})`)
         .call(d3.axisBottom(x))
         .attr('x', x.bandwidth()/2)
         .attr('y', 0);*/
      
      const xAxis =  (g) => 
                      g.call(d3.axisBottom(x))
                       .attr('transform', `translate(0, ${height})`);
            
      const yAxis = (g) => 
                     g.call(d3.axisLeft(y))
                      .text(data.AMOUNT)
      
      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(yAxis);
      
      svg.select(".plot-area")
         .attr("fill", "steelblue")
         .selectAll(".bar")
         .data(data)
         .join("rect")
         .attr("class", "bar")
         .attr("x", (d) => x(d.DATE))
         .attr("width", x.bandwidth())
         .attr("y", (d) => y(d.AMOUNT))
         .attr("height", (d) => y(0) - y(d.AMOUNT));
    },
    [data.length]
  );

  return (
    <svg ref={ref} style={{height: SVGHeight, width: SVGWidth, marginRight: 0, marginLeft: 0}}>
      <g className="plot-area"/>
      <g className="x-axis"/>
      <g className="y-axis"/>
    </svg>
  );
}

export default BarChart;
