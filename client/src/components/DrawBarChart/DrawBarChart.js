import React, { Component } from 'react';
import { Element } from 'react-faux-dom';
import * as d3 from 'd3';
import './DrawBarChart.scss';

class DrawBarChart extends Component {
    drawChart() {
        const width = 800;
        const height = 450;
        const el = new Element('div');
        const svg = d3.select(el)
            .append('svg')
            .attr('id', 'chart')
            .attr('width', width)
            .attr('height', height);

        return el.toReact();
    }
    
    render() {
        return this.drawChart();
    }
}

export default DrawBarChart;