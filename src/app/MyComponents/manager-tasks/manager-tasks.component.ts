import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-manager-tasks',
  templateUrl: './manager-tasks.component.html',
  styleUrls: ['./manager-tasks.component.css']
})
export class ManagerTasksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToPage(pageName: string){
    this.router.navigate([pageName]);
    // console.log("Go To Customer Login "+customerMain);
  }
}
