import {Component} from '@angular/core';
import {DataService} from '../data.service';
import {Document} from '../data-classes';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent {
  document: Document;

  constructor(private dataService: DataService) {
    this.document = dataService.document;
  }
}
