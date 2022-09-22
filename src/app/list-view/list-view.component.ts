import { HttpParams } from '@angular/common/http';
import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import customerData from 'D:/TEST/AngularTEST/src/customers.json';

interface customerInterface {
  id: Number;
  firstName: Number;
  lastName: string;
  gender: string;
  address: number, string: any;
  city: string;
  state: {
    abbreviation: string,
    name: string
  }
  orders: [{
    productName: string,
    itemCost: number
  }]
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  public customer: any[];
  total = ''
  search2 = ''
  customersdata = ''
  constructor(private _router: Router, _activated: ActivatedRoute) { }

  ngOnInit(): void {    
    this.customers.map((customer) => {
      customer['totalCost'] = 0;
      if (customer?.orders) {
        customer.orders.map((order) => {
          customer['totalCost'] += order.itemCost;
        });
      }
    });
  }
  customers: customerInterface[] = customerData;
  

  ViewsingleData(data: any) {
    this._router.navigate(['customer-details'], {
      queryParams: {
      data:JSON.stringify(data)
      }
    })
    console.log(data);
  }

  ViewOrder(data1:any){
    console.log(data1)
    this._router.navigate(['customer-order'],{
      queryParams:{
        ...data1
      }
    })
  }


}
