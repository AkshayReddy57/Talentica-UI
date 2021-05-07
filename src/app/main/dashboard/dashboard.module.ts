import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbCarouselModule,
  NgbAlertModule,
  NgbToastModule,NgbModule
} from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    NgbToastModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [DashboardComponent, NavBarComponent],
})
export class DashboardModule {}
