import React, { useEffect, useRef } from "react";
import DrawDonutChart from "../DrawDonutChart/DrawDonutChart";
import axios from "axios";


export default function DonutChart({ data, sumVal }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      DrawDonutChart(ref.current, data);
    }
  }, [ref]);

  return (
    <div className="container">
      <div className="graph" ref={ref} />
    </div>
  );
};

