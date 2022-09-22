import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(private _router:Router , private _activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
