import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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
  
constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private modalService: BsModalService){}
    ngOnInit(): void {
      this.GetJobCategory();
      this.GetProject();
      this.GetEmployeeList();
      this.IsSearchButtonDisabled=true;
      this.IsEmpCodeTextDisabled=true;
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
      this.AJESservice.GetPositions(this.EmpView.familyCode).subscribe((data)=>  {
      this.Postions=data;
      this.ngxService.stop();
     });
   }

   GetAJESEmployee(){
   
    this.ngxService.start();
    this.AJESservice.GetAJESEmployee(this.EmpCode).subscribe((data)=>  {
    this.EmpView=data;
    this.EmployeeModel.empCode=this.EmpView.empCode
    this.EmployeeModel.empName=this.EmpView.empName;
    this.EmployeeModel.projectCode=this.EmpView.projectCode;
    this.EmployeeModel.projectName=this.EmpView.projectName
    
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
        alert(1);
        this.IsSearchButtonDisabled=true;
        this.IsEmpCodeTextDisabled=true;
        if (this.EmployeeModel.empType=="A"){
            this.IsSearchButtonDisabled=false;
            this.IsEmpCodeTextDisabled=false;
        }
      }

       SaveEmployee(form:NgForm)
       {
        alert("SaveEmployee")
        this.AJESservice.AddEmployee(this.EmployeeModel).subscribe((response)=>{
          form.reset();
          this.GetEmployeeList(); 

        });
      
       }

      }


