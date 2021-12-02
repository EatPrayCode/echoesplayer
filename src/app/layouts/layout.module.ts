import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BlankComponent } from './blank/blank.component';

@NgModule({
  declarations: [
    BlankComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: []
})
export class LayoutsModule { }
