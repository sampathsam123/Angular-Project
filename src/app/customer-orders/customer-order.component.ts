import { Component, Input, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import {map} from  'rxjs';
import { HttpClient } from '@angular/common/http';
import data from 'src/customers.json';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
data1:any ;
customers: any;
item;
selectedTotalCost: number = 0;
@Input() orderDetails: any;

  constructor( private router:Router, private htp:HttpClient, private _activatedRouter:ActivatedRoute) { }

  ngOnInit() {
  console.log("Order Details", this.orderDetails);
  this.customers= this.orderDetails;
  
//   this.customers = data[(parseInt(this._activatedRouter.queryParams['_value'].id)-1)];
//   this.customers.orders.map((e) => {
//     this.selectedTotalCost += e.itemCost;
//   });
 
// console.log(this.customers);

//  this.customers.map((customer) => {
//      customer['totalCost'] = 0;
//     if (customer?.orders) {
//     customer.orders.map((order) => {
//      customer['totalCost'] += order.itemCost;
//      console.log(this.totalCost)
//       });
//     }
//  });



  }
  totalCost(totalCost: any) {
    throw new Error('Method not implemented.');
  }

  

CustomerDetails(){
  this.router.navigate(['customer-details'],{
    queryParams: {
      data:JSON.stringify(this.data1)
      }
  });

}
EditCustomer(){
  this.router.navigate(['edit-customer'])
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
  


