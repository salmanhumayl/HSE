import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { loginmodel } from 'src/app/models/loginmodel';
import { AJESService } from 'src/app/service/app.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

   LoginModel:loginmodel=new loginmodel();
  Projects:any[];


   constructor(private AJESservice:AJESService,private modelService:BsModalService,
               private ngxService:NgxUiLoaderService,private router:Router,
               public authService: AuthenticationService,private msg:MessengerService,private toastrService:ToastrService){}

ngOnInit(): void {
        
     this.GetProject();
    
    }

    GetProject(){
        this.AJESservice.GetProject().subscribe((data)=>  {
        this.Projects=data;
    });
   }

  onSubmitlogin(form:NgForm){
    this.ngxService.start();

    this.AJESservice.Login(this.LoginModel).subscribe((response:any)=>{
    
      if (response.token!=null){
        //this.authService.storeTokenvalidity(response.expiration);
        this.authService.storeToken(response.token);
        localStorage.setItem('Name', response.name);
        localStorage.setItem('Role', response.role);
        localStorage.setItem('ProjectCode', response.projectCode);
        localStorage.setItem('ProjectName', response.projectName);
        
        this.msg.isLoggedIn$.next(true);
        this.msg.isWelComeName$.next(response.name);
        this.msg.$Role.next(response.role);
        this.msg.$projectCode.next(response.projectCode);
        this.msg.$ProjectName.next(response.projectName);
            this.router.navigate(['/dashboard']);  
        
        this.ngxService.stop();
       }
       else{
       // alert("Invalid Credentials");
         this.toastrService.error(response.message);
         
          
         form.reset();
         this.ngxService.stop();
       }
       });


    
  }

}

