import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import customerdata from 'src/customers.json';
import { CustomerService } from '../customer.service';


@Component({               //animations
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
 customers;
data1:any;
customersdata;
display;
isCustomerDetails = false;
isCustomerOrder = false;
isEditCustomer = false;
currentCustomerOrderDetails=[];
currentEditCustomer=[];
  firstName: any;
  id: boolean;


  constructor(private router:Router , private _activatedRouter:ActivatedRoute , private http:HttpClient) { }

  ngOnInit(): void {
    this._activatedRouter.queryParams.subscribe((data: any)=>{
      console.log(data);
      //  this.firstName = data.firstName;
      //  this.id =data.id;
      this.data1=JSON.parse(data.data);
      (data.showTab == "firstName")?this.isCustomerDetails = true:this.isCustomerOrder = true;
      this.currentCustomerOrderDetails = this.data1;
    })
    
    this.customers=customerdata; 
    console.log(this.customers); 
   // this.data1 = data[(parseInt(this._activatedRouter.queryParams['_value'].id,10) - 1)];   
}

// CustomerOrder(){
//  alert();
//   this.router.navigate(['customer-orders'],
//   {
//     queryParams:{
//       data:JSON.stringify(this.data1)
//     },skipLocationChange:true
//   });
// }

EditCustomer(){
  this.router.navigate(['edit-customer']);
}
customerDetails(){

  this.isCustomerOrder = false; 
  this.isCustomerDetails = true; 
  this.isEditCustomer = false;
}
customerOrder(){
  this.isCustomerOrder = true; 
  this.isCustomerDetails = false; 
  this.isEditCustomer = false
}
editCustomer(){ 

  this.isCustomerOrder = false; 
  this.isEditCustomer = true ; 
  this.isCustomerDetails=false 
}
  
}
