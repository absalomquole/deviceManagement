import { Component } from '@angular/core';
import {MailserviceService} from './mailservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MailserviceService]
})
export class AppComponent {
  name:String;
  items:any;
  isTrue:Boolean;
  vay:any;
  veryberry:String;
  constructor(private _MailserviceService: MailserviceService){
    
    this.vay=_MailserviceService.getNew();
    console.log(this.vay);
    console.log("const called");
    this.isTrue=false;
    this.name = 'default';
    this.items=[
      { name:"shubha",class:"we"},
      { name:"shubha32",class:"we234"},
      { name:"shubha64",class:"we756"},
      { name:"shubha73",class:"we534"},
      { name:"s234hubha",class:"we23"}];
   
  }
    ngOnInit(){
      console.log("const2 called");
    }
    ngOnChanges(){
      console.log("const3 called");
    }
    veryBerry="haha";
    newClickReg(a:String):void{
        this.name=a;
    }
    newClickwe(her:any):void{
      her.style.color="red";
    }


 }
