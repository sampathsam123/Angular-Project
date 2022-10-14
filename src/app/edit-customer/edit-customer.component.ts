import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

declare var window: any;

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
 
 CustomerForm : Customer;

 deleteCustomer: any;
 deleteModel:any;
 idTodelete: number = 0;

customerdata;
@Input() Editcustomer : any ;
  constructor(private _router:Router , private _activatedRouter:ActivatedRoute , private customerService :CustomerService)  { }

  ngOnInit(): void {
    debugger;
    this._activatedRouter.paramMap.subscribe((param)=>{
      var id = Number(param.get('id'));
      this.getById(id);
    })
    this._activatedRouter.queryParams.subscribe((params: {data: string, showTab: string})=>{
      console.log(params);
      let data1 = JSON.parse(params.data);
      var id  = data1["id"];
      this.getById(id);

    })
   this.CustomerForm = this.Editcustomer;

   this.deleteModel = new window.bootstrap.Model(
    document.getElementById('deleteModal')
   );
  }
getById(id:number){
  this.customerService.getById(id).subscribe((data1: Customer)=>{
    this.CustomerForm=data1;
  })   
}

update(){
  this.customerService.update(this.CustomerForm).subscribe({
    next:(data)=>{
      this._router.navigate(['card-view']);
      alert("Customer data successfully updated");
    },
  })
}
// delete a customer
delete(){
  this.customerService.delete(this.CustomerForm).subscribe({
    next:(data)=>{
      this._router.navigate(['card-view']);
      alert("Customer data successfully Deleted");
    },
  })
}
}
