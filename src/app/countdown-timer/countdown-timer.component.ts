import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  @Input() deadline = 'July 15, 2019 18:00:00';
  deadlineDate: any;
  weekendDays: number;
  Weekends: number;
  days: number;
  hours: number;

  constructor() {
    this.deadlineDate = new Date(this.deadline);
  }

  ngOnInit() {
    const timer = setInterval(() => {
      // get today's date
      const today = new Date().getTime();

      // get the difference
      const diff = this.deadlineDate.getTime() - today;

      // math
      this.weekendDays = this.CalculateWeekendDays(new Date(Date.now()), this.deadlineDate);
      this.Weekends = this.weekendDays / 2;
      this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      // let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    }, 1000);
  }

  CalculateWeekendDays(fromDate, toDate) {
    let weekendDayCount = 0;

    while (fromDate < toDate) {
      fromDate.setDate(fromDate.getDate() + 1);
      if (fromDate.getDay() === 0 || fromDate.getDay() === 6) {
        ++weekendDayCount;
      }
    }
    return weekendDayCount;
  }

}
