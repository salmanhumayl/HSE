import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

import { CloseTrainingComponent } from '../close-training/close-training.component';
@Component({
  selector: 'app-opens-training',
  templateUrl: './opens-training.component.html',
  styleUrls: ['./opens-training.component.css']
})
export class OpensTrainingComponent implements OnInit {
 Data:any[] ;
  showChild=false;

  @ViewChild('childRef') CloseComponent!:CloseTrainingComponent;
  
  EmpID:any;
  EmpName:string;
  jobTitle:string;
  constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private route:ActivatedRoute){}
      ngOnInit(): void {
      this.route.paramMap.subscribe(param=>{
      this.EmpID=param.get('empid');
      this.getEmployeeHistory(this.EmpID)
      });
    }

    loadChild(mTrainingName:string,memployeeTrainingId:number){
      this.showChild=true;
      setTimeout(() =>{
         this.CloseComponent.TrainingName=mTrainingName;
         this.CloseComponent.EmployeeTrainingId=memployeeTrainingId;

     
    });
      
      
    }
  
  getEmployeeHistory(Empid:number){
    
    this.ngxService.start();
    
    this.AJESservice.GetEmployeeOpenTrainings(Empid).subscribe((response)=>  {
    
      if(response.length > 0){
        this.Data=response;
        this.EmpName=this.Data[0].empName;
        this.jobTitle=this.Data[0].jobTitle;
      }
      this.Data=response;
      this.ngxService.stop();
    });

  }

}
