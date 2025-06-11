import { Component, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
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


constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private modalService: BsModalService,private toastrService:ToastrService){}
 


 filtertraining(){

  if (this.empTrainings.length > 0 )
  {
       this.toastrService.info("Please save the assinged training befor proceeding");
       return;
  }
 this.ngxService.start();
     this.AJESservice.GetEmployeeTrainingByType(this.jobCode,this.EmpID,this.Ttype).subscribe((response)=>  {
      this.Data=response;
      if (this.Data.length==0 && this.Ttype!="X")
      {
        this.toastrService.info("Training Matrix configuration is missing for the selected position");
      }
      
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
      ProjectCode:localStorage.getItem('ProjectCode')||'',
      ProjectName:localStorage.getItem('ProjectName')||''

    });
    
    
  }

  AssignedTraining(){
      // alert(JSON.stringify(this.empTrainings));
      if (this.empTrainings.length >0){

      
      this.AJESservice.AssignedTraining(this.empTrainings).subscribe((response)=>{
        this.empTrainings=[];
         this.toastrService.success("Training Assigned Successfully...");
        });
      }
  }

}
