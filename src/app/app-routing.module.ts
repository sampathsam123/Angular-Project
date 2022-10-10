import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
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
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { EmployeeDetialsComponent } from './employee-detials/employee-detials.component';
import { TdfComponent } from './tdf/tdf.component';
import { AuthGuard } from './auth.guard';
import { RfComponent } from './rf/rf.component';
import { AuthService } from './auth.service';
import { CutomerinformationComponent } from './cutomerinformation/cutomerinformation.component';


const routes: Routes = [

  { path: "Customer-Manager", component: CustomerManagerComponent },
  { path: "about", component: AboutComponent },
  { path: "order", component: OrdersComponent },
  { path: "login", component: LoginComponent },
  { path: "list-view", component: ListViewComponent },
  { path: "card-view", component: CardViewComponent },
  { path: "map-view", component: MapViewComponent },
  { path: "customer-order", component: CustomerOrderComponent },
  { path: "customer-details", component: CustomerDetailsComponent },
  { path: "edit-customer", component: EditCustomerComponent },
  // {path:" ",redirectTo:'/student',pathMatch:'full'},
  { path: "cutomer-information", component: CutomerinformationComponent },
  { path: 'student-detail', component: StudentDetailsComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'new-customer', component: NewCustomerComponent },
  { path: 'parent', component: ParentComponent},
  { path: 'child', component: ChildComponent },
  { path: 'employee-details', component: EmployeeDetialsComponent },
  { path: 'tdf', component: TdfComponent },
  { path: 'rf', component: RfComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'card-view/edit-customer/:id', component: EditCustomerComponent },
  // { 
  //   path: 'customer',
  //   loadChildren: () => import('src/app/customer/customer.module').then(m => m.CustomerModule)
  // },
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
  StudentListComponent,
  PageNotFoundComponent,
  ListViewComponent,
];
