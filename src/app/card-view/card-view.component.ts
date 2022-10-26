import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css'],
  
})

export class CardViewComponent implements OnInit {
 public search1 = '';
 public page = '';
 public customersdata ;
 public isEditCustomer=false;
 public currentEditCustomer=[];
  constructor(private _router: Router, private _activatedRouter: ActivatedRoute ,private customerService:CustomerService) { }

  ngOnInit(): void { 
    this.get();
  }
  ViewOrder(data: any , showTab : string) {
    this._router.navigate(['customer-details', data.id], {
      queryParams: {
        showTab:showTab
      }
    });
  }
  editCustomer(data: any){
    this.isEditCustomer=true;
    this._router.navigate(['customer-details', data.id], {
      queryParams: {
      showTab:'editCustomer'
    }})
  }

  get(){
    this.customerService.get().subscribe((data)=>{
      this.customersdata=data;
    })
  }

}
