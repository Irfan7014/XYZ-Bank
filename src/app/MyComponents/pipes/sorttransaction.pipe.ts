import { Pipe, PipeTransform } from '@angular/core';
import { Transaction,Customer } from 'src/app/Customer';
@Pipe({
  name: 'sorttransaction'
})
export class SorttransactionPipe implements PipeTransform {

  transform(list: Transaction[],order: boolean): Transaction[] {
    let column="date_time";
    let sortedTransaction = list.sort((a,b)=>{
      if(order==true){
        if(a[column]>b[column]){
          return 1;
        }
        if(a[column]<b[column]){
          return -1;
        }
    }
    if(order==false){
      if(a[column]<b[column]){
        return 1;
      }
      if(a[column]>b[column]){
        return -1;
      }
  }
      return 0;
    });
    return sortedTransaction;
  }

}
