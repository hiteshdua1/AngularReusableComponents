import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'activity-streak',
  templateUrl: './activity-streak.component.html',
  styleUrls: ['./activity-streak.component.css']
})
export class ActivityStreakComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    d3.select('p').style('color', 'red');
    }

}
