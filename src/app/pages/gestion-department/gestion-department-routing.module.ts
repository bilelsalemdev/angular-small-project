import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDepartmentComponent } from './gestion-department.component';

const routes: Routes = [
  {
    path: '',
    component: GestionDepartmentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionDepartmentRoutingModule { }
