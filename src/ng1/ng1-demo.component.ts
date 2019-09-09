import {Directive, ElementRef, Injector, Input} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';


export const ng1DemoComponent = {
  selector: 'ng1Demo',
  template: 'Hello, {{ $ctrl.username }}!',
  bindings: {
    username: '<',
  },
  controller: class Ng1DemoComponent {
    username: string;
  },
};

@Directive({selector: ng1DemoComponent.selector})
export class Ng1DemoComponentFacade extends UpgradeComponent {
  @Input() username: string;
  
  constructor(elementRef: ElementRef, injector: Injector) {
    super(ng1DemoComponent.selector, elementRef, injector);
  }
}
