import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { cssData } from './displayData';
@Component({
  selector: 'live-code',
  templateUrl: './live-code.component.html',
  styleUrls: ['./live-code.component.css']
})
export class LiveCodeComponent implements OnInit, OnDestroy {

  @ViewChild('styletag') elStyleTag: ElementRef;

  elStyle: any;
  styles = cssData;

  constructor() { }

  ngOnInit() {
    const head = document.getElementsByTagName('head')[0];
    this.elStyle = document.createElement('style');
    this.elStyle.type = 'text/css';
    head.appendChild(this.elStyle);

    this.writeStyles(this.styles, 0, 16);
  }

  ngOnDestroy(): void {
    this.styles = null;
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
