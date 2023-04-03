import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Employee } from '../models/Employee';

const get_employees = gql `query {
  getEmployees {
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
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees : Employee[] = []
  title = '101340403_comp3133_assig2';
  constructor (private apollo: Apollo){}
  ngOnInit(): void {
    this.apollo.watchQuery<any>({
      query: get_employees
    }).valueChanges
    .subscribe(({data, loading}) => {
      console.log(loading);
      this.employees = data.getEmployees; 
    })
  }
  
}
