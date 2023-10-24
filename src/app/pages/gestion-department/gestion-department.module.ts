import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionDepartmentRoutingModule } from './gestion-department-routing.module';
import { GestionDepartmentComponent } from './gestion-department.component';
import { ListComponent } from './list/list.component';
import { DepartmentService } from 'src/app/services/department.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionDepartmentComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    GestionDepartmentRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    DepartmentService
  ]


})
export class GestionDepartmentModule { }
