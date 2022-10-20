import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

customersdata: any;
  constructor(private _router:Router , private _activatedRouter : ActivatedRoute, private customerService : CustomerService) { }

  ngOnInit(): void {

    this.get();
  }

  get(){
    this.customerService.get().subscribe((data)=>{
      this.customersdata=data;
    })
  }
}
