import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
bsModalRef?: BsModalRef;
Employees:any[];
Projects:any[];
Category:any[];
Postions:any[];
JobCategory:string;
  
constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private modalService: BsModalService){}
    ngOnInit(): void {
      this.GetProject();
      this.GetJobCategory();
      this.GetEmployeeList();
    
    }
  
    GetEmployeeList(){
      this.ngxService.start();
     this.AJESservice.GetEmployeeList("8069").subscribe((data)=>  {
      this.Employees=data;
      this.ngxService.stop();
     });
   }

    GetProject(){
      this.ngxService.start();
     this.AJESservice.GetProject().subscribe((data)=>  {
      this.Projects=data;
      this.ngxService.stop();
     });
   }

     GetJobCategory(){
      this.ngxService.start();
     this.AJESservice.GetJobCategory().subscribe((data)=>  {
      this.Category=data;
      this.ngxService.stop();
     });
   }


     GetPostions(){
      this.ngxService.start();
     this.AJESservice.GetPositions(this.JobCategory).subscribe((data)=>  {
      this.Postions=data;
      this.ngxService.stop();
     });
   }


    public openModel(template :TemplateRef<any>)
       {
         
        
        this.bsModalRef=this.modalService.show(template,{
           class:'modal-lg',
          backdrop: 'static',
          keyboard: false,
          ignoreBackdropClick: true 
        });
      
       }
   
       closeModal() {
         this.bsModalRef?.hide() ;
       }

       refresh(){
        this.GetEmployeeList();
       }

}
