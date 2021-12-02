import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LandingContainerComponent } from './landing-container/landing-container.component';

export const routes = [
  {
    path: '', component: LandingContainerComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    LandingContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LandingContainerModule { }
