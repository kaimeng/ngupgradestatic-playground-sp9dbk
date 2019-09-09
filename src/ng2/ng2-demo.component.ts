import {Component} from '@angular/core';


@Component({
  selector: 'ng2Demo',
  template: `
    <versionStamp></versionStamp>
    <ng1Demo [username]="username"></ng1Demo>
  `,
})
export class Ng2DemoComponent {
  static selector = 'ng2Demo';
  username = 'ngUpgrade';
}
