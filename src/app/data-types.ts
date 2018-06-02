/*
  INTERFACES JSON
 */
export interface JSONDocument {
  infos: JSONInfos;
  technologies: JSONTechnologie[];
  experiences: JSONExperience[];
  projets: JSONProjet[];
  contacts: JSONContact[];
}

export interface JSONInfos {
  nom: string;
  prenom: string;
  image?: string;
  poste: string;
  naissance: string;
  ville: string;
  permis?: boolean;
  liens: JSONLien[];

  bio: string[];
  competences: JSONCompetenceCategorie[];
  formation: JSONFormation[];
  ci: JSONCentreInteret[];
}

export interface JSONCompetenceCategorie {
  categorie: string;
  domaines: JSONCompetenceDomaine[];
}

export interface JSONCompetenceDomaine {
  domaine: string;
  competences: string[];
}

export interface JSONCentreInteret {
  nom: string;
  items: string[];
}

export interface JSONFormation {
  nom: string;
  domaine: string;
  debut: string;
  fin: string;
  lieu: string;
  commentaires?: string;
}

export interface JSONTechnologie {
  nom: string;
  version?: string | number;
  description: string;
  icone?: string;
  liens?: JSONLien[];
}

export interface JSONExperience {
  entreprise: string;
  poste: string;
  debut: string;
  fin: string;
  technologies: string[];
  images?: string[];
  liens?: JSONLien[];
  description: string;
}

export interface JSONProjet {
  nom: string;
  type: string;
  debut: string;
  fin: string;
  technologies: string[];
  images?: string[];
  liens?: JSONLien[];
  description: string;
}

export interface JSONLien {
  nom: string;
  url: string;
  description?: string;
  utilisateur?: string;
  image?: string;
  cacher?: boolean;
}

export interface JSONContact {
  nom: string;
  prenom: string;
  email: string;
  commentaires?: string;
}
