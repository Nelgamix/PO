import {Injectable} from '@angular/core';
import {Document} from './data-classes';
import {JSONDocument} from './data-types';

export interface ProjetOrExperienceType {
  nom: string;
  couleur: string;
}

const couleurs = [
  'goldenrod',
  'cornflowerblue',
  'crimson'
];

@Injectable({providedIn: 'root'})
export class DataService {
  private _document: Document;

  private _projetTypes: ProjetOrExperienceType[] = [];
  private _experienceTypes: ProjetOrExperienceType[] = [];

  constructor() { }

  loadDocument(json: JSONDocument) {
    this._document = new Document(json);

    // Analyse
    this.document.projets.items.forEach(p => {
      if (p.type && this._projetTypes.filter(type => type.nom === p.type).length === 0) {
        this._projetTypes.push({nom: p.type, couleur: couleurs[this._projetTypes.length % couleurs.length]});
      }
    });
    this.document.experiences.items.forEach(e => {
      if (e.type && this._experienceTypes.filter(type => type.nom === e.type).length === 0) {
        this._experienceTypes.push({nom: e.type, couleur: couleurs[this._experienceTypes.length % couleurs.length]});
      }
    });
  }

  get document(): Document {
    return this._document;
  }

  get projetTypes(): ProjetOrExperienceType[] {
    return this._projetTypes;
  }

  get experienceTypes(): ProjetOrExperienceType[] {
    return this._experienceTypes;
  }
}
