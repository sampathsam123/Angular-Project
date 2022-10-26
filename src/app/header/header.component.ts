import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router:Router , private _activatedRouter : ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
  }
  CustomerManager() {
    this._router.navigate(['/card-view'], { relativeTo: this._activatedRouter });
  }
  Customers() {
    this._router.navigate(['/list-view'], { relativeTo: this._activatedRouter });
  }
  Logout() {
    this.authService.logout();
    this._router.navigate(['/'], { relativeTo: this._activatedRouter })

  }
  About() {
    this._router.navigate(['/about'], { relativeTo: this._activatedRouter })
  }
  Order() {
    this._router.navigate(['/orders'], { relativeTo: this._activatedRouter })
  }
}
