import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activeTab?: number;
  constructor(public _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activeTab)

  }
 
  CardView(){
    this._router.navigate(['card-view']);
  }

  Map() {
    this._router.navigate(["map-view"]);
  }

  ListView() {
    this._router.navigate(['list-view']);
  }
  NewCustomer(){
    this._router.navigate(['new-customer']);
  }
}

