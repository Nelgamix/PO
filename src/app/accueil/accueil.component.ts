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
}
