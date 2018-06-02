import {Injectable} from '@angular/core';
import {Document} from './data-classes';
import {JSONDocument} from './data-types';

export interface ProjetType {
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

  private _projetTypes: ProjetType[] = [];

  constructor() { }

  loadDocument(json: JSONDocument) {
    this._document = new Document(json);

    // Analyse
    this.document.projets.forEach(p => {
      if (p.type && this._projetTypes.filter(type => type.nom === p.type).length === 0) {
        this._projetTypes.push({nom: p.type, couleur: couleurs.splice(0, 1)[0]});
      }
    });
  }

  get document(): Document {
    return this._document;
  }

  get projetTypes(): ProjetType[] {
    return this._projetTypes;
  }
}
