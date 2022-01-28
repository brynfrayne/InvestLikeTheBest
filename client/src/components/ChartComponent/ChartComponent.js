import React, { useEffect, useRef } from "react";
import DrawDonutChart from "../DrawDonutChart/DrawDonutChart";
import axios from "axios";


const DonutChart = ({ data, sumVal }) => {
  const ref = useRef(null);
  

  // for (let i = 0; i<data.length; i++) {
  //   axios.get()
  // }
  
  
  // const sumval = data
  // .map((holding) => (holding.value))
  // .reduce((prev, curr) => prev + curr, 0);
  
// console.log(sumval)
// console.log(data)
  useEffect(() => {
    if (ref.current) {
      DrawDonutChart(ref.current, data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return (
    <div className="container">
      <div className="graph" ref={ref} />
    </div>
  );
};

export default React.memo(DonutChart);