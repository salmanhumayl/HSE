import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-consolidate-register',
  templateUrl: './consolidate-register.component.html',
  styleUrls: ['./consolidate-register.component.css']
})
export class ConsolidateRegisterComponent  implements OnInit {
 bsModalRef?: BsModalRef;
  Projects:any[];
  Employees:any[];
  projectcode:string;
  EmpID:number;
  JobCode:string;
  constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private modalService: BsModalService){}
    ngOnInit(): void {
        
     this.GetProject();
    
    }
  
  GetProject(){
      this.ngxService.start();
     this.AJESservice.GetProject().subscribe((data)=>  {
      this.Projects=data;
      this.ngxService.stop();
     });
   }

   GetEmployeeList(){
     this.ngxService.start();
     this.AJESservice.GetEmployeeList(this.projectcode).subscribe((data)=>  {
      this.Employees=data;
      console.log(this.Employees);
      this.ngxService.stop();
     });
   }

    public openModelHistory(empid:number,jobCode:string,template :TemplateRef<any>)
    {
      
     this.EmpID=empid;
      this.JobCode=jobCode;
     this.bsModalRef=this.modalService.show(template,{
      class:'modal-xl',
       backdrop: 'static',
       keyboard: false,
       ignoreBackdropClick: true 
     });
   
    }

    closeModal() {
      this.bsModalRef?.hide() ;
    }



}

// class:'modal-lg',
// class:'modal-sm',