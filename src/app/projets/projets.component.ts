import {Component, ViewChild} from '@angular/core';
import {DataService, ProjetType} from '../data.service';
import {Document} from '../data-classes';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent {
  document: Document;
  projetTypes: ProjetType[];

  @ViewChild('photoZoom') public modalPhotoZoom;
  photo: string;

  constructor(private dataService: DataService) {
    this.document = dataService.document;
    this.projetTypes = dataService.projetTypes;
  }

  open(url: string): void {
    window.open(url, '_blank');
  }

  openPhotoZoom(url: string): void {
    this.photo = url;
    this.modalPhotoZoom.show();
  }

  searchProjetType(type: string): string {
    return this.projetTypes.filter(t => t.nom === type)[0].couleur;
  }
}
