import {Component, ViewChild} from '@angular/core';
import {DataService, ProjetOrExperienceType} from '../data.service';
import {Document, Image} from '../data-classes';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent {
  document: Document;
  projetTypes: ProjetOrExperienceType[];
  searchFor = '';

  @ViewChild('photoZoom') public modalPhotoZoom;
  image: Image;

  constructor(private dataService: DataService) {
    this.document = dataService.document;
    this.projetTypes = dataService.projetTypes;
  }

  open(url: string): void {
    window.open(url, '_blank');
  }

  openPhotoZoom(image: Image): void {
    this.image = image;
    this.modalPhotoZoom.show();
  }

  searchProjetType(type: string): string {
    return this.projetTypes.filter(t => t.nom === type)[0].couleur;
  }
}
