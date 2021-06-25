import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'src/app/Customer';
@Pipe({
  name: 'sort',
  pure:true
})
export class SortPipe implements PipeTransform {

  transform(list: Customer[], column:string, order: boolean): Customer[] {
    
    let sortedCustomers = list.sort((a,b)=>{
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
    return sortedCustomers;
  }

}
