import { Component, Input, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-remaining-tranings',
  templateUrl: './remaining-tranings.component.html',
  styleUrls: ['./remaining-tranings.component.css']
})
export class RemainingTraningsComponent implements OnInit{
  Data:any[] ;
  
  @Input()
  EmpID:number;
  @Input()
  jobCode:string
  
  constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService){}
  ngOnInit(): void {
      
    this.GetRemainingTraining();
  
  }

  
  GetRemainingTraining(){
    this.ngxService.start();
    //alert(this.jobCode + "salman");
   // alert(this.EmpID + "salman");
    this.AJESservice.GetRemainingTraining(this.jobCode,this.EmpID).subscribe((response)=>  {
      this.Data=response;
      this.Data=response;
      this.ngxService.stop();
    });

  }

}
