import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header-logout',
  templateUrl: './header-logout.component.html',
  styleUrls: ['./header-logout.component.css']
})
export class HeaderLogoutComponent implements OnInit {

  constructor(private router: Router){

  }

  ngOnInit(): void {
  }
  goToPage(homePage:string):void{
    this.router.navigate([homePage]);
  }
}
