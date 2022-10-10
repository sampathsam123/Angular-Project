import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  data(data: any): any {
    throw new Error('Method not implemented.');
  }


  constructor(private http:HttpClient) { }

  get(){
    return this.http.get("http://localhost:3000/customers");
  }
  create(paylode:Customer){
    return this.http.post("http://localhost:3000/customers",paylode);
  }
getById(id:number){
  return this.http.get(`http://localhost:3000/customers/${id}`)
}
update(paylode:Customer){
 return this.http.put(`http://localhost:3000/customers/${paylode.id}`,paylode);
}
delete(id:number){
  return this.http.delete(`http://localhost:3000/customers/${id}`);
}

}
