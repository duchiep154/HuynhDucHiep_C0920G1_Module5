import { Component } from '@angular/core';
import {fadeAnimation} from "./common/fadeIntRoute";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent {
  title = 'exam-final';
}
