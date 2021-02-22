import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css']
})
export class ChangeColorComponent implements OnInit {

  background = '#e0d841';
  constructor() { }

  ngOnInit(): void {
  }

  onChange(value): void {
    this.background = value;
  }

}
