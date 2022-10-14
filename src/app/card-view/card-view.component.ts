import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css'],
  
})

export class CardViewComponent implements OnInit {
  @Input() url=[];
  search1 = '';
  page = '';
 // customers: customerInterface[] = customerData;
  customersdata ;

  constructor(private _router: Router, private _activatedRouter: ActivatedRoute ,private customerService:CustomerService) { }

  ngOnInit(): void { 
    this.get();
  }
  ViewOrder(data: any , showTab : string) {
    this._router.navigate(['customer-details'], {
      queryParams: {
        // ...data , 
        data:JSON.stringify(data),
        showTab:showTab
      }
    });
  }
  EditCustomer() {
    this._router.navigate(['/editcomponent'])
  }

  get(){
    this.customerService.get().subscribe((data)=>{
      this.customersdata=data;
    })
  }

}
