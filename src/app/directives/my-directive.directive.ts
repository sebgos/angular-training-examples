import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }

  @Input() set appMyDirective(shouldAdd: boolean) {
    if (shouldAdd) {
      // if condition is true add template to DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
     // else remove template from DOM
      this.viewContainer.clear();
    }
  }
}
