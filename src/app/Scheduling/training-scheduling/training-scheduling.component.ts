import { Component } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { scheduled } from 'rxjs';
import { Schedule, trainingSchedule } from 'src/app/models/trainingSchedule';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-training-scheduling',
  templateUrl: './training-scheduling.component.html',
  styleUrls: ['./training-scheduling.component.css']
})
export class TrainingSchedulingComponent {
 Ttype:string;
 training:number;
 brDate:string;
 showclosing:boolean;
 Data:any[] ;
 Detail:trainingSchedule[];
 conductedby:string;
 Location:string;

 HSESchedule:Schedule=new Schedule();

  datePickerConfig:Partial<BsDatepickerConfig>

 constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private modalService: BsModalService,private toastrService:ToastrService){
  this.datePickerConfig=Object.assign({},
      {
        todayHighlight: true,
        containerClass:'theme-dark-blue',
        showWeekNumbers:false,
        dateInputFormat:'DD/MM/YYYY',
        customTodayClass:'custom-today-class'
       
        
      });


 }
  


 Gettrainings(){

     this.ngxService.start();
     this.AJESservice.GetTrainingsByType(this.Ttype).subscribe((response)=>  {
     this.Data=response;
     this.ngxService.stop();
     });

 }

 SearchEmployee(){
    this.ngxService.start();
    this.AJESservice.EmployeeTrainingSchedule(this.training).subscribe((response)=>  {
    this.Detail=response;
    this.showclosing=true;
    this.ngxService.stop();
 });
}

 CreateTrainingSchedule()
 {

    this.Detail.forEach(item =>
      {
        if (item.accNoStatus==true && this.brDate!=undefined){
         // item.scheduleOn=new Date(this.brDate);
          //item.conductedOn=new Date(this.brDate);
          //item.conductedBy=this.conductedby;
         // item.location=this.Location;
         
        }
      });

      this.HSESchedule.scheduleOn=new Date(this.brDate);
      this.HSESchedule.scheduleby="Salman";
      this.HSESchedule.conductedOn=new Date(this.brDate);
      this.HSESchedule.conductedBy="Mazhar";
      this.HSESchedule.location="AJES";
      this.HSESchedule.empTrainingSchedule=this.Detail;

       this.ngxService.start();
    
     this.AJESservice.CreateTrainingSchedule(this.HSESchedule).subscribe((data)=>  {
     
      
        this.ngxService.stop();
        this.toastrService.success("Training Detail Updated Successfully ");
        
      
    
    });


 }

checkAllCheckBox(ev: any) { // Angular 13
    
      this.Detail.forEach(x => x.accNoStatus = ev.target.checked)
     
    }

}