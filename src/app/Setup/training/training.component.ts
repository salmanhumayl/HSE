import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AJESService } from 'src/app/service/app.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
 bsModalRef?: BsModalRef;
  lstTraining:any[]=[];
  
constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private modalService: BsModalService){}
    ngOnInit(): void {
        
      this.GetTrainings();
    
    }
  
    GetTrainings(){
      this.ngxService.start();
     this.AJESservice.GetTraining().subscribe((data)=>  {
      this.lstTraining=data;
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

}
