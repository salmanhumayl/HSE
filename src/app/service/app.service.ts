import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AJESService {

  private domain :string | undefined;

  constructor(private _http:HttpClient) {
    //this.domain="http://ajes-webapp2.ajes.ae:4223/";
      
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

    return this._http.get<any>(this.domain + "api/Project/GetProject" ); //Route Parameter 
    
  }
  
}
