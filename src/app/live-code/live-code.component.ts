import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'live-code',
  templateUrl: './live-code.component.html',
  styleUrls: ['./live-code.component.css']
})
export class LiveCodeComponent implements OnInit {

  @ViewChild('styletag') elStyleTag: ElementRef;

  elStyle: any;
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
    const head = document.getElementsByTagName('head')[0];
    this.elStyle = document.createElement('style');
    this.elStyle.type = 'text/css';
    head.appendChild(this.elStyle);

    this.writeStyles(this.styles, 0, 16);
  }

  writeStyleChar(which) {
    this.styles = this.elStyle.innerHTML + which;
    this.elStyle.innerHTML = this.styles;
    this.elStyleTag.nativeElement.innerHTML += which;
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
