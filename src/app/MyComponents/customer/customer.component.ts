import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from "../../Customer";
import {Router} from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Array<Customer> = [];
  selectedCustomer: any;
  constructor(private router: Router) { 
    this.selectedCustomer = "default";
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
    }
  }

  ngOnInit(): void {
  }
  selectACustomer(event: Event){
    this.selectedCustomer = (event.target as HTMLSelectElement).value;
    console.log(this.selectedCustomer);
  }
  loggedIn(path: string){
    localStorage.setItem("recentlyLoggedIn",JSON.stringify(this.selectedCustomer));
    this.router.navigate([path]);
    console.log(localStorage);
  }
}
