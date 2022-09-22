import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private _router:Router , private _activatedRouter : ActivatedRoute) { }

  ngOnInit(): void {
  }
  CustomerManager(){
    this._router.navigate(['/card-view',{ relativeTo: this._activatedRouter}]);
  }
  Customers(){
    this._router.navigate(['/list-view'],{relativeTo:this._activatedRouter});
  }
  Login() {
    this._router.navigate(['/login'],{ relativeTo: this._activatedRouter })

  }
  About(){
    this._router.navigate(['/about'],{relativeTo:this._activatedRouter})
  }
  Order(){
    this._router.navigate(['/order'],{relativeTo:this._activatedRouter})
  }
  CustomerOrder(){
    this._router.navigate(['customer-order']);
  }
  CustomerDetails(){
    this._router.navigate(['customer-details']);
  }
  EditCustomer(){
    this._router.navigate(['edit-customer']);
  }
}
