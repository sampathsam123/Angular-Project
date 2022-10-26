import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticate: boolean = false;
  userData: any;

  login(email: string, password: string): Observable<boolean> {
    // debugger;
    if (email === 'admin@gmail.com' && password === 'admin' || email === 'admin@yahoo.com'  && password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      return of(true);
    }
    return of(false);
  }

  isLoggedIn(){
    return localStorage.getItem('isLoggedIn') == 'true';
  }

  logout(){
    return localStorage.removeItem('isLoggedIn');
  }
} 