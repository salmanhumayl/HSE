import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-close-training',
 templateUrl: './close-training.component.html',
})
export class CloseTrainingComponent {
  TrainingName:string;
  
    datePickerConfig:Partial<BsDatepickerConfig>
    constructor(){

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
   
      this.notify.emit(this.EmpID);
  }
}


