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
  public data1: any;
  public customersdata;
  public display;
  public isCustomerDetails = false;
  public isCustomerOrder = false;
  public isEditCustomer = false;
  public currentCustomerOrderDetails = [];
  public currentEditCustomer = [];
  public firstName: any;
  public id: boolean;
public _router: any;


  constructor(private router: Router, private _activatedRouter: ActivatedRoute, private http: HttpClient, private customerService: CustomerService) { }

  ngOnInit(): void {
    this._activatedRouter.queryParams.subscribe((data: any) => {
      console.log(data);
      (data.showTab == "firstName") ? this.isCustomerDetails = true : this.isCustomerOrder = true;
      if (data.showTab == "editCustomer") this.editCustomer();
    })
  
    this.customerService.getById(this._activatedRouter.snapshot.paramMap.get('id')).subscribe(temp => {
      this.data1 = temp;
      this.currentCustomerOrderDetails = this.data1;
      this.currentEditCustomer = this.data1;
    });
  }


  customerDetails() {

    this.isCustomerOrder = false;
    this.isCustomerDetails = true;
    this.isEditCustomer = false;
  }
  customerOrder() {
    this.isCustomerOrder = true;
    this.isCustomerDetails = false;
    this.isEditCustomer = false
  }
  editCustomer() {

    this.isCustomerOrder = false;
    this.isEditCustomer = true;
    this.isCustomerDetails = false
  }

}
