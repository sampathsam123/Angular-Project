import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cutomerinformation',
  templateUrl: './cutomerinformation.component.html',
  styleUrls: ['./cutomerinformation.component.css']
})
export class CutomerinformationComponent implements OnInit {

  constructor(private router:Router , private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }  
  CustomerManager(){
    this.router.navigate(['/card-view']);
  }
  Customers(){
    this.router.navigate(['/list-view']);
  }
  Login() {
    this.router.navigate(['/login'])

  }
  About(){
    this.router.navigate(['/about'])
  }
  Order(){
    this.router.navigate(['/order'])
  }


}
