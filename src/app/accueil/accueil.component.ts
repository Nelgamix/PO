import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {poData} from '../data';

/*
  INTERFACES JSON
 */
export interface JSONDocument {
  infos: JSONInfos;
  experiences: JSONExperience[];
  projets: JSONProjet[];
  contacts: JSONContact[];
}

interface JSONInfos {
  nom: string;
  prenom: string;
  poste: string;
  naissance: string;
  ville: string;
  permis: boolean;
  liens: JSONLien[];

  bio: string[];
  competences: JSONCompetenceCategorie[];
  formation: JSONFormation[];
  ci: JSONCentreInteret[];
}

interface JSONCompetenceCategorie {
  categorie: string;
  domaines: JSONCompetenceDomaine[];
}

interface JSONCompetenceDomaine {
  domaine: string;
  competences: string[];
}

interface JSONCentreInteret {
  nom: string;
  items: string[];
}

interface JSONFormation {
  nom: string;
  domaine: string;
  debut: string;
  fin: string;
  lieu: string;
  commentaires: string;
}

interface JSONExperience {
  entreprise: string;
  poste: string;
  debut: string;
  fin: string;
  technologies: string[];
  description: string;
}

interface JSONProjet {
  nom: string;
  debut: string;
  fin: string;
  technologies: string[];
  description: string;
}

interface JSONLien {
  nom: string;
  utilisateur?: string;
  url: string;
  image?: string;
  cacher?: boolean;
}

interface JSONContact {
  nom: string;
  prenom: string;
  email: string;
}

/*
  CLASSES
*/
class Document {
  infos: Infos;
  experiences: Experience[] = [];
  projets: Projet[] = [];
  contacts: Contact[] = [];

  constructor(json: JSONDocument) {
    this.infos = new Infos(json.infos);
    json.experiences.forEach(e => this.experiences.push(new Experience(e)));
    json.projets.forEach(p => this.projets.push(new Projet(p)));
    json.contacts.forEach(c => this.contacts.push(new Contact(c)));
  }
}

class Infos {
  nom: string;
  prenom: string;
  poste: string;
  naissance: string;
  ville: string;
  permis: boolean;
  liens: Lien[] = [];

  bio: string[] = [];
  competences: CompetenceCategorie[] = [];
  formation: Formation[] = [];
  ci: CentreInteret[] = [];

  constructor(json: JSONInfos) {
    this.nom = json.nom;
    this.prenom = json.prenom;
    this.poste = json.poste;
    this.naissance = json.naissance;
    this.ville = json.ville;
    this.permis = json.permis;
    json.liens.forEach(l => this.liens.push(new Lien(l)));
    json.bio.forEach(b => this.bio.push(b));
    json.competences.forEach(c => this.competences.push(new CompetenceCategorie(c)));
    json.formation.forEach(f => this.formation.push(new Formation(f)));
    json.ci.forEach(ci => this.ci.push(new CentreInteret(ci)));
  }

  get age(): number {
    return moment.duration(moment().diff(moment(this.naissance))).years();
  }

  searchLien(search: string): Lien {
    return this.liens.filter(l => l.nom.toLowerCase() === search.toLowerCase())[0];
  }
}

class CompetenceCategorie {
  categorie: string;
  domaines: CompetenceDomaine[] = [];

  constructor(json: JSONCompetenceCategorie) {
    this.categorie = json.categorie;
    json.domaines.forEach(d => this.domaines.push(new CompetenceDomaine(d)));
  }
}

class CompetenceDomaine {
  domaine: string;
  competences: string[] = [];

  constructor(json: JSONCompetenceDomaine) {
    this.domaine = json.domaine;
    json.competences.forEach(c => this.competences.push(c));
  }
}

class CentreInteret {
  nom: string;
  items: string[] = [];

  constructor(json: JSONCentreInteret) {
    this.nom = json.nom;
    json.items.forEach(i => this.items.push(i));
  }
}

class Formation {
  nom: string;
  domaine: string;
  debut: moment.Moment;
  fin: moment.Moment;
  lieu: string;
  commentaires: string;

  constructor(json: JSONFormation) {
    this.nom = json.nom;
    this.domaine = json.domaine;
    this.debut = moment(json.debut);
    this.fin = moment(json.fin);
    this.lieu = json.lieu;
    this.commentaires = json.commentaires;
  }
}

class Experience {
  entreprise: string;
  poste: string;
  debut: moment.Moment;
  fin: moment.Moment;
  technologies: string[] = [];
  description: string;

  constructor(json: JSONExperience) {
    this.entreprise = json.entreprise;
    this.poste = json.poste;
    this.debut = moment(json.debut);
    this.fin = moment(json.fin);
    json.technologies.forEach(t => this.technologies.push(t));
    this.description = json.description;
  }
}

class Projet {
  nom: string;
  debut: moment.Moment;
  fin: moment.Moment;
  technologies: string[] = [];
  description: string;

  constructor(json: JSONProjet) {
    this.nom = json.nom;
    this.debut = moment(json.debut);
    this.fin = moment(json.fin);
    json.technologies.forEach(t => this.technologies.push(t));
    this.description = json.description;
  }
}

class Lien {
  nom: string;
  utilisateur: string;
  url: string;
  image: string;
  cacher: boolean;

  constructor(json: JSONLien) {
    this.nom = json.nom;
    this.utilisateur = json.utilisateur || '';
    this.url = json.url;
    this.image = json.image || '';
    this.cacher = json.cacher || false;
  }
}

class Contact {
  nom: string;
  prenom: string;
  email: string;

  constructor(json: JSONContact) {
    this.nom = json.nom;
    this.prenom = json.prenom;
    this.email = json.email;
  }
}

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  json: JSONDocument;
  document: Document;

  constructor() {
    this.json = poData;
  }

  ngOnInit() {
    this.document = new Document(this.json);
  }

  open(url: string): void {
    window.open(url, '_blank');
  }

}
