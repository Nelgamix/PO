import {
  JSONCentreInteret,
  JSONCompetenceCategorie,
  JSONCompetenceDomaine, JSONContact,
  JSONDocument, JSONExperience,
  JSONFormation,
  JSONInfos, JSONLien, JSONProjet,
  JSONTechnologie
} from './data-types';
import * as moment from 'moment';

/*
  CLASSES
*/
export class Document {
  infos: Infos;
  technologies: Technologie[] = [];
  experiences: Experience[] = [];
  projets: Projet[] = [];
  contacts: Contact[] = [];

  constructor(json: JSONDocument) {
    this.infos = new Infos(json.infos);
    json.technologies.forEach(t => this.technologies.push(new Technologie(t)));
    json.experiences.forEach(e => this.experiences.push(new Experience(e)));
    json.projets.forEach(p => this.projets.push(new Projet(p)));
    json.contacts.forEach(c => this.contacts.push(new Contact(c)));
  }
}

class Infos {
  nom: string;
  prenom: string;
  image: string;
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
    this.image = json.image;
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

class Technologie {
  nom: string;
  version: string;
  description: string;
  icone: string;
  liens: Lien[] = [];

  constructor(json: JSONTechnologie) {
    this.nom = json.nom;
    this.version = json.version ? typeof json.version === 'number' ? String(json.version) : json.version : undefined;
    this.description = json.description;
    this.icone = json.icone;
    json.liens.forEach(l => this.liens.push(new Lien(l)));
  }
}

class Experience {
  entreprise: string;
  poste: string;
  debut: moment.Moment;
  fin: moment.Moment;
  technologies: string[] = [];
  images: string[] = [];
  liens: Lien[] = [];
  description: string;

  constructor(json: JSONExperience) {
    this.entreprise = json.entreprise;
    this.poste = json.poste;
    this.debut = moment(json.debut);
    this.fin = moment(json.fin);
    json.technologies.forEach(t => this.technologies.push(t));
    if (json.images) json.images.forEach(i => this.images.push(i));
    if (json.liens) json.liens.forEach(l => this.liens.push(new Lien(l)));
    this.description = json.description;
  }
}

class Projet {
  nom: string;
  type: string;
  debut: moment.Moment;
  fin: moment.Moment;
  technologies: string[] = [];
  images: string[] = [];
  liens: Lien[] = [];
  description: string;

  constructor(json: JSONProjet) {
    this.nom = json.nom;
    this.type = json.type;
    this.debut = moment(json.debut);
    this.fin = moment(json.fin);
    json.technologies.forEach(t => this.technologies.push(t));
    if (json.images) json.images.forEach(i => this.images.push(i));
    if (json.liens) json.liens.forEach(l => this.liens.push(new Lien(l)));
    this.description = json.description;
  }
}

class Lien {
  nom: string;
  url: string;
  description: string;
  utilisateur: string;
  image: string;
  cacher: boolean;

  constructor(json: JSONLien) {
    this.nom = json.nom;
    this.url = json.url;
    this.description = json.description;
    this.utilisateur = json.utilisateur;
    this.image = json.image;
    this.cacher = json.cacher || false;
  }
}

class Contact {
  nom: string;
  prenom: string;
  email: string;
  commentaires: string;

  constructor(json: JSONContact) {
    this.nom = json.nom;
    this.prenom = json.prenom;
    this.email = json.email;
    this.commentaires = json.commentaires;
  }
}
