import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxUiLoaderModule,NgxUiLoaderRouterModule } from 'ngx-ui-loader';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyModalComponent } from './my-modal/my-modal.component';
import { TopnavComponent } from './Shared/topnav/topnav/topnav.component';
import { SidebarComponent } from './Shared/sidebar/sidebar/sidebar.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { EmpHistoryComponent } from './Employee/History/emp-history/emp-history.component';
import { EmployeeDetailComponent } from './Employee/employee-detail/employee-detail.component';
import { RegisterComponent } from './ProjectRegister/register/register.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';

import { AssignTrainingComponent } from './TrainingAssignment/assign-training/assign-training.component';
import { OpensTrainingComponent } from './TrainingAssignment/opens-training/opens-training.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CloseTrainingComponent } from './TrainingAssignment/close-training/close-training.component';
import { CustomDateControlComponent } from './FormControl/custom-date-control/custom-date-control.component';
import { TransferOutComponent } from './Transfer/transfer-out/transfer-out.component';
import { ConsolidateRegisterComponent } from './ProjectRegister/consolidate-register/consolidate-register.component';
import { RemainingTraningsComponent } from './Employee/History/remaining-tranings/remaining-tranings.component';
import { TrainingComponent } from './Setup/training/training.component';
import { MatrixComponent } from './Setup/matrix/matrix.component';


@NgModule({
  declarations: [
    AppComponent,
    MyModalComponent,
    TopnavComponent,
    SidebarComponent,
    DashboardComponent,
    EmpHistoryComponent,
    EmployeeDetailComponent,
    RegisterComponent,
    EmployeeListComponent,
    AssignTrainingComponent,
    OpensTrainingComponent,
    CloseTrainingComponent,
    CustomDateControlComponent,
    TransferOutComponent,
    ConsolidateRegisterComponent,
    RemainingTraningsComponent,
    TrainingComponent,
    MatrixComponent
  ],
  imports: [
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    ModalModule.forRoot()
  ],
  providers: [{provide: LocationStrategy,useClass:HashLocationStrategy},],
  bootstrap: [AppComponent]
})
export class AppModule { }
