import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Employee } from 'src/app/models/Employee';
import { SearchEmp } from 'src/app/models/searchEmp';
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
familyCode:string;

EmpView:SearchEmp=new SearchEmp();
EmployeeModel:Employee =new Employee();
EmpCode:string;
IsSearchButtonDisabled:boolean;
IsEmpCodeTextDisabled:boolean;
  
constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private modalService: BsModalService,private toastrService:ToastrService){}
    ngOnInit(): void {
       this.EmployeeModel.projectCode=localStorage.getItem('ProjectCode')||'';
      this.GetJobCategory();
      this.GetProject();
      this.GetEmployeeList();
      this.IsSearchButtonDisabled=true;
      this.IsEmpCodeTextDisabled=true;
     
    }
  
    GetEmployeeList(){
      
      this.ngxService.start();
      this.AJESservice.GetEmployeeList(localStorage.getItem('ProjectCode')||'').subscribe((data)=>  {
      this.Employees=data;
       this.EmployeeModel.projectCode=localStorage.getItem('ProjectCode')||'';
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
      this.AJESservice.GetPositions(this.EmpView.familyCode).subscribe((data)=>  {
      this.Postions=data;
      this.ngxService.stop();
     });
   }

   GetAJESEmployee(){
   
    this.ngxService.start();
    this.AJESservice.GetAJESEmployee(this.EmpCode).subscribe((data)=>  {
    this.EmpView=data;

    if (this.EmpView.projectCode!=localStorage.getItem('ProjectCode'))
    {
      this.ngxService.stop();
      this.toastrService.info("The selected employee is not part of your assigned project");
      
      return ;
    }
    this.EmployeeModel.empCode=this.EmpView.empCode
    this.EmployeeModel.empName=this.EmpView.empName;
    this.EmployeeModel.projectCode=localStorage.getItem('ProjectCode')||'';
    this.EmployeeModel.projectName=localStorage.getItem('ProjectName')||''
    
    this.EmployeeModel.familyCode=this.EmpView.familyCode;
    this.EmployeeModel.familyName=this.EmpView.familyName;
    this.EmployeeModel.jobCode=this.EmpView.designationCode;
   
    this.EmployeeModel.jobTitle=this.EmpView.jobtitle;
    this.GetPostions()
 
   
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

      

       getEmpType(){
      
        this.IsSearchButtonDisabled=true;
        this.IsEmpCodeTextDisabled=true;
        if (this.EmployeeModel.empType=="A"){
            this.IsSearchButtonDisabled=false;
            this.IsEmpCodeTextDisabled=false;
        }
      }

       SaveEmployee(form:NgForm)
       {

        this.AJESservice.AddEmployee(this.EmployeeModel).subscribe((response)=>{
          form.reset();
          this.toastrService.success("Employee Added Successfully");
          this.GetEmployeeList(); 
         
         
        });
      
       }

      }


