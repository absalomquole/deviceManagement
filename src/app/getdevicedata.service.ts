import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetdevicedataService {

  constructor(private http:Http) { 

  }
  // getDeviceData(){
  //   let deviceData;
  //   console.log("deviceDataCalled");
  //   this.http.request('/api/deviceData').subscribe((res: Response) => {
  //     deviceData=res.json();
      
  //   });
  //   return deviceData
  //   // return this.http.get(`/api/deviceData`).map((res:Response) => {res.json();console.log(res.json())});
  // }
  getDeviceData(): Observable<any[]> {
    return this.http.get("https://devicemanagement.herokuapp.com/api/deviceData")
    // ...and calling .json() on the response to return data
    .map((res:Response) => res.json())
    //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
