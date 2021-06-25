import { Component, OnInit } from '@angular/core';
import { Customer,Account } from 'src/app/Customer';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Array<Customer> = [];
  theirAccount: Array<Account>;
  reverseSort: boolean;
  sortColumn: string;
  constructor() { 
    let keys=Object.keys(localStorage),i=keys.length;
    this.reverseSort=true;
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
      console.log(customerJSON);
      this.customers.push(customerJSON);
    }
  }

  ngOnInit(): void {
  }

  deleteCustomer(customer)
  {
    let i=this.customers.length;
    while(i--)
    {
      if(this.customers[i]===customer)
      {
        localStorage.removeItem(customer.fName+"-"+customer.lName);
        break;
      }
    }
    let keys=Object.keys(localStorage);
    i=keys.length;
    this.customers=[]
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
      console.log(customerJSON);
      this.customers.push(customerJSON);
    }
  }
  changeSortData(columnName){
    this.sortColumn = columnName; 
    this.reverseSort = this.reverseSort == false ? true : false;

  }
  

}