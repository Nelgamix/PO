import {Component, ViewChild} from '@angular/core';
import {DataService, ProjetOrExperienceType} from '../data.service';
import {Document, Image} from '../data-classes';

@Component({
  selector: 'app-exppro',
  templateUrl: './exppro.component.html',
  styleUrls: ['./exppro.component.scss']
})
export class ExpproComponent {
  document: Document;
  experienceTypes: ProjetOrExperienceType[];
  searchFor = '';

  @ViewChild('photoZoom') public modalPhotoZoom;
  image: Image;

  constructor(private dataService: DataService) {
    this.document = dataService.document;
    this.experienceTypes = dataService.experienceTypes;
  }

  open(url: string): void {
    window.open(url, '_blank');
  }

  searchProjetType(type: string): string {
    return this.experienceTypes.filter(t => t.nom === type)[0].couleur;
  }
}
