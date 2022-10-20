import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common'
import { CommonModule } from '@angular/common';
import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentService } from './student.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { myRoutings } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { AboutComponent } from './about/about.component';
import { OrdersComponent } from './orders/orders.component';
import { SearchPipe } from './search.pipe';
import { HeaderComponent } from './header/header.component';
import { CustomerOrderComponent } from './customer-orders/customer-order.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerService } from './customer.service';
import { SharedModule } from './shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
// import { CustomerModule } from './customer/customer.module';

@NgModule({
  declarations: [
    AppComponent,
    myRoutings, 
    LoginComponent,
     NavbarComponent,
    CardViewComponent,
    ListViewComponent, 
    MapViewComponent, 
    AboutComponent, 
    OrdersComponent,
    SearchPipe,
    HeaderComponent,
    CustomerOrderComponent,
    CustomerDetailsComponent,
    EditCustomerComponent,
    NewCustomerComponent,
    LogoutComponent,
    // SharedModule

  ],
  imports: [
    // SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    // CommonModule,
    NgxPaginationModule,
    HttpClientModule,
    GoogleMapsModule,
    // BrowserModule,
    // CustomerModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
