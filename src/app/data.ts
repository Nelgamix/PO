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
      nom: 'Angular',
      version: 6,
      description: '',
      icone: '',
      liens: []
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
      technologies: ['Angular', 'Bootstrap', 'PHP'],
      images: [''],
      liens: [
        {
          nom: 'Site',
          url: 'https://master.skysurf.ovh'
        }
      ],
      description: `
        Création d'un site utile pour les étudiants en Master Informatique à l'UGA.
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
