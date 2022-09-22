import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticate: boolean = false;
  userData: any;

  login(email: string, password: string): Observable<boolean> {
    if (email === 'admin@gmail.com' && password === 'admin') {
      this.isAuthenticate = true;
      return of(true);
    }
    return of(false);
  }
} 