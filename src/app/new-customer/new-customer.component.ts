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

  @Input() CustomerForm : Customer ={
    id: undefined,
    firstName: undefined,
    lastName: '',
    gender: '',
    address: undefined,
    string: undefined,
    city: '',
    state: {
      abbreviation: '',
      name: ''
    },
    abbreviation: '',
    name: '',
    orders: [{
      productName: '',
      itemCost: 0,
  }]  ,
    latitude: 0,
    longitude: 0
  }
customerdata;
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
  }
 
    
  }





