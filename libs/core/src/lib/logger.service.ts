import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  public log(value: any) {
    console.log(value);
  }
}
