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
      // debugger;
      // localStorage.setItem('logInEpoch', (new Date().getTime()).toString());
      // this.isAuthenticate = true;
      localStorage.setItem('isLoggedIn', 'true');
      return of(true);
    }
    return of(false);
  }

  validateHours(thenEpoch) {
    const nowEpoch = new Date().getTime();
    const diffInMilSecs = nowEpoch - thenEpoch;
    const diffInHours = diffInMilSecs / (1000 * 36 * 24);
    if (diffInHours > 1) {
      return false;
    }
    return true;
  }

  isLoggedIn(){
    return localStorage.getItem('isLoggedIn') == 'true';
  }

  logout(){
    return localStorage.removeItem('isLoggedIn');
  }
} 