import { HttpParams } from '@angular/common/http';
import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],

})
export class ListViewComponent implements OnInit {
  public customer: any[];
  public total = ''
  public search2 = ''
  public customersdata;
  constructor(private _router: Router, _activated: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.get();
  }
  totalCost(totalCost: any) {
    throw new Error('Method not implemented.');
  }
  get() {
    this.customerService.get().subscribe((data) => {
      this.customersdata = data;
      this.customersdata.map((customer) => {
        customer['totalCost'] = 0;
        if (customer?.orders) {
          customer.orders.map((order) => {
            customer['totalCost'] += (order.itemCost);
          });
          console.log(this.totalCost)
        }
      });
    });
  }

  ViewsingleData(data: any, showTab: string) {
    console.log(data);
    this._router.navigate(['customer-details', data.id], {
      queryParams: {
        showTab: showTab
      }
    })
    console.log(data);
  }




}
