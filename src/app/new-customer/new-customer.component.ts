import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  FirstName;
  LastName;
  id;
  gender; city; state;
  salary;

  response;
  constructor(private _router: Router, private _activatedRouter: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getCustomers();
  }
  saveCustomer(empForm: any) {
    console.log(empForm);
  }

  save(){
    console.log("entered");
    var employee = {"name":this.FirstName+this.LastName,"salary":this.salary};
    console.log(employee);
    this.studentService.saveCustomer(employee).subscribe(data=>{
      console.log(data);
      this.response = data;
      console.log(this.response);
    });
    
  }

}
