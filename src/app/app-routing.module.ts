import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './MyComponents/home-page/home-page.component';
import { CustomerComponent } from './MyComponents/customer/customer.component';
import { ManagerComponent } from './MyComponents/manager/manager.component';
import { AddCustomerComponent } from './MyComponents/add-customer/add-customer.component';
import { OpenAccountComponent } from './MyComponents/open-account/open-account.component';
import { CustomerListComponent } from './MyComponents/customer-list/customer-list.component';
import { AccountComponent } from './MyComponents/account/account.component';
import { ShowTransactionsComponent } from './MyComponents/show-transactions/show-transactions.component';
const routes: Routes = [
  { path: '', component:  HomePageComponent},
  { path: 'customer', component: CustomerComponent},
  {path: 'manager',component: ManagerComponent},
  {path: 'manager/addCust',component: AddCustomerComponent},
  {path: 'manager/openAccount',component: OpenAccountComponent},
  {path: 'manager/list',component: CustomerListComponent},
  {path: 'account',component: AccountComponent},
  {path: 'listTx',component: ShowTransactionsComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent, CustomerComponent,ManagerComponent,AddCustomerComponent,OpenAccountComponent,CustomerListComponent,AccountComponent,ShowTransactionsComponent];