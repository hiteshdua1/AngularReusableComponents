import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'activity-streak',
  templateUrl: './activity-streak.component.html',
  styleUrls: ['./activity-streak.component.css']
})
export class ActivityStreakComponent implements OnInit, AfterContentInit {
  cellSize: number;

  ngAfterContentInit(): void {
    const width = 960,
      height = 136;
    this.cellSize = 17;

    const formatPercent = d3.format('.1%');

    const color = d3.scaleQuantize()
      .domain([-0.05, 0.05])
      .range(['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837']);

    const svg = d3.select('body')
      .selectAll('svg')
      .data(d3.range(1990, 2011))
      .enter().append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + ((width - this.cellSize * 53) / 2) + ',' + (height - this.cellSize * 7 - 1) + ')');

    svg.append('text')
      .attr('transform', 'translate(-6,' + this.cellSize * 3.5 + ')rotate(-90)')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 10)
      .attr('text-anchor', 'middle')
      .text(function (d) { return d; });

    const rect = svg.append('g')
      .attr('fill', 'none')
      .attr('stroke', '#ccc')
      .selectAll('rect')
      .data(function (d) { return d3.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
      .enter().append('rect')
      .attr('width', this.cellSize)
      .attr('height', this.cellSize)
      .attr('x', function (d) { return d3.timeWeek.count(d3.timeYear(d), d) * this.cellSize; })
      .attr('y', function (d) { return d.getDay() * this.cellSize; })
      .datum(d3.timeFormat('%Y-%m-%d'));

    svg.append('g')
      .attr('fill', 'none')
      .attr('stroke', '#000')
      .selectAll('path')
      .data(function (d) { return d3.timeMonths(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
      .enter().append('path')
      .attr('d', this.pathMonth);

    d3.csv('dji.csv', function (error, csv) {
      if (error) {
        throw error;
      }
      const data = d3.nest()
        .key(function (d) { return d.Date; })
        .rollup(function (d) { return (d[0].Close - d[0].Open) / d[0].Open; })
        .object(csv);

      rect.filter(function (d) { return d in data; })
        .attr('fill', function (d) { return color(data[d]); })
        .append('title')
        .text(function (d) { return d + ': ' + formatPercent(data[d]); });
    });
  }

  constructor() { }


  ngOnInit() {
  }

  pathMonth(t0) {
    const t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
      d0 = t0.getDay(), w0 = d3.timeWeek.count(d3.timeYear(t0), t0),
      d1 = t1.getDay(), w1 = d3.timeWeek.count(d3.timeYear(t1), t1);

    return 'M' + (w0 + 1) * this.cellSize + ',' + d0 * this.cellSize
      + 'H' + w0 * this.cellSize + 'V' + 7 * this.cellSize
      + 'H' + w1 * this.cellSize + 'V' + (d1 + 1) * this.cellSize
      + 'H' + (w1 + 1) * this.cellSize + 'V' + 0
      + 'H' + (w0 + 1) * this.cellSize + 'Z';
  }
}
