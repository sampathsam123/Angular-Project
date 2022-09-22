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
  abbreviation: string;
  name: string;
  orders: [{
    productName: string,
    itemCost: number
  }]
  latitude: number;
  longitude: number;
};
@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})

export class CardViewComponent implements OnInit {
  public customer: any[];
  search1 = '';
  page = '';
  customers: customerInterface[] = customerData;
  customersdata;

  constructor(private _router: Router, private _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void { }
  ViewOrder(data: any) {
    this._router.navigate(['customer-order'], {
      queryParams: {
        ...data
      }
    });
    console.log(data);
  }
  EditCustomer() {
    this._router.navigate(['edit-customer', this.customers])
  }

}
