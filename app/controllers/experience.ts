import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {Project} from '../interfaces/project';

@Component({
  templateUrl: '/app/templates/experience.html',
  providers: [HTTP_PROVIDERS]
})

export class ExperienceComponent {
  public page: string = 'Experience';
  public active_language: string = '';
  public active_technology: string = '';
  public languages: string[] = [];
  public stack: string[] = [];

  projects: Project[];

  constructor(http: Http) {
    http.get('/api/projects.json').subscribe(projects => this.projects = projects.json());
  }
}
