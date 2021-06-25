import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/Customer'
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customerId: number;
  fName: string;
  lName: string;
  postCode: string;
  customerData: any;
  flag: number = 0;
  @Output() customerAdd: EventEmitter<Customer> = new EventEmitter();
  constructor() { 
  }

  ngOnInit(): void {
  }
  onSubmit(addCust: NgForm){
    this.customerId=parseInt(localStorage.getItem("nextAvailableCustomerId"));
    const customer = {
      customerId: this.customerId,
      fName: this.fName,
      lName: this.lName,
      postCode: this.postCode,
      accounts: []
    }
    let values = [],keys=Object.keys(localStorage),i=keys.length;
    while(i--)
    {
      this.customerData=localStorage.getItem(keys[i]);
      if(this.customerData.fName==this.fName && this.customerData.lName==this.lName && this.customerData.postCode==this.postCode)
      {
        this.flag=1;
        break;
      }
    }
    if(this.flag===0){
      localStorage.setItem(this.fName+"-"+this.lName, JSON.stringify(customer));
      alert("User "+this.fName+" "+this.lName+" Post Code: "+this.postCode+" has been created with CustomerId = "+this.customerId);
      localStorage.setItem("nextAvailableCustomerId",JSON.stringify(this.customerId+1));
      this.flag=0;
    }
    addCust.reset();
  }
}
