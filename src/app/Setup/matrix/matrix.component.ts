import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Matrix } from 'src/app/models/Matrix';
import { TrainingMatrix } from 'src/app/models/TrainingMatrix ';
import { AJESService } from 'src/app/service/app.service';

//declare const $:any;

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
 bsModalRef?: BsModalRef;
   trainingData: TrainingMatrix[] = [];
   matrixModel:Matrix=new Matrix();

   trainings:any[]=[];
   Category:any[];
   Postions:any[];
   JobCategory:string;
   trianinType:string;

  
constructor(private AJESservice:AJESService,private ngxService:NgxUiLoaderService,private modalService: BsModalService){}
    ngOnInit(): void {
       this.GetJobCategory();
      this.getTrainingMatrix();
    
    }

        getTrainingMatrix(){
      this.ngxService.start();
     this.AJESservice.GetTrainingMatrix().subscribe((data)=>  {
      this.trainingData=data;
      console.log(this.trainingData);
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
     this.AJESservice.GetPositions(this.matrixModel.FamilyCode).subscribe((data)=>  {
      this.Postions=data;
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
            this.bsModalRef=undefined;
          }

           Save()
       {
       
            var JobCategory=document.getElementById('JobCategory') as HTMLSelectElement;
            this.matrixModel.FamilyName=JobCategory.options[JobCategory.selectedIndex].text;
            
            var postions=document.getElementById('postions') as HTMLSelectElement;
            this.matrixModel.JobTitle=postions.options[postions.selectedIndex].text;
            
            
            this.AJESservice.AddTrainingMatrix(this.matrixModel).subscribe((response)=>{
            this.getTrainingMatrix();
            this.matrixModel.FamilyCode='';
            this.matrixModel.JobCode='';
            this.matrixModel.trainingType='';
         //   this.matrixModel=new Matrix();
            }); 
       
        }
      
       

          

}
