import {JSONDocument} from './data-types';

export const poData: JSONDocument = {
  infos: {
    nom: 'Huchet',
    prenom: 'Nicolas',
    image: {
      url: 'assets/lastskyphoenix.png'
    },
    poste: 'Informaticien/Développeur',
    naissance: '1996/01/29',
    localisation: 'Le Versoud',
    permis: true,
    liens: [
      {
        nom: 'GitHub',
        utilisateur: '@Nelgamix',
        url: 'https://github.com/Nelgamix',
        image: {
          url: 'assets/github.png'
        },
        cacher: false
      },
      {
        nom: 'LinkedIn',
        utilisateur: 'Nicolas Huchet',
        url: 'https://www.linkedin.com/in/nicolas-huchet-82b268a8/',
        image: {
          url: 'assets/linkedin.png'
        },
        cacher: false
      },
      {
        nom: 'Mail',
        utilisateur: 'contact@skysurf.ovh',
        url: 'mailto:contact@skysurf.ovh',
        image: {
          url: 'assets/mail.ico'
        },
        cacher: true
      },
      {
        nom: 'CV',
        url: 'assets/CV.pdf',
        cacher: true
      }
    ],
    bio: [
      `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue sem arcu, vitae elementum nulla mattis in.
        Pellentesque vel est sit amet tellus dignissim mattis sit amet tristique massa. Aliquam iaculis quam vitae pulvinar porttitor.
        In dictum tortor ut viverra rutrum. Sed gravida sollicitudin imperdiet. Praesent sodales odio nec dapibus suscipit. Nulla facilisi.
        Maecenas ullamcorper augue in est ullamcorper, vitae ultricies sem fermentum. Proin aliquam mattis egestas.
        Maecenas non nisl ut diam laoreet pretium condimentum vitae erat. Pellentesque scelerisque massa sit amet iaculis condimentum.
      `,
      `
        Phasellus fermentum viverra massa, vitae commodo risus convallis a. Vestibulum faucibus scelerisque magna a pellentesque.
        Nam hendrerit augue ac facilisis bibendum. Vivamus neque purus, mattis sed quam sed, mollis vehicula ligula.
        Pellentesque sodales, enim sit amet consectetur efficitur, ex purus dapibus dui, ac mattis tellus turpis ut nunc.
        Donec cursus elit ut elementum tincidunt. Vivamus id nisl nec libero laoreet facilisis.
        Phasellus a justo sit amet neque dignissim porttitor ut ac sapien. Morbi nec neque a risus vehicula laoreet.
        Sed rutrum rutrum molestie. Aenean tincidunt eros vel enim varius maximus. Nullam at accumsan tellus. Sed eu accumsan felis.
        Proin vestibulum erat risus. Donec porta quis velit interdum aliquet. Morbi sagittis sit amet quam id ultricies.
      `
    ],
    competences: [
      {
        categorie: 'Langages',
        domaines: [
          {
            domaine: 'Web',
            competences: [
              'HTML',
              'CSS',
              'JavaScript',
              'PHP'
            ]
          },
          {
            domaine: 'Soft',
            competences: [
              'C',
              'C++',
              'C#',
              'Java'
            ]
          },
          {
            domaine: 'Script',
            competences: [
              'Python',
              'Lua',
              'Shell',
              'Batch'
            ]
          }
        ]
      },
      {
        categorie: 'Technologies',
        domaines: [
          {
            domaine: 'Web',
            competences: [
              'Angular',
              'Node.js',
              'Bootstrap',
              'SCSS'
            ]
          },
          {
            domaine: 'Autre',
            competences: [
              'SQL',
              'JavaFX',
              'QT'
            ]
          },
          {
            domaine: 'Mobile',
            competences: [
              'Android'
            ]
          }
        ]
      },
      {
        categorie: 'Systèmes',
        domaines: [
          {
            domaine: 'Desktop',
            competences: [
              'Windows',
              'Linux'
            ]
          },
          {
            domaine: 'Mobile',
            competences: [
              'Android'
            ]
          }
        ]
      }
    ],
    formation: [
      {
        nom: 'Master',
        domaine: 'Informatique',
        temps: {
          debut: '2017',
          fin: '2019'
        },
        lieu: 'UGA, Grenoble'
      },
      {
        nom: 'Licence, 3ème année',
        domaine: 'Informatique',
        temps: {
          debut: '2016',
          fin: '2017'
        },
        lieu: 'UGA, Grenoble'
      },
      {
        nom: 'DUT',
        domaine: 'Informatique',
        temps: {
          debut: '2014',
          fin: '2016'
        },
        lieu: 'IUT 2, Grenoble'
      }
    ],
    ci: [
      {
        nom: 'Nouvelles technologies',
        items: ['Smartphones', 'Hardware', 'Systèmes embarqués & IOT']
      },
      {
        nom: 'Sports',
        items: ['Football', 'VTT']
      }
    ]
  },
  technologies: [
    {
      nom: 'HTML',
      version: 5,
      description: 'Langage de balisage permettant de représenter une page web.',
      image: {
        url: 'assets/html.png'
      }
    },
    {
      nom: 'CSS',
      version: 3,
      description: 'Langage permettant de décrire la présentation des pages web.',
      image: {
        url: 'assets/css.png'
      }
    },
    {
      nom: 'JavaScript',
      description: 'Langage de programmation de script utilisé dans les pages web, mais aussi sur les serveurs (exemple: Node.js).',
      image: {
        url: 'assets/js.png'
      }
    },
    {
      nom: 'Angular',
      version: 6,
      description: 'Framework pour le développement d\'applications web Single Page Application.',
      image: {
        url: 'assets/angular.png'
      }
    },
    {
      nom: 'AngularJS',
      version: 1,
      description: 'Framework JavaScript pour le développement d\'applications web Single Page Application.',
      image: {
        url: 'assets/angular.png'
      }
    },
    {
      nom: 'Bootstrap',
      version: 4,
      description: 'Framework contenant des outils pour le design d\'applications/sites web responsive.',
      image: {
        url: 'assets/bootstrap.png'
      }
    },
    {
      nom: 'PHP',
      version: 7,
      description: 'Langage de programmation, principalement utilisé pour produire des pages web côté serveur.',
      image: {
        url: 'assets/php.png'
      }
    },
    {
      nom: 'Java',
      version: 8,
      description: 'Langage de programmation orienté objet et multi-plateforme par Oracle.',
      image: {
        url: 'assets/java.png'
      }
    },
    {
      nom: 'JavaFX',
      version: 8,
      description: 'Framework pour créer des interfaces en Java.'
    },
    {
      nom: 'Google Drive',
      description: 'Service de stockage de fichiers en ligne de Google.',
      image: {
        url: 'assets/gdrive.png'
      }
    },
    {
      nom: 'Python',
      version: 3.6,
      description: 'Langage de programmation multi-plateforme, souvent utilisé comme langage de script.',
      image: {
        url: 'assets/python.png'
      }
    },
    {
      nom: 'Node.js',
      version: 10,
      description: 'Plateforme logicielle en JavaScript orientée vers les applications réseau.',
      image: {
        url: 'assets/nodejs.png'
      }
    },
    {
      nom: 'Android',
      version: 9,
      description: 'Système d\'exploitation mobile basé sur Linux et développé par Google.',
      image: {
        url: 'assets/android.png'
      }
    }
  ],
  experiences: {
    items: [
      {
        entreprise: 'Capgemini',
        poste: 'Développeur',
        type: 'Alternance',
        temps: {
          debut: '2018/09',
          fin: '2019/09'
        },
        technologies: ['Java', 'HTML', 'CSS', 'JavaScript', 'Angular', 'Node.js', 'Android', 'iOS']
      },
      {
        entreprise: 'LIG',
        poste: 'Développeur',
        type: 'TER',
        temps: {
          debut: '2018/01',
          fin: '2018/07'
        },
        technologies: ['HTML', 'CSS', 'JavaScript', 'Angular'],
        description: `
          Stage de recherche effectué au Laboratoire d\'informatique de Grenoble, dans l'équipe __IIHM__.\n
          * Création d'une __application web__ pour visualiser un environnement virtuel correspondant à un bâtiment
          en vue de tester un nouveau moteur pour la domotique.
          * __Tests__ sur ce moteur pour s'assurer de son bon fonctionnement.
          * Création d'une __application web__ pour éditer un programme EUD qui est ensuite utilisé dans ce moteur.
        `
      },
      {
        entreprise: 'LIG',
        poste: 'Développeur',
        type: 'Stage',
        temps: {
          debut: '2016/04',
          fin: '2016/07'
        },
        technologies: ['HTML', 'CSS', 'JavaScript', 'AngularJS'],
        description: `
          Stage de fin de DUT effectué au Laboratoire d\'informatique de Grenoble, dans l'équipe __MRIM__.\n
          Création d'une __application web AngularJS__ pour annoter des média comme les images, les vidéo ou l'audio
          en vue d'une utilisation pour faire tourner du deep learning sur des oeuvres de musée.
        `
      }
    ]
  },
  projets: {
    items: [
      {
        nom: 'Master App',
        type: 'Projet personnel',
        temps: {
          debut: '2017/06',
          fin: '2018/04'
        },
        technologies: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Bootstrap', 'PHP'],
        liens: [
          {
            nom: 'Site',
            url: 'https://master.skysurf.ovh'
          }
        ],
        description: `
          Création d'un site utile pour les étudiants en Master Informatique à l'UGA.\n
          __Frontend__ avec Angular 6, comportant plusieurs modules:
          * Regroupement de liens utiles sur les différents UE, et des liens généraux (Webmail, ADE, ...)
          * Module 'Emploi du temps' avec persistance des données sur une base de données interne
          * Module évènements, affichage des évènements relatifs à la formation\n
          __Backend__ avec PHP et une base de données, pour les emploi du temps et les évènements.
        `
      },
      {
        nom: 'RandomStock',
        type: 'Projet personnel',
        temps: {
          debut: '2018/01',
          fin: '2018/06'
        },
        technologies: ['Android'],
        liens: [
          {
            nom: 'GitHub',
            url: 'https://www.github.com/zackattack73/RandomStock'
          }
        ],
        description: `
          Jeu Android consistant à trouver les mots clés associés à une ou aux deux images présentées, sur 1 minute.
          Multijoueur implémenté à l'aide des Google Play Games Services, permettant à deux joueurs de s'affronter à travers le monde.
          Plusieurs modes de jeux, profil utilisateur avec de l'XP.
        `
      },
      {
        nom: 'PasswordManager',
        type: 'Projet personnel',
        temps: {
          debut: '2017/06',
          fin: '2017/08'
        },
        technologies: ['Java', 'JavaFX', 'Google Drive'],
        liens: [
          {
            nom: 'GitHub',
            url: 'https://www.github.com/Nelgamix/PasswordManager'
          }
        ],
        description: `
          Développement d'un __gestionnaire de mots de passe__ avec des fonctionnalités utiles telles que:
          * Séparation par __domaine/site__
          * __Génération aléatoire__ des noms de comptes, des mots de passe
          * Gestion de __schéma__ pour la génération aléatoire
          * __Cryptage__ des fichiers de sauvegarde
          * Synchronisation avec __Google Drive__
          * __Backup automatique__ des sauvegardes
        `
      },
      {
        nom: 'Diaballik',
        type: 'Projet de formation',
        temps: {
          debut: '2017/05',
          fin: '2017/07'
        },
        technologies: ['Java', 'JavaFX'],
        images: [
          {
            titre: 'Menu',
            url: 'https://github.com/Nelgamix/ProjetDiaballik/raw/master/screenshots/menu.png'
          },
          {
            titre: 'Nouvelle partie',
            url: 'https://github.com/Nelgamix/ProjetDiaballik/raw/master/screenshots/newGame.png'
          },
          {
            titre: 'Charger partie',
            url: 'https://github.com/Nelgamix/ProjetDiaballik/raw/master/screenshots/loadGame.png'
          },
          {
            titre: 'Jeu avec les labels',
            url: 'https://github.com/Nelgamix/ProjetDiaballik/raw/master/screenshots/gameWithLabel.png'
          },
          {
            titre: 'Jeu',
            url: 'https://github.com/Nelgamix/ProjetDiaballik/raw/master/screenshots/game.png'
          },
          {
            titre: 'Contre l\'IA',
            url: 'https://github.com/Nelgamix/ProjetDiaballik/raw/master/screenshots/vsAI.png'
          }
        ],
        liens: [
          {
            nom: 'GitHub',
            url: 'https://www.github.com/Nelgamix/ProjetDiaballik'
          }
        ],
        description: `
          Développement d'un jeu à partir des règles d'un jeu de plateau, en Java et à l'aide de JavaFX pour l'interface.
          Projet réalisé à 5 et comportant les éléments suivants:
          * Sauvegardes de la partie
          * Undo/redo
          * IA facile, moyen, difficile
          * Jeu en réseau à 2
        `
      },
      {
        nom: 'Python Subtitles Utilities',
        type: 'Projet personnel',
        temps: {
          debut: '2016/04',
          fin: '2016/05'
        },
        technologies: ['Python'],
        liens: [
          {
            nom: 'GitHub',
            url: 'https://www.github.com/Nelgamix/python_subtitles_utilities'
          }
        ],
        description: `
          Script Python permettant de réaliser différentes actions sur un fichier de sous-titres:
          * Décaler les sous-titres
          * Renommer tous les fichiers de sous-titre détectés dans un dossier en faisant une reconnaissance
          automatique avec les fichiers vidéos trouvés
          Certaines fonctionnalitées utiles ont été implantées:
          * Détection automatique des fichiers de sous-titre et des fichiers vidéo
          * Fichier de configuration si la détection échoue
          * Backup automatique
        `
      }
    ]
  },
  contacts: [
    {
      nom: 'Huchet',
      prenom: 'Nicolas',
      email: 'nelgamix@gmail.com',
      commentaires: 'Mon adresse email de Google'
    },
    {
      nom: 'Huchet',
      prenom: 'Nicolas',
      email: 'contact@skysurf.ovh',
      commentaires: 'Mon adresse email fournie par OVH pour master.skysurf'
    },
    {
      nom: 'Huchet',
      prenom: 'Nicolas',
      email: 'nicolas.huchet@etu.univ-grenoble-alpes.fr',
      commentaires: 'Mon adresse email de l\'UGA (école)'
    }
  ]
};
