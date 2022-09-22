import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common'
import { CommonModule} from '@angular/common';
import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentService } from './student.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { myRoutings } from './app-routing.module';
import { CustomerManagerComponent } from './customer-manager/customer-manager.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { AboutComponent } from './about/about.component';
import { OrdersComponent } from './orders/orders.component';
import { SearchPipe } from './search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { CustomerOrderComponent } from './customer-orders/customer-order.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { EmployeeDetialsComponent } from './employee-detials/employee-detials.component';
import { LogoutComponent } from './logout/logout.component';
import { TdfComponent } from './tdf/tdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RfComponent } from './rf/rf.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,   
    myRoutings, CustomerManagerComponent, LoginComponent, NavbarComponent, CardViewComponent,
     ListViewComponent, MapViewComponent, AboutComponent, OrdersComponent,
      SearchPipe,
      HeaderComponent,
      CustomerOrderComponent,
      CustomerDetailsComponent,
      EditCustomerComponent,
      NewCustomerComponent,
      ParentComponent,
      ChildComponent,
      EmployeeDetialsComponent,
      LogoutComponent,
      TdfComponent,
      RfComponent,
      
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    GoogleMapsModule,  
    BrowserModule,  
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
