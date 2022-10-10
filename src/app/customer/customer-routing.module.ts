import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { NewCustomerComponent } from '../new-customer/new-customer.component';

const routes: Routes = [
  { path: 'new-customer', component: NewCustomerComponent },
  { path: 'edit-customer/:id', component: EditCustomerComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
