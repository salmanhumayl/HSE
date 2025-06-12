
export class trainingSchedule {
    empCode: string;
    eid:string;
    empName:string;
    empType:string;
    jobTitle:string
    projectName:string;
    accNoStatus:boolean;
   // conductedOn:Date;
    //scheduleOn:Date;
    //conductedBy:string;
    //location:string;
    //remarks:string;
  
  }
  
  export class Schedule{
    scheduleOn:Date;
    scheduleby:string;
    conductedOn:Date;
    conductedBy:string;
    location:string;
    remarks:string;
   
    empTrainingSchedule:trainingSchedule[];

  }