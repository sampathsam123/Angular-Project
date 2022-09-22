import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

interface emp{
  userId : Number;
  id :Number;
  title : String;
  body : String; 
}


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  empList : any ;
 // empData : emp[] =empData ;

 constructor(private _employeeService :EmployeeService ) { }

  ngOnInit() {

    this._employeeService.getEmp().subscribe(res=>{
      console.log(res);
      this.empList = res;
    })
  }

}
