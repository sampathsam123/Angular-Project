import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import data from 'src/customers.json';

@Component({               //animations
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
 customers;
data1:any
display

  constructor(private _router:Router , private _activatedRouter:ActivatedRoute ) { }

  ngOnInit(): void {
    this._activatedRouter.queryParams.subscribe((data)=>{
      this.data1=JSON.parse(data['data'])
    })
    this.customers=data; 
    console.log(this.customers); 
   // this.data1 = data[(parseInt(this._activatedRouter.queryParams['_value'].id,10) - 1)];   

}
  
}
