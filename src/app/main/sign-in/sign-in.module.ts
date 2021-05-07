import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbCarouselModule,
  NgbAlertModule,
  NgbToastModule,
} from '@ng-bootstrap/ng-bootstrap';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    NgbToastModule,
    SignInRoutingModule,
  ],
  declarations: [SignInComponent],
})
export class SignInModule {}
