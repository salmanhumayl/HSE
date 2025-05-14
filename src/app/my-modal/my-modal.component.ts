import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html'
})
export class MyModalComponent {
  constructor(public bsModalRef: BsModalRef) {}
}
