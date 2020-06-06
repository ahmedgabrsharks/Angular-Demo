import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'departments', component: DepartmentListComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [EmployeeListComponent, DepartmentListComponent, 
                                  NotfoundComponent];