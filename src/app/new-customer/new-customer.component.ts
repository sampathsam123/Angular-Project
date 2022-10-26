import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

   CustomerForm:Customer={
     firstName: '',
     lastName: '',
     gender: '',
     address: '',
     city: '',
     state: {
       abbreviation: '',
       name: '',
     },
     id: undefined,
     abbreviation: '',
     name: '',
     orders: [{
      productName: '',
      itemCost: '',
  }],
     latitude: '',
     longitude: ''
   };

  constructor(private _router: Router, private _activatedRouter: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {
  }
  create(){
    this.customerService.create(this.CustomerForm)
    .subscribe({
      next:(data)=>{
        this._router.navigate(['list-view']);
      },
      error:(err) => {
        console.log(err);
      }
    })
    alert("New-Customer Data Successfully Added")
  }
 
    
  }





