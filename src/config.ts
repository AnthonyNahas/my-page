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
    description:
      'Open Source Library for Angular Web Apps to integrate a ' +
      'material user interface for firebase authentication.',
    imageURL: 'https://raw.githubusercontent.com/AnthonyNahas/ngx-auth-firebaseui/HEAD/assets/v1.0.0/png/signin.png',
    url: 'https://github.com/AnthonyNahas/ngx-auth-firebaseui'
  },
  {
    name: 'ngx-linkifyjs',
    description:
      ' Angular V7 Open Source Library as a wrapper for linkifyjs ' +
      '- library for finding links in plain text and converting them to HTML < a > tags via linkifyjs',
    imageURL: 'https://cdn.jsdelivr.net/gh/anthonynahas/ngx-linkifyjs@master/demo/src/assets/logo.svg',
    url: 'https://github.com/AnthonyNahas/ngx-linkifyjs'
  },
  {
    name: 'angular-material-extensions/password-strength',
    description:
      'Open Source Angular Library - Material password strength meter' +
      ' to indicate how secure is the provided password - Angular V7 supported',
    imageURL:
      'https://raw.githubusercontent.com/angular-material-extensions/password-strength/HEAD/assets/v3.2.0/demo.gif',
    url: 'https://github.com/angular-material-extensions/password-strength'
  },
  {
    name: 'angular-material-extensions/google-maps-autocomplete',
    description:
      'Autocomplete input component for google-maps built with ' + 'angular material design as an Open Source Library',
    imageURL:
      'https://raw.githubusercontent.com/angular-material-extensions/google-maps-autocomplete/HEAD/assets/demo1.gif',
    url: 'https://github.com/angular-material-extensions/google-maps-autocomplete'
  },
  {
    name: 'angular-material-extensions/pages',
    description:
      'Open source library for Angular Apps to illustrate custom' +
      ' material pages content with steps (ideal for tutorials and explanation purposes)' +
      '- Angular V7 supported',
    imageURL: 'https://cdn.jsdelivr.net/gh/angular-material-extensions/pages@master/assets/demo.gif',
    url: 'https://github.com/angular-material-extensions/pages'
  },
  {
    name: 'angular-material-extensions/link-preview',
    description:
      'Angular open source UI library to preview web links powered' + ' by ngx-linkifyjs and material design',
    imageURL: 'https://cdn.jsdelivr.net/gh/angular-material-extensions/link-preview/assets/demo1.gif',
    url: 'https://github.com/angular-material-extensions/link-preview'
  },
  {
    name: 'angular-material-extensions/contacts',
    description:
      'Open Source Angular Library to manage contacts and users with' + ' a material design (Angular V7 supported)',
    imageURL: 'https://raw.githubusercontent.com/angular-material-extensions/contacts/HEAD/assets/demo2.gif',
    url: 'https://github.com/angular-material-extensions/contacts'
  },
  // {
  //   name: 'angular-material-extensions/freelance-page',
  //   description: 'Open Source Angular Material Theme for freelancers based on Start Bootstrap Theme',
  //   imageURL: 'https://raw.githubusercontent.com/angular-material-extensions/freelance-page/HEAD/assets/MDPI_SCREEN.png',
  //   //  url: 'https://github.com/angular-material-extensions/freelancer-theme'
  // },
  {
    name: 'firebaseui/ng-bootstrap',
    description: 'Open Source Angular Bootstrap UI library for firebase' + ' authentication powered by @ng-bootstrap',
    imageURL: 'https://raw.githubusercontent.com/firebaseui/ng-bootstrap/HEAD/assets/v2.0.0/sign_in_up.png',
    url: 'https://github.com/firebaseui/ng-bootstrap'
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
      'I am Fullstack Software - Mobile App Developer and love programming with JavaScript,' +
      ' TypeScript and Java. For the frontend I use Angular. Backend comes ' +
      'NodeJS in use. Java/Kotlin will play the role of developing native mobile apps. ',
    section2:
      'Hybrid mobile apps for android un ios is again developed with angular' +
      ' and ionic. If I do not implement a backend, then I usually use Firebase.' +
      ' And at the end of the day I make a backup for my MongoDB where I save the data.'
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
