import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { TrainingMatrix } from '../models/TrainingMatrix ';
import { SearchEmp } from '../models/searchEmp';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class AJESService {

  private domain :string | undefined;

  constructor(private _http:HttpClient) {
    //this.domain="http://ajes-webapp2.ajes.ae:4225/";
      
  this.domain="https://localhost:7047/";
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

  
GetAJESEmployee(empcode:string):Observable<SearchEmp>{

    return this._http.get<SearchEmp>(this.domain + "api/Employee/GetAJESEmployee/" + empcode );  
    
  }

 AddEmployee(empmodel:Employee){
  return this._http.post<string>(this.domain + "api/Employee/AddEmployee",empmodel )
 } 
  

}
