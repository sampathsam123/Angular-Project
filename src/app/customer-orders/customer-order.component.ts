import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
  data1: any;
  customerdata: any;
  item;
  selectedTotalCost: number = 0;
  @Input() orderDetails: any;

  constructor(private router: Router,
    private _activatedRouter: ActivatedRoute,
    private customerService: CustomerService) { }

  ngOnInit() {
  
    this._activatedRouter.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    })
  }

  getById(id: number) {
    this.customerService.getById(id).subscribe((data1: Customer) => {
      this.customerdata = data1;
      this.customerdata.orders.map((e)=>{
        this.selectedTotalCost +=e.itemCost;
      })
    })
  }


  CustomerDetails() {
    this.router.navigate(['customer-details'], {
      queryParams: {
        data: JSON.stringify(this.data1)
      }
    });

  }
  EditCustomer() {
    this.router.navigate(['edit-customer'])
  }


}


  //  this._studentService.getStudents().subscribe(res=>{

    // this.customers.push({nam:'smapth'});
    // console.log(this.customers);
  //  });
   //return this.htp.get('https://jsonplaceholder.typicode.com/users')
   //.pipe(map((res:any)=>{return res;}))
   //this.htp.get('https://example.com/api/items').pipe(map((customerData:any) => {})).subscribe(result => {
     // console.log(result);
    //});



