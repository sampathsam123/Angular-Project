import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardViewComponent } from './card-view/card-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerOrderComponent } from './customer-orders/customer-order.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [

   { path: "about", component: AboutComponent, canActivate: [AuthGuard] },
  { path: "orders", component: OrdersComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent, canActivate: [AuthGuard], data: { moduleName: 'login' }},
  { path: "list-view", component: ListViewComponent },
  { path: "card-view", component: CardViewComponent, canActivate: [AuthGuard] },
  { path: "map-view", component: MapViewComponent, canActivate: [AuthGuard] },
  { path: "customer-order", component: CustomerOrderComponent, canActivate: [AuthGuard] },
  { path: "customer-details", component: CustomerDetailsComponent, canActivate: [AuthGuard] },
  { path: "customer-details/:id", component: CustomerDetailsComponent, canActivate: [AuthGuard] },
  // {path: "",redirectTo:'/login',pathMatch:'full'},
  { path: 'new-customer', component: NewCustomerComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'card-view/editcomponent/:id', component: EditCustomerComponent, canActivate: [AuthGuard] },
  { path: 'customer-details/:id', component: CustomerDetailsComponent, canActivate: [AuthGuard] },
  { path: 'customer-order/:id', component: CustomerOrderComponent, canActivate: [AuthGuard] },
  { path: 'edit-customer/:id', component: EditCustomerComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings = [
  ListViewComponent,
];
