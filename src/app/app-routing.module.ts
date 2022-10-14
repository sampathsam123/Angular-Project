import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentDetailsComponent } from './page-not-found/student-details/student-details.component';
import { ListViewComponent } from './list-view/list-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardViewComponent } from './card-view/card-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { LoginComponent } from './login/login.component';
import { CustomerManagerComponent } from './customer-manager/customer-manager.component';
import { AboutComponent } from './about/about.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerOrderComponent } from './customer-orders/customer-order.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { HeaderComponent } from './header/header.component';
import { EditcopmComponent } from './editcopm/editcopm.component';


const routes: Routes = [

  { path: "Customer-Manager", component: CustomerManagerComponent,canActivate: [AuthGuard]},
  { path: "about", component: AboutComponent,canActivate: [AuthGuard] },
  { path: "order", component: OrdersComponent,canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "list-view", component: ListViewComponent,canActivate: [AuthGuard] },
  { path: "card-view", component: CardViewComponent ,canActivate: [AuthGuard]},
  { path: "map-view", component: MapViewComponent,canActivate: [AuthGuard] },
  { path: "customer-order", component: CustomerOrderComponent ,canActivate: [AuthGuard]},
  { path: "customer-details", component: CustomerDetailsComponent,canActivate: [AuthGuard] },
  // {path:" ",redirectTo:'/student',pathMatch:'full'},
  { path: 'student-detail', component: StudentDetailsComponent },
  { path: 'new-customer', component: NewCustomerComponent,canActivate: [AuthGuard] },
  {path:'editcomponent',component:EditcopmComponent,canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'card-view/editcomponent/:id', component: EditCustomerComponent ,canActivate: [AuthGuard]},
  {path:'customer-details/:id',component:CustomerDetailsComponent,canActivate: [AuthGuard]},
  {path:'customer-order/:id',component:CustomerOrderComponent,canActivate: [AuthGuard]},
  {path:'edit-customer/:id',component:EditCustomerComponent,canActivate: [AuthGuard]},
  {path:'editcomponent/:ed',component:EditcopmComponent,canActivate: [AuthGuard]},
  { path: '', redirectTo: 'cutomer/new-customer', pathMatch: 'full' },
  // {path:'',redirectTo:'card-view/edit-customer/:id', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings = [
  StudentDetailsComponent,
  PageNotFoundComponent,
  ListViewComponent,
];
