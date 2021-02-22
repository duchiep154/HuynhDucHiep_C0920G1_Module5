import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hienthipet',
  templateUrl: './hienthipet.component.html',
  styleUrls: ['./hienthipet.component.css']
})
export class HienthipetComponent implements OnInit {

  petName = 'puppie';
  petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';
  petAge = '15';
  constructor() { }

  updateName(name: string): void {
    this.petName = name;
  }

  updateImage(image: string): void {
    this.petImage = image;;
  }
  updateAge(age: string): void {
    this.petAge = age;
  }

  ngOnInit(): void {
  }

}
