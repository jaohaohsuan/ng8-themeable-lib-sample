import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import {TestLibModule} from 'test-lib';


@NgModule({
  declarations: [SecurityComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    TestLibModule
  ]
})
export class SecurityModule { }
