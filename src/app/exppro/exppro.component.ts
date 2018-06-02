import {Component} from '@angular/core';
import {DataService} from '../data.service';
import {Document} from '../data-classes';

@Component({
  selector: 'app-exppro',
  templateUrl: './exppro.component.html',
  styleUrls: ['./exppro.component.css']
})
export class ExpproComponent {
  document: Document;

  constructor(private dataService: DataService) {
    this.document = dataService.document;
  }
}
