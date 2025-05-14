import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { EmployeeDetailComponent } from './Employee/employee-detail/employee-detail.component';
import { RegisterComponent } from './ProjectRegister/register/register.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { OpensTrainingComponent } from './TrainingAssignment/opens-training/opens-training.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'empDetail',component:EmployeeDetailComponent},
  {path:'register',component:RegisterComponent},
  {path:'employeelst',component:EmployeeListComponent},
  {path:'opentrainings/:empid',component:OpensTrainingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
