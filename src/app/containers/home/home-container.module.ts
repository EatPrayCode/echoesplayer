import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeContainerComponent } from './home-container/home-container.component';

export const routes = [
  {
    path: '', component: HomeContainerComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    HomeContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeContainerModule { }
