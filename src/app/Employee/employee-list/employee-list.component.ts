import { HttpErrorResponse } from '@angular/common/http';
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
  form: any;
  
constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private modalService: BsModalService,private toastrService:ToastrService){}
    ngOnInit(): void {
      this.EmployeeModel.projectCode=localStorage.getItem('ProjectCode')||'';
      this.EmployeeModel.projectName=localStorage.getItem('ProjectName')||''
    
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
      this.AJESservice.GetPositions(this.EmployeeModel.familyCode).subscribe((data)=>  {
      this.Postions=data;
      this.ngxService.stop();
     });
   }

   GetAJESEmployee(){
    if (this.EmployeeModel.empType=="A"){
     if (this.EmpCode==undefined){
      this.toastrService.info("Enter Employee Code");
      return;
    }
  }
    this.ngxService.start();
    this.AJESservice.GetAJESEmployee(this.EmpCode).subscribe({ 
      next:data=>{
           
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
      },
          error:(error:HttpErrorResponse)=>{
          this.toastrService.error(error.error);
          this.ngxService.stop();
          }
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
        else{
             this.EmployeeModel.empCode="";
        }
      }

       SaveEmployee(form:NgForm)
       {
        this.ngxService.start();
        if (this.EmployeeModel.empType=="A")
        {
           var empcodeCONTROL =document.getElementById('EmpCode') as HTMLInputElement;
           this.EmployeeModel.empCode=empcodeCONTROL.value; 
        }
        
        if (this.EmployeeModel.empType=="S")
        {

            var JobCategory=document.getElementById('familyCode') as HTMLSelectElement;
            this.EmployeeModel.familyName=JobCategory.options[JobCategory.selectedIndex].text;
            
            var postions=document.getElementById('postions') as HTMLSelectElement;
            this.EmployeeModel.jobTitle=postions.options[postions.selectedIndex].text;
            
        

        }
        
        this.AJESservice.AddEmployee(this.EmployeeModel).subscribe({
          next:res=>{
          form.reset();
       
           this.toastrService.success("Employee Added Successfully");
           this.GetEmployeeList(); 
           this.ngxService.stop();
          },
          error:(error:HttpErrorResponse)=>{
            this.toastrService.error(error.error + " " +  error.status.toString());
           this.ngxService.stop();
            
          
          }
         
        });
      
       }

      }


