import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <lib-test-lib></lib-test-lib>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title =                                                                  'web-app';
}
