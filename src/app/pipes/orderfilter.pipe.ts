import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderfilter'
})
export class OrderfilterPipe implements PipeTransform {

  transform(orderList : any[], searchOrder: string): any[] {
    
    if (orderList && searchOrder) {
      return orderList.filter((output) => output.orderNumber.toLowerCase().indexOf(searchOrder)>-1);
    }

    return orderList;
  }

}
