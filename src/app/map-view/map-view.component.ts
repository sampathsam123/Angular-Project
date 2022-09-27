import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { GoogleMap,GoogleMapsModule } from '@angular/google-maps';
import customerDetails from  'D:/TEST/AngularTEST/src/customers.json';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  page='';
  Cdata = customerDetails;
  constructor(private _router:Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
