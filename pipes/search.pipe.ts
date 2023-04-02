import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();

    return items.filter(t => {
      //var result = t.toLocaleLowerCase().includes(searchText);
      //return result;

      return JSON.stringify(t).toLocaleLowerCase().includes(searchText);
    });
  }
}
