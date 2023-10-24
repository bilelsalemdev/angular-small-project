import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionEmployeeRoutingModule } from './gestion-employee-routing.module';

import { GestionEmployeeComponent } from './gestion-employee.component';
import { ListComponent } from './list/list.component';
import { EmployeeService } from '../../services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentService } from '../../services/department.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
@NgModule({
  declarations: [
    GestionEmployeeComponent,
    ListComponent,
    AddComponent,
  ],
  imports: [
    CommonModule,
    GestionEmployeeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EmployeeService, DepartmentService]
})
export class GestionEmployeeModule {


}