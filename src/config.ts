import { Config, Project } from './config.interface';
import { InjectionToken } from '@angular/core';

export { Config } from './config.interface';

const exampleProjectDescription: string =
  'Lorem ipsum dolor sit amet, ' +
  'consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil,' +
  ' molestias magnam, recusandae quos quis inventore quisquam velit asperiores,' +
  ' vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.';

const projects: Project[] = [
  {
    name: 'ngx-auth-firebaseui',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/cabin.png'
  },
  {
    name: 'firebaseui/ng-bootstrap',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/cabin.png'
    // url : 'https://github.com/firebaseui/ng-bootstrap'
  },
  {
    name: 'ngx-linkifyjs',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/cake.png'
  },
  {
    name: 'angular-material-extensions/password-strength',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/circus.png'
  },
  {
    name: 'angular-material-extensions/google-maps-autocomplete',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/game.png'
  },
  {
    name: 'angular-material-extensions/pages',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/safe.png'
  },
  {
    name: 'angular-material-extensions/link-preview',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/submarine.png'
  },
  {
    name: 'angular-material-extensions/contacts',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/submarine.png'
  },
  {
    name: 'angular-material-extensions/freelance-page',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/submarine.png'
  }
];

export const DEFAULT_CONFIG: Config = {
  title: 'Anthony Nahas',
  description: 'Software - Backend - Frontend and Mobile App Developer',
  url: 'https://github.com/AnthonyNahas/my-page',
  domain: 'github.com',
  projects: projects,
  about: {
    section1:
      'This Freelancer Theme is a free material theme created by angular material extensions based on Start' +
      ' Bootstrap.The download includes the complete source files including HTML, CSS, and JavaScript as well as ' +
      'optional LESS stylesheets for easy customization.',
    section2:
      'Whether you are a student looking to showcase your work, a' +
      ' professional looking to attract clients, or a graphic artist looking to share your projects, this template ' +
      'is the perfect starting point!'
  },
  social: {
    twitter: 'https://twitter.com/ngAnthonyy',
    github: 'https://github.com/AnthonyNahas',
    linkedin: 'https://www.linkedin.com/in/anthony-nahas-926245119/'
  },
  address: {
    country: 'Germany',
    state: 'Niedersachen',
    city: 'Göttingen'
  }
};

export const ConfigToken = new InjectionToken<Config>('AngularMaterialFreelancerThemeConfig');
