import {Injectable} from '@angular/core';
import {Document} from './data-classes';
import {JSONDocument} from './data-types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _document: Document;

  constructor() { }

  loadDocument(json: JSONDocument) {
    this._document = new Document(json);
  }

  get document(): Document {
    return this._document;
  }
}
