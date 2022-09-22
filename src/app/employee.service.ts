import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

export interface Iemp{
  userId : Number;
  id : Number;
  title : string;
  body:string
}
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    private _url : string='/src/assets/emp.json';
  constructor(private http : HttpClient) { }

  getEmp(){
 return  this.http.get('https://jsonplaceholder.typicode.com/posts'); 
  }
 

}
