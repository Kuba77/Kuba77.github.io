import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {IndexComponent} from './index';
import {EducationComponent} from './education';
import {ExperienceComponent} from './experience';
import {SidebarComponent} from './sidebar';
import {FooterComponent} from './footer';

@Component({
  selector: 'app',
  templateUrl: '/app/templates/app.html',
  directives: [ROUTER_DIRECTIVES, SidebarComponent, FooterComponent]
})

@RouteConfig([
  {path: '/', name: 'Index', component: IndexComponent, useAsDefault: true},
  {path: '/education', name: 'Education', component: EducationComponent},
  {path: '/experience', name: 'Experience', component: ExperienceComponent}
])

export class AppComponent {
  public title: string = 'Chronowski';

  constructor(public router: Router) { }
}