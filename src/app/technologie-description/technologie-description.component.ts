import {Component, Input} from '@angular/core';
import {Technologie} from '../data-classes';

@Component({
  selector: 'app-technologie-description',
  templateUrl: './technologie-description.component.html',
  styleUrls: ['./technologie-description.component.scss']
})
export class TechnologieDescriptionComponent {
  @Input() technologie: Technologie;

  get title() {
    return this.technologie.nom + (this.technologie.version ? ' ' + this.technologie.version : '');
  }

  get text() {
    return this.technologie.description;
  }
}
