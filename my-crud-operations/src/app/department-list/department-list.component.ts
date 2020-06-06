import { Component, OnInit } from '@angular/core';
import { Department } from './department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departmentObject : Department ;
  constructor() { }
  ngOnInit(): void {
    this.departmentObject= new Department(1,"Accounting",5);
  }
  
}
