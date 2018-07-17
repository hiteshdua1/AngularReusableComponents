import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'live-code',
  templateUrl: './live-code.component.html',
  styleUrls: ['./live-code.component.css']
})
export class LiveCodeComponent implements OnInit {

  @ViewChild('style-tag') elStyleTag: HTMLElement;
  @ViewChild('style-text') elStyleText: HTMLElement;

  styles = `
  body {
    background-color: red;
    color: white;

    background: green;

    background: blue;

    background: yellow;
    background: black;
  }`;

  constructor() { }

  ngOnInit() {
    this.writeStyles(this.styles, 0, 16);
  }

  writeStyleChar(which) {
    this.styles = this.elStyleText.innerHTML + which;
    this.elStyleText.innerHTML = this.styles;
    this.elStyleTag.innerHTML += which;
  }

  writeStyles(message, index, interval) {
    if (index < message.length) {
      this.writeStyleChar(message[index++]);

      setTimeout(() => {
        this.writeStyles(message, index, interval);
      }, interval);
    }
  }

}
