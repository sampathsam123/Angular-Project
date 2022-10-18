import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-manager',
  templateUrl: './customer-manager.component.html',
  styleUrls: ['./customer-manager.component.css']
})
export class CustomerManagerComponent implements OnInit {
  viewParams = {
    view: 'card',
    search: ''
  };


  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }

  onView(p1) {
    this.viewParams.view = p1;
  }

  

}
