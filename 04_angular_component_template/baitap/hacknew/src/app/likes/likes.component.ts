import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
})
export class LikesComponent implements OnInit {

  likes = 0;

  // tslint:disable-next-line:typedef
  likeThis() {
    this.likes++;
  }
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
