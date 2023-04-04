import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { pathToArray } from 'graphql/jsutils/Path';
import { Employee } from '../models/Employee';

const get_employee_by_id = gql`
  query GetEmployeeByID($getEmployeeByIdId: ID!) {
    getEmployeeByID(id: $getEmployeeByIdId) {
      id
      first_name
      last_name
      email
      gender
      salary
    }
  }
`;

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css'],
})
export class ViewEmployeeComponent implements OnInit {
  employee!: Employee;

  constructor(private apollo: Apollo, private router: Router) {}
  ngOnInit(): void {
    const path = this.router.url;
    const id = path.replace("/view/", "")
    
    this.apollo
      .watchQuery<any>({
        query: get_employee_by_id,
        variables: {
          "getEmployeeByIdId":id
        }
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(loading);
        this.employee = data.getEmployeeByID;
      });
  }
}
