import * as d3 from "d3";
// import { Translate } from "react-bootstrap-icons";

const DrawDonutChart = (element, data) => {
  const colors = ["#05BBD2", "#2070C4", "#EB80F1", "#F5C842", "#37D400"];
  const boxSize = 500;
  console.log(data)

  d3.select(element).select("svg").remove(); // Remove the old svg
  // Create new svg
  const svg = d3
    .select(element)
    .append("svg")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("height", "100%")
    .attr("width", "100%")
    .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
    .append("g")
    .attr("transform", `translate(${boxSize / 2}, ${boxSize / 2})`);

  const arcGenerator = d3.arc().padAngle(0.01).innerRadius(90).outerRadius(150);

// Below is a way to give each segment a proportionally larger segment -- delete before handing
console.log('delete the code below!!')

  //   const maxValue = data.reduce((cur, val) => Math.max(cur, val.value), 0);
// const arcGenerator = d3.arc().cornerRadius(10).padAngle(0.02).innerRadius(100)
// .outerRadius((d) => {
//     return 150 - (maxValue - d.value);
// });


  const pieGenerator = d3.pie().value((d) => d.value);

  const arcs = svg.selectAll().data(pieGenerator(data)).enter();
  arcs
    .append("path")
    .attr("d", arcGenerator)
    .style("fill", (d, i) => colors[i % data.length])
    .transition()
  .duration(700)
  .attrTween("d", function (d) {
    const i = d3.interpolate(d.startAngle, d.endAngle);
    return function (t) {
      d.endAngle = i(t);
      return arcGenerator(d);
    };
  });
  arcs 
    .append("text")
    .attr("text-anchor", "middle")
    .text((d, i)=>{return data[i].name})
    .style("fill","#fff")
    .style("font-size", "16px")
    .attr('transform', (d)=> {
      const [x, y] = arcGenerator.centroid(d);
      return `translate(${x}, ${y})`;
    })
};
export default DrawDonutChart;