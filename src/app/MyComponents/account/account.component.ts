import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {Customer} from "src/app/Customer";
import { Account } from 'src/app/Customer';
import { Router } from '@angular/router';
import { AcctransactionsService } from '../services/acctransactions.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  selectedTask:string;
  fName:string;
  lName: string;
  accounts: Array<Account>;
  customerData: Customer;
  selectedAccount: string;
  selectedAccountCurrency: string;
  selectedAccountBalance: string;
  amountTransacted: number;
  moreWithdrawl: boolean;
  negativeDeposit: boolean;
  successTrans: boolean;
  @Output() customerName: EventEmitter<Object> = new EventEmitter();
  constructor(private router: Router,private _showSelectedAccountTransaction: AcctransactionsService) { 
    this.selectedTask='';
    let name= JSON.parse(localStorage.getItem('recentlyLoggedIn')).split("-");
    this.customerData = JSON.parse(localStorage.getItem(JSON.parse(localStorage.getItem("recentlyLoggedIn"))));
    this.accounts = this.customerData.accounts;
    this.fName = name[0];
    this.lName = name[1];
    this.selectedAccount = String(this.accounts[0].accNo);
    this.selectedAccountCurrency = String(this.accounts[0].currency);
    this.selectedAccountBalance = String(this.accounts[0].amount);
    this.moreWithdrawl = true;
    this.negativeDeposit = true;
    this.successTrans = true;
    console.log(this.selectedAccount);
  }

  ngOnInit(): void {
  }
  selectTask(task)
  {
    this.moreWithdrawl = true;
    this.negativeDeposit = true;
    this.successTrans = true;
    this.selectedTask = task;
    console.log(task);
    if(this.selectedTask === 'listTx')
    {
        this._showSelectedAccountTransaction.fName = this.fName;
        this._showSelectedAccountTransaction.lName = this.lName;
        this._showSelectedAccountTransaction.accNum = parseInt(this.selectedAccount);
        this.router.navigate(['listTx']);
    }
  }
  selectAAccount(event: Event){
    this.selectedAccount = (event.target as HTMLSelectElement).value;
    for(let i=0; i<this.accounts.length; i++){
      if(this.accounts[i].accNo == parseInt(this.selectedAccount))
      {
        this.selectedAccountBalance = String(this.accounts[i].amount);
        this.selectedAccountCurrency = String(this.accounts[i].currency);
      }
  }
    console.log(this.selectedAccount+" "+this.selectedAccountBalance+" "+this.selectedAccountCurrency);
  }
  addAmountToAccount(amount){
    this.amountTransacted = parseFloat(amount);
    let flag=false;
    console.log(amount);
    for(let i=0; i<this.accounts.length; i++){
      if(this.accounts[i].accNo == parseInt(this.selectedAccount) && amount>0 && amount!=null  && amount!=NaN && amount!=undefined)
      {
        this.accounts[i].amount = this.accounts[i].amount +  parseFloat(amount);
        this.selectedAccountBalance = String(this.accounts[i].amount);
        this.selectedAccountCurrency = String(this.accounts[i].currency);
        localStorage.setItem(this.fName+"-"+this.lName,JSON.stringify(this.customerData));
        flag=true;
        break;
      }
  }
  if(!flag)
  {
    this.moreWithdrawl=true;
    this.successTrans=true;
    this.negativeDeposit=false;
  }
  else{
    this.negativeDeposit=true;
    this.moreWithdrawl=true;
    this.successTrans=false;
  }
  console.log(localStorage);

  }
  deductAmountFromAccount(amount){
    this.amountTransacted = parseFloat(amount);
    let flag=false;
    for(let i=0; i<this.accounts.length; i++){
      if(this.accounts[i].accNo == parseInt(this.selectedAccount) && amount<=this.accounts[i].amount && amount!=null && amount!=NaN && amount>0 && amount!=undefined)
      {
        this.accounts[i].amount -= parseFloat(amount);
        this.selectedAccountBalance = String(this.accounts[i].amount);
        this.selectedAccountCurrency = String(this.accounts[i].currency);
        localStorage.setItem(this.fName+"-"+this.lName,JSON.stringify(this.customerData));
        console.log(localStorage);
        flag=true;
        break;
      }
  }
  if(!flag)
  {
    this.successTrans=true;
    this.negativeDeposit=true;
    this.moreWithdrawl=false;
  }
  else{
    this.negativeDeposit=true;
    this.moreWithdrawl=true;
    this.successTrans=false;
  }
  console.log(localStorage);
}
  addTypeToTransaction(type){ 
    if(this.negativeDeposit && this.moreWithdrawl && !this.successTrans)
    {
    for(let i=0; i<this.accounts.length; i++){
      if(this.accounts[i].accNo == parseInt(this.selectedAccount))
      {
        if(this.accounts[i].transactions.length == 0)
        {
         this.accounts[i].transactions.push({
            transaction_id: 1,
            date_time: new Date(),
            amount: this.amountTransacted,
            type: type
         });
        }
        else{
          this.accounts[i].transactions.push({
            transaction_id: this.accounts[i].transactions.length + 1,
            date_time: new Date(),
            amount: this.amountTransacted,
            type: type
         });
        }
      }
  }
    localStorage.setItem(this.fName+"-"+this.lName,JSON.stringify(this.customerData));
  }
  }

}
