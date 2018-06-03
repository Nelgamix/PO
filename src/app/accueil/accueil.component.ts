import {Component} from '@angular/core';
import {Document} from '../data-classes';
import {DataService} from '../data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  document: Document;

  constructor(private dataService: DataService) {
    this.document = dataService.document;
  }

  open(url: string): void {
    window.open(url, '_blank');
  }

  get infoBar(): string[] {
    const items = [];
    if (this.document.infos.age) items.push(this.document.infos.age + ' ans');
    if (this.document.infos.localisation) items.push(this.document.infos.localisation);
    if (this.document.infos.permis) items.push('Permis B');
    return items;
  }
}
