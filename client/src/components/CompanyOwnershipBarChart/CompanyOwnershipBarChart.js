import { useD3 } from '../hooks/useD3';
import React from 'react';
import * as d3 from 'd3';

function CompanyOwnershipBarChart({ data }) {
  const ref = useD3(
    (svg) => {
      const height = 200;
      const width = 500;
      const margin = { top: -20, right: 100, bottom: 0, left: 40 };

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.investor))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.25);

      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => (d.value/d.portfolioValue))])
        .rangeRound([height - margin.bottom, 80]);

      const xAxis = (g) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            // .tickValues(
            //   d3
            //     .ticks(...d3.extent(x.domain()), width / 40)
            //     .filter((v) => x(v) !== undefined)
            // )
            .tickSizeOuter(0)
        );

      const y1Axis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "black")
          .call(d3.axisLeft(y1).ticks().tickFormat(d3.format(".0%")))
          .call((g) => g.select(".domain").remove())
          .call((g) =>
            g
              .append("text")
              .attr("x", -margin.left)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              // .text(data.y1)
          );

      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(y1Axis);
      
    
      svg
        .select(".plot-area")
        .attr("fill", "steelblue")
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (d) => x(d.investor))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y1(d.value/d.portfolioValue))
        .attr("height", (d) => y1(0) - y1(d.value/d.portfolioValue));
    },
    [data.length]
  );

  return (
    <svg
      ref={ref}
      style={{
        height: 250,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
}

export default CompanyOwnershipBarChart;