import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction, Customer, Account } from 'src/app/Customer';
import { AcctransactionsService } from '../services/acctransactions.service';
@Component({
  selector: 'app-show-transactions',
  templateUrl: './show-transactions.component.html',
  styleUrls: ['./show-transactions.component.css']
})
export class ShowTransactionsComponent implements OnInit {
  account: number;
  custName: string;
  postCode: string;
  custId: number;
  transactions: Array<Transaction>;
  customerData: Customer;
  accounts: Array<Account>;
  reverseSort: boolean;
  constructor(private router: Router, private _showSelectedAccountTransaction: AcctransactionsService) {
    console.log(this._showSelectedAccountTransaction.fName + "-" + this._showSelectedAccountTransaction.lName);
    this.custName = this._showSelectedAccountTransaction.fName + "-" + this._showSelectedAccountTransaction.lName;
    this.customerData = JSON.parse(localStorage.getItem(this.custName));
    this.postCode = this.customerData.postCode;
    console.log(this.customerData);
    this.accounts = this.customerData.accounts;
    this.custId = this.customerData.customerId;
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].accNo == this._showSelectedAccountTransaction.accNum) {
        this.transactions = this.accounts[i].transactions;
        break;
      }
    }
    console.log(this._showSelectedAccountTransaction.accNum);
    this.reverseSort = false;
  }

  ngOnInit(): void {
  }
  goToAccountPage(pageName: string) {
    this.router.navigate([pageName]);
  }
  resetTransaction() {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].accNo == this._showSelectedAccountTransaction.accNum) {
        let currency = this.accounts[i].currency;
        this.accounts.splice(i);
        this.transactions = [];
        let toPush: Account = {
          accNo: this._showSelectedAccountTransaction.accNum,
          currency: currency,
          amount: 0,
          transactions: []
        };
        this.accounts.push(toPush);
        break;
      }
    }
    const cust = {
      customerId: this.custId,
      fName: this._showSelectedAccountTransaction.fName,
      lName: this._showSelectedAccountTransaction.lName,
      postCode: this.postCode,
      accounts: this.accounts
    }
    localStorage.removeItem(this._showSelectedAccountTransaction.fName + "-" + this._showSelectedAccountTransaction.lName);
    localStorage.setItem(this._showSelectedAccountTransaction.fName + "-" + this._showSelectedAccountTransaction.lName,
      JSON.stringify(cust));
    console.log(localStorage);
  }
  changeSortData() {
    this.reverseSort = this.reverseSort == false ? true : false;
  }
}
