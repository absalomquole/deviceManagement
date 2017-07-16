import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class MailserviceService {

  constructor(private http : Http) { 

  }
  getNew(){

    console.log("hey service called");
    console.log(this.http.get('/api/sendnewmail'))
    return this.http.get('/api/sendnewmail');
  }

}
