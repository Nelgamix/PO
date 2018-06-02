import {Component} from '@angular/core';
import {poData} from './data';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService: DataService) {
    this.dataService.loadDocument(poData);
  }
}
