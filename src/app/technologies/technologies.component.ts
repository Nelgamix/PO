import {Component} from '@angular/core';
import {DataService} from '../data.service';
import {Document, Technologie} from '../data-classes';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {
  document: Document;

  constructor(private dataService: DataService) {
    this.document = dataService.document;
  }

  getTechnoNom(t: Technologie): string {
    return t.nom + t.version ? ' ' + t.version : '';
  }

  getTechnoDescription(t: Technologie): string {
    return t.description;
  }
}
