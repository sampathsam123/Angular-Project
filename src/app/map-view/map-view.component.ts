import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { GoogleMap,GoogleMapsModule } from '@angular/google-maps';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  page='';
  customersdata;
  constructor(private _router:Router, private _activatedRoute: ActivatedRoute,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.customerService.get().subscribe((data)=>{
      this.customersdata=data;
    })
  }
}
