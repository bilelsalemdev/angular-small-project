import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public listEmployees: any[] = [];
  public departments: any[] = [];
  public selectedEmployee: any = null;
  constructor(private empService: EmployeeService) { }
  ngOnInit(): void {
    this.getEmployees();
    this.getDepartments();
  }
  displayStyle = "none";

  getEmployees(): void {
    this.empService.getEmployees().subscribe(
      (data) => {
        this.listEmployees.push(...data);
      },
      (err) => console.log(err)
    );
  }
  getDepartmentName(id: number): string {
    const department = this.departments.find(d => d.id === id);
    return department ? department.departmentName : '';
  }
  getDepartments(): void {
    this.empService.getDepartments().subscribe(
      data => {
        console.log(data);
        this.departments = data;
      },
      err => console.log(err)
    );
  }
  openEditForm(employee: any): void {
    this.selectedEmployee = employee;
    this.displayStyle = "block";
  }
  closeEditForm(): void {
    this.selectedEmployee = null;
    this.displayStyle = "none";
  }
  submitEditForm(): void {
    this.empService.updateEmployee(this.selectedEmployee.id,
      this.selectedEmployee)
      .subscribe(
        (data) => {
          this.closeEditForm();
          this.empService.getEmployees().subscribe((data) => {
          });
        },
        (err) => console.log(err)
      );
  }



  deleteEmployee(employee: any): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.empService.deleteEmployee(employee.id).subscribe(
        () => {
          console.log('Employee deleted successfully');
          const index = this.listEmployees.indexOf(employee);
          if (index !== -1) {
            this.listEmployees.splice(index, 1);
          }
        },
        (err) => console.log(err)
      );
    }
  }
}