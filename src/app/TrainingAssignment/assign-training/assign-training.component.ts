import { Component, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { EmployeeTraining } from 'src/app/models/EmployeeTraining';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-assign-training',
  templateUrl: './assign-training.component.html',
  styleUrls: ['./assign-training.component.css']
})
export class AssignTrainingComponent {
Ttype:string;
Data:any[] ;
  
  @Input()
  EmpID:number;
  @Input()
  jobCode:string
  empTrainings:EmployeeTraining[]=[];


constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private modalService: BsModalService){}
 


 filtertraining(){
 this.ngxService.start();
     this.AJESservice.GetEmployeeTrainingByType(this.jobCode,this.EmpID,this.Ttype).subscribe((response)=>  {
      this.Data=response;
      console.log(this.Data);
      this.ngxService.stop();
     });

}
  test(event:HTMLElement,matrixId:number)
  {
   // const element=event.currentTarget as HTMLElement;
    
    event.style.pointerEvents='none';
    event.style.opacity='0.5';
    event.innerText="Assigned";
    
    
  }

   Assigned(event:Event,matrixId:number)
  {
    const element=event.currentTarget as HTMLElement;
    
    element.style.pointerEvents='none';
    element.style.opacity='0.5';
    element.innerText="Assigned";
    element.className="btn btn-danger"
    
    this.empTrainings.push({
      EmpID:this.EmpID,
      MatrixID:matrixId,
      ProjectCode:"8069",
      ProjectName:"gop"

    });
    
    
  }

  AssignedTraining(){
       alert(JSON.stringify(this.empTrainings));
        this.AJESservice.AssignedTraining(this.empTrainings).subscribe((response)=>{

        });
   
  }

}
