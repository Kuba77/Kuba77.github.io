import {AMERICAN_GRADES} from '../interfaces/school';

import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {School} from '../interfaces/school';
import {Certificate} from '../interfaces/certificate';

@Component({
  templateUrl: '/app/templates/education.html'
})

export class EducationComponent {
  public page: string = 'Education';

  american_grades = AMERICAN_GRADES;
  
  schools: School[];
  certificates: Certificate[];

  constructor(http: Http) {
    http.get('/api/certificates.json').subscribe(certificates => this.certificates = certificates.json());
    http.get('/api/schools.json').subscribe(schools => this.schools = schools.json());
  }
}