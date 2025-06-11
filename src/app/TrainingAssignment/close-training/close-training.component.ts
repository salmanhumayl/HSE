import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-close-training',
 templateUrl: './close-training.component.html',
})
export class CloseTrainingComponent {
  TrainingName:string;
  EmployeeTrainingId:number;
  showclosing:boolean;
   brDate:string;
   nhours:number;

    datePickerConfig:Partial<BsDatepickerConfig>
    constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private toastrService:ToastrService,private router:Router){

      this.datePickerConfig=Object.assign({},
      {
        todayHighlight: true,
        containerClass:'theme-dark-blue',
        showWeekNumbers:false,
        dateInputFormat:'DD/MM/YYYY',
        customTodayClass:'custom-today-class'
       
        
      });
    }

  @Output() notify=new EventEmitter<number>();
  @Input()
  EmpID:number;

  
  
    callParent(){
     const filterOn=new Date(this.brDate).toISOString().split('T')[0];
   
    this.ngxService.start();
    this.AJESservice.UpdateTrainingStatus(this.EmployeeTrainingId,filterOn,this.nhours).subscribe((data)=>  {
      this.ngxService.stop();
      
      this.notify.emit(this.EmpID);
      
      this.toastrService.success("Training Status Update Successfully")
     this.showclosing=false;

  });
}

}

