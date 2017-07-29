import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetdevicedataService {

  constructor(private http:Http) { 

  }
  getDeviceData(): Observable<any[]>{

    return this.http.get('https://devicemanagement.herokuapp.com/api/deviceData')
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    // let deviceData;
    // console.log("deviceDataCalled");
    // this.http.request('/api/deviceData').subscribe((res: Response) => {
    //   deviceData=res.json();
      
    // });
    // return deviceData
    // // return this.http.get(`/api/deviceData`).map((res:Response) => {res.json();console.log(res.json())});
  }

}
