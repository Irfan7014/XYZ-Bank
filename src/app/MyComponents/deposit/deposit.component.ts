import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  amount: number;
  @Output() sendAmount: EventEmitter<number> = new EventEmitter();
  @Output() sendType: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(depositAmount: NgForm){
      this.sendAmount.emit(this.amount);
      this.sendType.emit('Credit');
      depositAmount.reset();
  }

}
