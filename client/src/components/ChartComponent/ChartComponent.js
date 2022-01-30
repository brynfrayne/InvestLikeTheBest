import React, { useEffect, useRef } from "react";
import DrawDonutChart from "../DrawDonutChart/DrawDonutChart";
import axios from "axios";


export default function DonutChart({ data, sumVal }) {
  const ref = useRef(null);
  // const topStocks = data.sort((a,b)=> (b.value - a.value)).slice(0,6);
// console.log(topStocks);
 // axios.get(`https://company.clearbit.com/v1/domains/find?name=${filteredCompanyName}`, 
      // {headers : {
      //   Authorization: `Bearer sk_275268748a7fba421ff68563ace779ae`
      // }})

      // .then(response => {
      //   console.log(response)
      // })
  // for (let i = 0; i<data.length; i++) {
  //   axios.get()
  // }
  
  
  // const sumval = data
  // .map((holding) => (holding.value))
  // .reduce((prev, curr) => prev + curr, 0);

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

// export default React.memo(DonutChart);