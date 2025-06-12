import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { TrainingMatrix } from '../models/TrainingMatrix ';
import { SearchEmp } from '../models/searchEmp';
import { Employee } from '../models/Employee';
import { Matrix } from '../models/Matrix';
import { EmployeeTraining } from '../models/EmployeeTraining';
import { loginmodel } from '../models/loginmodel';
import { Schedule, trainingSchedule } from '../models/trainingSchedule';

@Injectable({
  providedIn: 'root'
})
export class AJESService {

  private domain :string | undefined;

  constructor(private _http:HttpClient) {
  this.domain="http://ajes-webapp2.ajes.ae:4225/";
      
 // this.domain="https://localhost:7047/";
   }

Login (model :loginmodel) :Observable<any> {
 // alert(JSON.stringify(model));
  return this._http.post<any>(this.domain + "api/Authenticate/login",model)

}



  GetEmployeeHistory(employeeId:number):Observable<any>{

    
    return this._http.get<any>(this.domain + "api/Employee/GetEmployeeHistory/" + employeeId  ); //Route Parameter 
    
  }

  GetEmployeeList(projectcode:string):Observable<any>{

    return this._http.get<any>(this.domain + "api/Employee/GetEmployeeList/" + projectcode  ); //Route Parameter 
    
  }


  GetEmployeeOpenTrainings(employeeId:number):Observable<any>{

    return this._http.get<any>(this.domain + "api/Employee/GetEmployeeOpenTrainings/" + employeeId  ); //Route Parameter 
    
  }
  
  GetRemainingTraining(JobCode:string,employeeId:number):Observable<any>{

    return this._http.get<any>(this.domain + "api/Employee/GetRemainingTraining/" + JobCode + "/" + employeeId ); //Route Parameter 
    
  }

  GetProject():Observable<any>{

    return this._http.get<any>(this.domain + "api/Project/GetProject" );  
    
  }

  GetTraining():Observable<any[]>{

    return this._http.get<any[]>(this.domain + "api/Training/GetTraining" );  
    
  }
  
   GetJobCategory():Observable<any>{

    return this._http.get<any>(this.domain + "api/Designation/GetJobCategory" );  
    
  }
  
   GetPositions(categorycode:string):Observable<any>{

    return this._http.get<any>(this.domain + "api/Designation/GetPositions/" + categorycode );  
    
  }
  GetTrainingMatrix():Observable<TrainingMatrix[]>{

    return this._http.get<TrainingMatrix[]>(this.domain + "api/Training/GetTrainingMatrix");  
    
  }

    GetTrainingsByType(type:string):Observable<any[]>{

     return this._http.get<any[]>(this.domain + "api/Training/GetTrainingsByType/" + type );  
    
  }
  
    EmployeeTrainingSchedule(trainingid:number):Observable<trainingSchedule[]>{

     return this._http.get<trainingSchedule[]>(this.domain + "api/Employee/EmployeeTrainingSchedule/" + trainingid );  
    
  }

  

  
    GetEmployeeTrainingByType(jobcode:string,empid:number,trainingtype:string):Observable<any[]>{

     return this._http.get<any[]>(this.domain + "api/Employee/GetEmployeeTrainingByType/" + jobcode + "/"  + empid + "/" + trainingtype);  
    
  }

GetAJESEmployee(empcode:string):Observable<SearchEmp>{

    return this._http.get<SearchEmp>(this.domain + "api/Employee/GetAJESEmployee/" + empcode );  
    
  }

 AddEmployee(empmodel:Employee):Observable<HttpResponse<any>>{
  
  return this._http.post<any>(this.domain + "api/Employee/AddEmployee",empmodel )
 } 
  AddTrainingMatrix(matrixmodel:Matrix){
  return this._http.post<string>(this.domain + "api/Training/AddTrainingMatrix",matrixmodel )
 } 
  AssignedTraining(trainingmodel:EmployeeTraining[]){
   
  return this._http.post<string>(this.domain + "api/Employee/AddEmployeeTraining",trainingmodel )
 } 

 UpdateMandatory(id:number,isMandatory:boolean){
  return this._http.get(this.domain + "api/Training/UpdateMandatory/" + id +"/" + isMandatory )
 } 


 UpdateTrainingStatus(trainingid:number,rDate:string,hours:number):Observable<any>{

  return this._http.get<any>(this.domain + "api/Employee/UpdateTrainingStatus/" + trainingid + "/" + rDate + "/" +hours);
  
}

//trainingSchedule[]
CreateTrainingSchedule(ScheduleList:Schedule):Observable<string>{
 //alert(JSON.stringify(ScheduleList));
  const headers = {
    'Content-Type':'application/json'};

  return this._http.post<string>(this.domain + "api/Training/CreateTrainingSchedule",ScheduleList,{headers});
}
  
 

}
