import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  templateUrl: '/app/templates/index.html',
  directives: [ROUTER_DIRECTIVES]
})

export class IndexComponent {
  public page: string = 'Index';

  playName() {
    var audio = new Audio('/assets/jakub.ogg');
    audio.play();
  }
}