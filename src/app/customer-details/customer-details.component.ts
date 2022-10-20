import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';


@Component({            
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


  constructor(private router:Router , private _activatedRouter:ActivatedRoute , private http:HttpClient,private customerService: CustomerService) { }

  ngOnInit(): void {
    this._activatedRouter.queryParams.subscribe((data: any)=>{
      console.log(data);
      (data.showTab == "firstName")?this.isCustomerDetails = true:this.isCustomerOrder = true;
      if(data.showTab == "editCustomer") this.editCustomer();
    })
    // this.customers=customerdata; 
    // console.log(this.customers); 
   // this.data1 = data[(parseInt(this._activatedRouter.queryParams['_value'].id,10) - 1)];   
   this.customerService.getById(this._activatedRouter.snapshot.paramMap.get('id')).subscribe(temp => {
    this.data1 = temp;
    this.currentCustomerOrderDetails = this.data1;
    this.currentEditCustomer = this.data1;
   });
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
