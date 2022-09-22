import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { StudentSInterface } from './student';
import { catchError } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import data from 'src/customers.json';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public _url =data;
  constructor(private _http: HttpClient) { }

  getCustomers() {
    this._http.get('http://10.10.10.55:8080/app/getAll').subscribe(data =>{
      console.log(data);
    })
    
    }

    saveCustomer(employee){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this._http.post('http://10.10.10.55:8080/app/save', employee,httpOptions);
    }

}

