import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html', 
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name = "sam";
  successclass = "text-success";
  hasError = true ;
  isSpecial = true;

  messageClass={
    "text-class": !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  }
 heighlightColor = "orange";
  
  textStyles ={
    color:"red",
    fontStyle:"italic"
  }

  binding = " ";
  onClick(){
    console.log("hello");

  }

  mybtn(value: any){
    console.log(value);
  }

  displayName =false;

  color="red";

  colors=['red','green','blue','orange'];

  @Input('parentData') public names="";
  @Output() public childEvent = new EventEmitter();

  message="Angular";
  person = {
    "firstName" : 'mega',
    "lastName" : 'sam'
  }
date = new Date();
/*
  employees =[
    {'id':1,"name":'sam','age':20},
    {'id':2,"name":'harry','age':21},
    {'id':3,'name':"pannu",'age':22},
    {'id':4,'name':'sharan','age':23}
  ]
*/

 
  constructor() { }

  ngOnInit(): void {
    
    }

  }
