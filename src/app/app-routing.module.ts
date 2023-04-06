import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AuthenticationGuard } from './authentication.guard';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {path: 'list', component:EmployeeListComponent, canActivate: [AuthenticationGuard]},
  {path: 'add', component:AddEmployeeComponent, canActivate: [AuthenticationGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'view/:id', component:ViewEmployeeComponent, canActivate: [AuthenticationGuard]},
  {path: 'edit/:id', component:AddEmployeeComponent, canActivate: [AuthenticationGuard]},
  {path: '**', redirectTo: 'list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
