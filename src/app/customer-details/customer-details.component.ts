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
data1:any
display;
isCustomerDetails = false;
isCustomerOrder = false;
isEditCustomer = false;
currentCustomerOrderDetails=[];
currentEditCustomer=[];

  constructor(private router:Router , private _activatedRouter:ActivatedRoute ) { }

  ngOnInit(): void {
    this._activatedRouter.queryParams.subscribe((data: any)=>{
      this.data1=JSON.parse(data.data);
      console.log("ABSD",data);
      (data.showTab == "firstName")?this.isCustomerDetails = true:this.isCustomerOrder = true;
      this.currentCustomerOrderDetails = this.data1;
    })
    this.customers=customerdata; 
    console.log(this.customers); 
   // this.data1 = data[(parseInt(this._activatedRouter.queryParams['_value'].id,10) - 1)];   
}

CustomerOrder(){
 
  this.router.navigate(['customer-orders'],
  {
    queryParams:{
      data:JSON.stringify(this.data1)
    }
  });
}

EditCustomer(){
  this.router.navigate(['edit-customer']);
}
  
}
