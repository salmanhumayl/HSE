import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 bsModalRef?: BsModalRef;
  Projects:any[];
  Employees:any[];
  projectcode:string;
  EmpID:number;
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

    public openModelHistory(empid:number,template :TemplateRef<any>)
    {
      
     this.EmpID=empid;
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


public openModelAssignedTraining(empid:number,template :TemplateRef<any>)
    {
      
     this.EmpID=empid;
     this.bsModalRef=this.modalService.show(template,{
      class:'modal-lg',
       backdrop: 'static',
       keyboard: false,
       ignoreBackdropClick: true 
     });
   
    }

public openModelOpenTraining(empid:number,template :TemplateRef<any>)
    {
      
     this.EmpID=empid;
     this.bsModalRef=this.modalService.show(template,{
      class:'modal-xl',
       backdrop: 'static',
       keyboard: false,
       ignoreBackdropClick: true 
     });
   
    }

    public openModelTransfer(empid:number,template :TemplateRef<any>)
    {
    
     this.EmpID=empid;
     this.bsModalRef=this.modalService.show(template,{
      class:'modal-xl',
       backdrop: 'static',
       keyboard: false,
       ignoreBackdropClick: true 
     });
   
    }
}

// class:'modal-lg',
// class:'modal-sm',