import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { ManagerComponent } from './MyComponents/manager/manager.component';

import { AddCustomerComponent } from './MyComponents/add-customer/add-customer.component';
import { CustomerListComponent } from './MyComponents/customer-list/customer-list.component';
import { OpenAccountComponent } from './MyComponents/open-account/open-account.component';
import { HeaderLogoutComponent } from './MyComponents/header-logout/header-logout.component';
import { AccountComponent } from './MyComponents/account/account.component';
import { FormsModule } from '@angular/forms';
import { ManagerTasksComponent } from './MyComponents/manager-tasks/manager-tasks.component';
import { CustomerTasksComponent } from './MyComponents/customer-tasks/customer-tasks.component';
import { ShowTransactionsComponent } from './MyComponents/show-transactions/show-transactions.component';
import { WithdrawComponent } from './MyComponents/withdraw/withdraw.component';
import { DepositComponent } from './MyComponents/deposit/deposit.component';
import { SortPipe } from './MyComponents/pipes/sort.pipe';
import { SorttransactionPipe } from './MyComponents/pipes/sorttransaction.pipe';
import { AcctransactionsService } from './MyComponents/services/acctransactions.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    HeaderLogoutComponent,
    AccountComponent,
    ManagerTasksComponent,
    CustomerTasksComponent,
    ShowTransactionsComponent,
    WithdrawComponent,
    DepositComponent,
    SortPipe,
    SorttransactionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AcctransactionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
