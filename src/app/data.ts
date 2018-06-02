import {JSONDocument} from './data-types';

export const poData: JSONDocument = {
  infos: {
    nom: 'Huchet',
    prenom: 'Nicolas',
    image: 'assets/lastskyphoenix.png',
    poste: 'Informaticien/Développeur',
    naissance: '1996/01/29',
    ville: 'Le Versoud',
    permis: true,
    liens: [
      {
        nom: 'GitHub',
        utilisateur: '@Nelgamix',
        url: 'https://github.com/Nelgamix',
        image: 'assets/github.png',
        cacher: false
      },
      {
        nom: 'LinkedIn',
        utilisateur: 'Nicolas Huchet',
        url: 'https://www.linkedin.com/in/nicolas-huchet-82b268a8/',
        image: 'assets/linkedin.png',
        cacher: false
      },
      {
        nom: 'Mail',
        utilisateur: 'contact@skysurf.ovh',
        url: 'mailto:contact@skysurf.ovh',
        image: 'assets/mail.ico',
        cacher: true
      },
      {
        nom: 'CV',
        url: '#',
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
              'Bash',
              'Batch'
            ]
          },
          {
            domaine: 'Web',
            competences: [
              'HTML',
              'CSS',
              'JavaScript',
              'PHP'
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
        debut: '2017',
        fin: '2019',
        lieu: 'UGA, Grenoble'
      },
      {
        nom: 'Licence, 3ème année',
        domaine: 'Informatique',
        debut: '2016',
        fin: '2017',
        lieu: 'UGA, Grenoble'
      },
      {
        nom: 'DUT',
        domaine: 'Informatique',
        debut: '2014',
        fin: '2016',
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
      description: 'Langage de balisage permettant de structurer une page web.',
      icone: 'assets/html.png'
    },
    {
      nom: 'CSS',
      version: 3,
      description: 'Langage contextuel permettant de styliser une page web.',
      icone: 'assets/css.png'
    },
    {
      nom: 'JavaScript',
      description: 'Langage de script permettant de manipuler une page web et de programmer des comportements.',
      icone: 'assets/js.png'
    },
    {
      nom: 'Angular',
      version: 6,
      description: 'Framework pour le développement d\'applications web Single Page Application.',
      icone: 'assets/angular.png'
    },
    {
      nom: 'Bootstrap',
      version: 4,
      description: 'Framework pour le développement d\'applications web responsive.',
      icone: 'assets/bootstrap.png'
    },
    {
      nom: 'PHP',
      version: 7,
      description: 'Langage côté serveur.',
      icone: 'assets/php.png'
    },
    {
      nom: 'Java',
      version: 8,
      description: 'Langage de programmation multi-plateforme par Oracle.',
      icone: 'assets/java.png'
    },
    {
      nom: 'JavaFX',
      version: 8,
      description: 'Framework pour créer des interfaces avec Java.'
    },
    {
      nom: 'Google Drive',
      description: 'Service de stockage de fichiers en ligne de Google.',
      icone: 'assets/gdrive.png'
    },
    {
      nom: 'Python',
      version: 3.6,
      description: 'Langage de script interprété',
      icone: 'assets/python.png'
    }
  ],
  experiences: [
    {
      entreprise: 'Capgemini',
      poste: 'Alternance',
      debut: '09/2018',
      fin: '09/2019',
      technologies: ['Java', 'HTML'],
      description: ''
    }
  ],
  projets: [
    {
      nom: 'Master App',
      type: 'Projet personnel',
      debut: '2017/06',
      fin: '2018/03',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Bootstrap', 'PHP'],
      images: [
        'https://github.com/Nelgamix/PasswordManager/raw/master/screenshots/app.png',
        'https://github.com/Nelgamix/PasswordManager/raw/master/screenshots/edition_domaine.png'
      ],
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
      nom: 'PasswordManager',
      type: 'Projet personnel',
      debut: '2017/06',
      fin: '2017/07',
      technologies: ['Java', 'JavaFX', 'Google Drive'],
      images: [
        'https://github.com/Nelgamix/PasswordManager/raw/master/screenshots/app.png',
        'https://github.com/Nelgamix/PasswordManager/raw/master/screenshots/edition_domaine.png'
      ],
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
      type: 'Projet en étude',
      debut: '2017/05',
      fin: '2017/06',
      technologies: ['Java', 'JavaFX'],
      images: [
        'https://github.com/Nelgamix/ProjetDiaballik/raw/master/screenshots/menu.png',
        'https://github.com/Nelgamix/ProjetDiaballik/raw/master/screenshots/newGame.png',
        'https://github.com/Nelgamix/ProjetDiaballik/raw/master/screenshots/loadGame.png',
        'https://github.com/Nelgamix/ProjetDiaballik/raw/master/screenshots/gameWithLabel.png',
        'https://github.com/Nelgamix/ProjetDiaballik/raw/master/screenshots/game.png',
        'https://github.com/Nelgamix/ProjetDiaballik/raw/master/screenshots/vsAI.png'
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
      debut: '2016/04',
      fin: '2016/04',
      technologies: ['Python'],
      liens: [
        {
          nom: 'GitHub',
          url: 'https://www.github.com/Nelgamix/python_subtitles_utilities'
        }
      ],
      description: `
      `
    }
  ],
  contacts: [
    {
      nom: 'Huchet',
      prenom: 'Nicolas',
      email: 'truc@test.com'
    }
  ]
};
