import { Component, Input, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-emp-history',
  templateUrl: './emp-history.component.html',
  styleUrls: ['./emp-history.component.css']
})
export class EmpHistoryComponent implements OnInit{
  Data:any[] ;
  
  @Input()
  EmpID:number;
  EmpName:string;
  jobTitle:string;
  constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService){}
  ngOnInit(): void {
      
    this.getEmployeeHistory();
  
  }

  
  getEmployeeHistory(){
    this.ngxService.start();
    this.AJESservice.GetEmployeeHistory(this.EmpID).subscribe((data)=>  {
      this.Data=data;
      this.EmpName=this.Data[0].empName;
      this.jobTitle=this.Data[0].jobTitle;
      this.ngxService.stop();
    });

  }

}
