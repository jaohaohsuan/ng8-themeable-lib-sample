import { NgModule } from '@angular/core';
import { TestLibComponent } from './test-lib.component';
import { TimelineDirective } from './timeline.directive';



@NgModule({
  declarations: [TestLibComponent, TimelineDirective],
  imports: [
  ],
  exports: [TestLibComponent]
})
export class TestLibModule { }
