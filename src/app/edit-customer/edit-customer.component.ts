import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
 CustomerForm : Customer;
customerdata;
@Input() Editcustomer : any ;
  constructor(private _router:Router , private _activatedRouter:ActivatedRoute , private customerService :CustomerService)  { }

  ngOnInit(): void {
    this._activatedRouter.paramMap.subscribe((param)=>{
      var id = Number(param.get('id'))
      this.getById(id);
    })
   this.CustomerForm = this.Editcustomer;
  }
getById(id:number){
  this.customerService.getById(id).subscribe((data: Customer)=>{
    this.CustomerForm=data;
  })   
}

update(){
  this.customerService.update(this.CustomerForm).subscribe({
    next:(data)=>{
      this._router.navigate(['card-view']);
    },
  })
}

}
