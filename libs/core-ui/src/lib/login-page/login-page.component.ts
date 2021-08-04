import { Component, OnInit } from '@angular/core';
import { LoggerService } from '@nx-playground/core';

@Component({
  selector: 'nx-playground-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private logger: LoggerService
  ) { }

  ngOnInit(): void {
    this.logger.log('Hi!');
  }
}
