import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcctransactionsService {
  fName: string;
  lName: string;
  accNum: number;
  constructor() { 
    this.fName = '';
    this.lName='';
    this.accNum=0;
  }
}
