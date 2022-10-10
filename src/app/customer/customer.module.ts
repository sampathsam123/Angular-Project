import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
// import { CardViewComponent } from './card-view/card-view.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    EditCustomerComponent,
    // SharedModule
  ],
  imports: [
    // SharedModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditCustomerComponent,
    CustomerRoutingModule,
    NgModule,
    // CardViewComponent,
  ],
  providers: []
})
export class CustomerModule { }
