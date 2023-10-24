
import { Component, OnInit } from '@angular/core';

import { DepartmentService } from 'src/app/services/department.service';

import { FormBuilder, Validators } from '@angular/forms';

@Component({

  selector: 'app-list',

  templateUrl: './list.component.html',

  styleUrls: ['./list.component.css'],

})

export class ListComponent implements OnInit {

  public departments: any[] = [];

  form: any;

  submitted: boolean = false;

  selectedDepartment: any;



  constructor(private fb: FormBuilder, private depService: DepartmentService) { }

  ngOnInit(): void {

    this.loadListDepartments();

    this.form = this.fb.group({

      departmentName: ['', Validators.required],

    });

  }



  loadListDepartments() {

    this.depService.getListDepartments().subscribe(

      (data) => {

        this.departments.push(...data);

      },

      (err) => console.log(err)

    );

  }

  onSubmit(): void {

    const departmentName = this.form.value.departmentName;

    this.depService.postDepartments({ departmentName }).subscribe(

      (newDepartment) => {

        this.depService.getListDepartments().subscribe((data) => {

          this.departments = data;

        });

      },

      (error) => { }

    );

  }

}

