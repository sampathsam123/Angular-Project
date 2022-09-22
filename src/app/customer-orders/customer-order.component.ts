import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Observable} from 'rxjs';
import {map} from  'rxjs';
import { HttpClient } from '@angular/common/http';
import {  filter, switchMap } from 'rxjs/operators';
import data from 'src/customers.json';
import { ActivatedRoute } from '@angular/router';
import { query } from '@angular/animations';


@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
  // public _url =data;    
data1:any ;
customers: any;
totalCost=0;
item;

  constructor( private _studentService : StudentService,private htp:HttpClient,private _activatedRouter:ActivatedRoute) { }

  ngOnInit() {
  this.customers = data[(parseInt(this._activatedRouter.queryParams['_value'].id)-1)];   
 
console.log(this.customers);
  // this.customers.map((customer) => {
  //   customer['totalCost'] = 0;
  //   if (customer?.orders) {
  //     customer.orders.map((order) => {
  //       customer['totalCost'] += order.itemCost;
  //     });
  //   }
  // });


  }


}


  //  this._studentService.getStudents().subscribe(res=>{

    // this.customers.push({nam:'smapth'});
    // console.log(this.customers);
  //  });
   //return this.htp.get('https://jsonplaceholder.typicode.com/users')
   //.pipe(map((res:any)=>{return res;}))
   //this.htp.get('https://example.com/api/items').pipe(map((customerData:any) => {})).subscribe(result => {
     // console.log(result);
    //});
  


