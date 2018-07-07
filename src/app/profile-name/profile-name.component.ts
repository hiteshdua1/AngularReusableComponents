import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'profile-name',
  templateUrl: './profile-name.component.html',
  styleUrls: ['./profile-name.component.css']
})
export class ProfileNameComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() imageUrl: string;
  @Input() rotatedMode: boolean;

  constructor() { }

  ngOnInit() {
  }

}
