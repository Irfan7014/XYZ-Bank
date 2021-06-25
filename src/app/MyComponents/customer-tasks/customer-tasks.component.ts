import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-customer-tasks',
  templateUrl: './customer-tasks.component.html',
  styleUrls: ['./customer-tasks.component.css']
})
export class CustomerTasksComponent implements OnInit {
  @Output() withdrawOrDepositOrTransact: EventEmitter<string> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  moneyCD(task: string)
  {
      this.withdrawOrDepositOrTransact.emit(task);
  }
}
