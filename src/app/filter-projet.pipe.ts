import { Pipe, PipeTransform } from '@angular/core';
import {Projet} from './data-classes';

@Pipe({
  name: 'filterProjet'
})
export class FilterProjetPipe implements PipeTransform {
  transform(value: Projet[], args: string): any {
    if (args.length < 2) return value;

    const ps = [];
    const searchFor = args.toLowerCase();
    value.forEach(p => {
      if (this.search(p.nom, searchFor) || this.searchArray(p.technologies, searchFor) || this.search(p.description, searchFor)) {
        ps.push(p);
      }
    });
    return ps;
  }

  private search(val: string, s: string): boolean {
    return val.toLowerCase().indexOf(s) >= 0;
  }

  private searchArray(val: string[], s: string): boolean {
    for (const v of val) {
      if (this.search(v, s)) return true;
    }
    return false;
  }

}
