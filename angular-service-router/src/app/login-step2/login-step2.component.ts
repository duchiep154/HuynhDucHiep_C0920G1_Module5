import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login-step2',
  templateUrl: './login-step2.component.html',
  styleUrls: ['./login-step2.component.scss']
})
export class LoginStep2Component implements OnInit {
  username: string;
  password = new FormControl();
  constructor(private loginSrv: LoginServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.username = this.loginSrv.loginData.username;
  }

  login() {
    this.router.navigateByUrl('/dictionary-page');
    // do login
    console.log({
      username: this.username,
      password: this.password.value
    });
  }
}
