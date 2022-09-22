import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-employee-detials',
  templateUrl: './employee-detials.component.html',
  styleUrls: ['./employee-detials.component.css']
})
export class EmployeeDetialsComponent implements OnInit {
id;
name;
salary;
data;
response ;
  constructor(private _EmployeeService : StudentService) { }

  ngOnInit(): void {
  }
  saveCustomer(empForm: any) {
    console.log(empForm);
  }
  save(){
    var employee = {"id" : this.id , "name":this.name , "salary" :this.salary}
    this._EmployeeService.saveCustomer(employee).subscribe(Response =>{
          this.data = Response;
    })
  }
}
