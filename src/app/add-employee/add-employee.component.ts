import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { catchError, of } from 'rxjs';
import { Employee } from '../models/Employee';
import { Router } from '@angular/router';

const add_employee = gql`
  mutation AddEmployee(
    $firstName: String!
    $lastName: String!
    $email: String!
    $gender: String!
    $salary: Float!
  ) {
    addEmployee(
      first_name: $firstName
      last_name: $lastName
      email: $email
      gender: $gender
      salary: $salary
    ) {
      message
      status
      error
      employee {
        id
        first_name
        last_name
        email
        gender
        salary
      }
    }
  }
`;

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  newEmployee: Employee[] = [];
  error: any;
  tempEmployee: any;

  constructor(private apollo: Apollo, private router: Router) {}

  onAddEmployeeButtonClick() {
    this.addNewEmployee();
  }

  //add Listing
  employeeForm: Employee = {
    id: '',
    first_name: '',
    last_name: '',
    salary: 0,
    gender: '',
    email: '',
  };

  //addlicting
  addNewEmployee() {
    this.apollo
      .mutate<any>({
        mutation: add_employee,
        variables: {
          "firstName": this.employeeForm.first_name,
          "lastName": this.employeeForm.last_name,
          "email": this.employeeForm.email,
          "gender": this.employeeForm.gender,
          "salary": this.employeeForm.salary,
        },
      })
      .pipe(
        catchError((error) => {
          this.error = error.message;
          if (error.networkError.status === 400)
            this.error = 'Something went wrong (Bad Request)';
          return of({ error: error });
        })
      )
      .subscribe((data) => {
        this.tempEmployee = data;
        this.newEmployee = this.tempEmployee.data.addEmployee;
        console.log(this.newEmployee);
        window.location.href = '/list';
      });
  }
}
