import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-editcopm',
  templateUrl: './editcopm.component.html',
  styleUrls: ['./editcopm.component.css']
})
export class EditcopmComponent implements OnInit {
  CustomerForm : Customer;

  deleteCustomer: any;
  deleteModel:any;
  idTodelete: number = 0;
 
 customerdata;
  Editcustomer: Customer;
  constructor(private _router:Router , private _activatedRouter:ActivatedRoute , private customerService :CustomerService) { }

  ngOnInit(): void {
    debugger;
    this._activatedRouter.paramMap.subscribe((param)=>{
      var id = Number(param.get('ed'));
      this.getById(id);
    })
    this._activatedRouter.queryParams.subscribe((params: {data: string, showTab: string})=>{
      console.log(params);
      let data1 = JSON.stringify(params.data);
      var id  = data1["id"];
      this.getById(id);

    })
   this.CustomerForm = this.Editcustomer;

   
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
