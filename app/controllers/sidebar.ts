import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {SocialLink} from '../interfaces/sociallink';

@Component({
  selector: 'app-sidebar',
  templateUrl: '/app/templates/sidebar.html',
  providers: [HTTP_PROVIDERS]
})

export class SidebarComponent {
  sociallinks: SocialLink[];

  constructor(http: Http) {
    http.get('/api/sociallinks.json').subscribe(sociallinks => this.sociallinks = sociallinks.json());
  }
}