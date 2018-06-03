import {
  JSONCentreInteret,
  JSONCompetenceCategorie,
  JSONCompetenceDomaine, JSONContact,
  JSONDocument, JSONExperience, JSONExperiences,
  JSONFormation, JSONImage,
  JSONInfos, JSONLien, JSONProjet, JSONProjets,
  JSONTechnologie, JSONTemps
} from './data-types';
import * as moment from 'moment';

export enum SortType {
  DATE, DUREE, NOM, TECHNOLOGIE, NOMBRE_TECHNOLOGIES
}

function getSortType(st: string) {
  if (!st) return SortType.DATE;
  switch (st) {
    case 'DATE': return SortType.DATE;
    case 'DUREE': return SortType.DUREE;
    case 'NOM': return SortType.NOM;
    case 'TECHNOLOGIE': return SortType.TECHNOLOGIE;
    case 'NOMBRE_TECHNOLOGIES': return SortType.NOMBRE_TECHNOLOGIES;
    default: return SortType.DATE;
  }
}

export class Document {
  infos: Infos;
  technologies: Technologie[] = [];
  experiences: Experiences;
  projets: Projets;
  contacts: Contact[] = [];

  constructor(json: JSONDocument) {
    this.infos = new Infos(json.infos);
    json.technologies.forEach(t => this.technologies.push(new Technologie(t)));
    this.experiences = new Experiences(json.experiences);
    this.projets = new Projets(json.projets);
    json.contacts.forEach(c => this.contacts.push(new Contact(c)));
  }

  searchTechnologie(tech: string): Technologie {
    return this.technologies.filter(t => t.nom === tech)[0];
  }
}

export class Infos {
  nom: string;
  prenom: string;
  image: Image;
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
    this.image = new Image(json.image);
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

export class CompetenceCategorie {
  categorie: string;
  domaines: CompetenceDomaine[] = [];

  constructor(json: JSONCompetenceCategorie) {
    this.categorie = json.categorie;
    json.domaines.forEach(d => this.domaines.push(new CompetenceDomaine(d)));
  }
}

export class CompetenceDomaine {
  domaine: string;
  competences: string[] = [];

  constructor(json: JSONCompetenceDomaine) {
    this.domaine = json.domaine;
    json.competences.forEach(c => this.competences.push(c));
  }
}

export class CentreInteret {
  nom: string;
  items: string[] = [];

  constructor(json: JSONCentreInteret) {
    this.nom = json.nom;
    json.items.forEach(i => this.items.push(i));
  }
}

export class Formation {
  nom: string;
  domaine: string;
  temps: Temps;
  lieu: string;
  commentaires: string;

  constructor(json: JSONFormation) {
    this.nom = json.nom;
    this.domaine = json.domaine;
    this.temps = new Temps(json.temps);
    this.lieu = json.lieu;
    this.commentaires = json.commentaires;
  }
}

export class Technologie {
  nom: string;
  version: string;
  description: string;
  image: Image;
  liens: Lien[] = [];
  maitrise: number;

  constructor(json: JSONTechnologie) {
    this.nom = json.nom;
    this.version = json.version ? typeof json.version === 'number' ? String(json.version) : json.version : undefined;
    this.description = json.description;
    this.image = json.image ? new Image(json.image) : undefined;
    if (json.liens) json.liens.forEach(l => this.liens.push(new Lien(l)));
    this.maitrise = json.maitrise;
  }
}

export class Experiences {
  sort: SortType;
  items: Experience[] = [];

  constructor(json: JSONExperiences) {
    this.sort = getSortType(json.sort);
    json.items.forEach(e => this.items.push(new Experience(e)));
  }
}

export class Experience {
  entreprise: string;
  poste: string;
  type: string;
  temps: Temps;
  technologies: string[] = [];
  images: Image[] = [];
  liens: Lien[] = [];
  description: string;

  constructor(json: JSONExperience) {
    this.entreprise = json.entreprise;
    this.poste = json.poste;
    this.type = json.type;
    this.temps = new Temps(json.temps);
    json.technologies.forEach(t => this.technologies.push(t));
    if (json.images) json.images.forEach(i => this.images.push(new Image(i)));
    if (json.liens) json.liens.forEach(l => this.liens.push(new Lien(l)));
    this.description = json.description;
  }

  /*get duree() {
    return Math.round(moment.duration(this.fin.diff(this.debut)).asMonths()) + 1;
  }*/
}

export class Projets {
  sort: SortType;
  items: Projet[] = [];

  constructor(json: JSONProjets) {
    this.sort = getSortType(json.sort);
    json.items.forEach(p => this.items.push(new Projet(p)));
  }
}

export class Projet {
  nom: string;
  type: string;
  temps: Temps;
  technologies: string[] = [];
  images: Image[] = [];
  liens: Lien[] = [];
  description: string;

  constructor(json: JSONProjet) {
    this.nom = json.nom;
    this.type = json.type;
    this.temps = new Temps(json.temps);
    json.technologies.forEach(t => this.technologies.push(t));
    if (json.images) json.images.forEach(i => this.images.push(new Image(i)));
    if (json.liens) json.liens.forEach(l => this.liens.push(new Lien(l)));
    this.description = json.description;
  }

  /*get duree() {
    return Math.round(moment.duration(this.fin.diff(this.debut)).asMonths()) + 1;
  }*/
}

export class Lien {
  nom: string;
  url: string;
  description: string;
  utilisateur: string;
  image: Image;
  cacher: boolean;

  constructor(json: JSONLien) {
    this.nom = json.nom;
    this.url = json.url;
    this.description = json.description;
    this.utilisateur = json.utilisateur;
    this.image = json.image ? new Image(json.image) : undefined;
    this.cacher = json.cacher || false;
  }
}

export class Image {
  titre: string;
  url: string;
  description: string;

  constructor(json: JSONImage) {
    this.titre = json.titre;
    this.url = json.url;
    this.description = json.description;
  }
}

export class Temps {
  debut: moment.Moment;
  fin: moment.Moment;
  duree: moment.Duration;
  actuellement: boolean;

  constructor(json: JSONTemps) {
    this.debut = moment(json.debut);
    this.fin = moment(json.fin);
    this.duree = this.fin ? moment.duration(this.fin.diff(this.debut)) : moment.duration(moment().diff(this.debut));
    this.actuellement = !this.fin || moment().isBetween(this.debut, this.fin);
  }

  get dureeEnMois() {
    return Math.round(this.duree.asMonths());
  }
}

export class Contact {
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
