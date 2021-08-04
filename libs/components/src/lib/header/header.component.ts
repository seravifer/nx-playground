import { Component, OnInit } from '@angular/core';
import { LoggerService } from '@nx-playground/core';

@Component({
  selector: 'nx-playground-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private logger: LoggerService
  ) { }

  ngOnInit(): void {
    this.logger.log('Hi!');
  }

}
