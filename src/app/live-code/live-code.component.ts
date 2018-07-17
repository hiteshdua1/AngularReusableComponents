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
    margin: 0 auto;
    max-width: 50em;

    font-family: "Helvetica", "Arial", sans-serif;
    color: #555;

    line-height: 1.5;
    padding: 4em 1em;
  }

  h2 {
    margin-top: 1em;
    padding-top: 1em;
  }
  code,
  pre {
    background: #eee;
  }

  code {
    padding: 2px 4px;
    vertical-align: text-bottom;
  }

  pre {
    padding: 1em;
  }

  a {
    color: #e81c4f;
  }
  body {
    color: #566b78;
  }

  code,
  pre {
    background: #f5f7f9;
    border-bottom: 1px solid #d8dee9;
    color: #a7adba;
  }

  pre {
    border-left: 2px solid #69c;
  }

  `;

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
