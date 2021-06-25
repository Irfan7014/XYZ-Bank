import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  amount: number;
  @Output() sendAmount: EventEmitter<number> = new EventEmitter();
  @Output() sendType: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(withdrawAmount: NgForm){
    this.sendAmount.emit(this.amount);
    this.sendType.emit('Debit');
    withdrawAmount.reset();
}

}
