import * as d3 from "d3";
// import { Translate } from "react-bootstrap-data";

export default function DrawDonutChart(element, data) {
  const colors = ["#05BBD2", "#2070C4", "#EB80F1", "#F5C842", "#37D400"];
  const boxSize = 500;
  console.log(data)
  for (let i=0; i<data.length;i++){
  console.log(data[i].logo)
  }  

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
  // .append("svg:image")
  // .attr("href",data.logoURL)
  // .attr("width", "32")
  // .attr("height", "32");
  // console.log(data.investor)

    .append("text")
    .attr("text-anchor", "middle")
    .text((d, i)=>{return data[i].name})
    .style("fill","#fff")
    .style("font-size", "16px")
    .attr('transform', (d)=> {
      const [x, y] = arcGenerator.centroid(d);
      return `translate(${x}, ${y})`;
    })


const image_width = 90;
const image_height = 90;
    arcs
    .append("svg:image")
    .data(data)
    .attr("href",function(d, i) { 
      console.log(data[i].logo) 
      return data[i].logo})
    .attr("width", image_width)
    .attr("height", image_height)
    .style("fill","#fff")
    .style("position", "absolute")
  //   .attr("transform", function(d){
  //     // Reposition so that the centre of the image (not the top left corner)
  //     // is in the centre of the arc
  //     const y = arcGenerator.centroid(d)[1] - image_height/2;
  //     const x = arcGenerator.centroid(d)[0] - image_width/2;
  //     return "translate(" + x + "," + y + ")";
  // })
  // .attr("x",-1*image_width/2)
  // .attr("y",-1*image_height/2);
  .attr('transform', (d)=> {
      const [x, y] = arcGenerator.centroid(d);
      return `translate(${x}, ${y})`;
    })
 
};

// var width = 550,
//     height = 550,
//     radius = 250;
//     // colors = ['#336699 ','#336699 ','#ACD1E9','#ACD1E9','#ACD1E9'];

// const image_width=40,
//     image_height=40;

// var pie = d3.pie().value((d) => d.value);

// var arc = d3.arc().padAngle(0.01).innerRadius(90).outerRadius(150);

// var svg = d3.select('body').append('svg')
//     .attr('width', width)
//     .attr('height', height)
//     .append('g')
//     .attr('transform', 'translate('+(width-radius)+','+(height-radius)+')');


// var g = svg.selectAll(".arc")
//       .data(pie(data))
//     .enter().append("g")
//       .attr("class", "arc");

//   g.append("path")
//       .attr("d", arc)
//       .style("fill", (d, i) => colors[i % data.length])

//   g.append("g")
//       .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
//   .append("svg:image")
//       .attr("xlink:href",function(d) {return d.data.image;})
//       .attr("width",image_width)
//       .attr("height",image_height)
//       .attr("x",-1*image_width/2)
//       .attr("y",-1*image_height/2);

// export default DrawDonutChart;