import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-change',
  templateUrl: './font-change.component.html',
  styleUrls: ['./font-change.component.css']
})
export class FontChangeComponent implements OnInit {
  fontSize = 14;
  constructor() { }
  onChange(value) {
    this.fontSize = value;
  }

  ngOnInit(): void {
  }

}
