import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MyModalComponent } from './my-modal/my-modal.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService,private toastrService:ToastrService) {}

  openModal() {
    this.bsModalRef = this.modalService.show(MyModalComponent);
  }

  
 public openModel(template :TemplateRef<any>)
 {
  
  this.bsModalRef=this.modalService.show(template,{
    backdrop: 'static',
    keyboard: false,
    ignoreBackdropClick: true 
  });

 }

 closeModal() {
  this.toastrService.success("dasdasdds");
  this.bsModalRef?.hide() ;
}
}