import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetdevicedataService {

  constructor(private http:Http) { 

  }
  getDeviceData(){
    let deviceData;
    console.log("deviceDataCalled");
    this.http.request('/api/deviceData').subscribe((res: Response) => {
      deviceData=res.json();
      
    });
    return deviceData
    // return this.http.get(`/api/deviceData`).map((res:Response) => {res.json();console.log(res.json())});
  }

}
