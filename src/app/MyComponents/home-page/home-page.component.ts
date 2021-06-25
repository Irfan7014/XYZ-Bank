import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router){
    if(localStorage.getItem("nextAvailableAccountNo")===null){
      localStorage.setItem("nextAvailableAccountNo",JSON.stringify(1000));
  }
  if(localStorage.getItem("nextAvailableCustomerId")===null){
    localStorage.setItem("nextAvailableCustomerId",JSON.stringify(1));
  }
  if(localStorage.getItem("recentlyLoggedIn")===null){
    localStorage.setItem("recentlyLoggedIn",JSON.stringify(''));
  }
  console.log(localStorage);
    }

  ngOnInit(): void {
  }
  goToCustomerMain(customerMain: string){
    this.router.navigate([customerMain]);
    // console.log("Go To Customer Login "+customerMain);
  }

}
