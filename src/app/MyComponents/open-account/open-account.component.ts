import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/Customer'
import {Account} from 'src/app/Customer'
import {Transaction} from 'src/app/Customer'
@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent implements OnInit {
  customer: Array<Customer> = [];
  selectedCustomer: any;
  selectedCurrency: any;
  availableAccountNo: number;
  constructor() { 
    this.selectedCustomer = "default";
    this.selectedCurrency = "default";
    let values = [],keys=Object.keys(localStorage),i=keys.length;
    while(i--)
    {
      if(keys[i] == "nextAvailableAccountNo" || keys[i]=="nextAvailableCustomerId" || keys[i]=="recentlyLoggedIn")
      {
        continue;
      }
      let customerData = JSON.parse(localStorage.getItem(keys[i]));
      let customerJSON: Customer;
      customerJSON = { customerId: customerData.customerId, 
                       fName: customerData.fName,
                       lName: customerData.lName,
                       postCode: customerData.postCode,
                       accounts: customerData.accounts};
      this.customer.push(customerJSON);
      console.log(customerJSON);
    }
  }

  ngOnInit(): void {
  }
  selectACustomer(event: Event){
    this.selectedCustomer = (event.target as HTMLSelectElement).value;
    //console.log(this.selectedCustomer);
  }
  selectACurrency(event: Event){
    this.selectedCurrency = (event.target as HTMLSelectElement).value;
    //console.log(this.selectedCurrency);
  }
  onSubmit(openAcc: NgForm)
  {
      this.availableAccountNo = parseInt(localStorage.getItem("nextAvailableAccountNo"))+1;
      localStorage.setItem("nextAvailableAccountNo",JSON.stringify(this.availableAccountNo));
      let name: string = this.selectedCustomer.split("-");
      let data = JSON.parse(localStorage.getItem(name[0]+"-"+name[1]));

      data.accounts.push({ accNo: this.availableAccountNo,
        currency: this.selectedCurrency,
        amount: 0.0,
        transactions: []});

      localStorage.setItem(data.fName+"-"+data.lName, JSON.stringify(data));
      openAcc.reset();
  }
}
