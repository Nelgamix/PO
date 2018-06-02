import {Component, Input} from '@angular/core';
import {Technologie} from '../data-classes';

@Component({
  selector: 'app-technologie-description',
  templateUrl: './technologie-description.component.html',
  styleUrls: ['./technologie-description.component.scss']
})
export class TechnologieDescriptionComponent {
  @Input() technologie: Technologie;
}
