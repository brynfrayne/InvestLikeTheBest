// import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import "./Doughnut.scss";
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);




export default function Charts({ precentage, metric, title, btnText, chartColor }) {
  const plugins = [{
    id: '79%',
    beforeDraw: function (chart) {
        let width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
        ctx.restore();
        let fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        let text = "",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;


        ctx.fillText(text, textX, textY);

        ctx.save();
    }
}]
const data = {

    datasets: [
        {
            data: [75, 25],
            borderColor: ['rgba(0,0,0,0)'],
            backgroundColor: ['#fff', '#2E3B45'],
        }
    ],
    text: 'day strain',
};
const options = {
    plugins: {
        title: {
            display: true,
        }
    },
    cutout: '89%',
} 

    return (
        <section className="doughnut__container">
          
            {/* <div className='doughnut'> */}
                {/* <Doughnut data={data} options={options} plugins={plugins} /> */}
            {/* </div> */}
            
        </section>
    );
}