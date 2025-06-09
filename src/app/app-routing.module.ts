import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { EmployeeDetailComponent } from './Employee/employee-detail/employee-detail.component';
import { RegisterComponent } from './ProjectRegister/register/register.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { OpensTrainingComponent } from './TrainingAssignment/opens-training/opens-training.component';
import { ConsolidateRegisterComponent } from './ProjectRegister/consolidate-register/consolidate-register.component';
import { TrainingComponent } from './Setup/training/training.component';
import { MatrixComponent } from './Setup/matrix/matrix.component';
import { LoginComponent } from './login/login/login.component';
import { AppComponent } from './app.component';
import { LogoutComponent } from './logout/logout/logout.component';

const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'allprojects',component:ConsolidateRegisterComponent},
  {path:'register',component:RegisterComponent},
  {path:'employeelst',component:EmployeeListComponent},
  {path:'opentrainings/:empid',component:OpensTrainingComponent},
  {path:'lsttrainings',component:TrainingComponent},
  {path:'matrix',component:MatrixComponent},
  {path:'logout',component:LogoutComponent},
  {path:'**',redirectTo:'login',pathMatch:'full'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
