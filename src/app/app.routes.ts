import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { PagesComponent } from './layouts/pages/pages.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./containers/user/index').then(m => m.UserModule) }
];

export const ROUTES1: Routes = [
    {
        path: '',
        component: BlankComponent,
        // component: KitchensinkComponent,
        children: [
            { path: '', loadChildren: () => import('./containers/landing/landing-container.module').then(m => m.LandingContainerModule) },
        ]
    },
    {
        path: '',
        component: PagesComponent,
        // component: KitchensinkComponent,
        children: [
            { path: 'home', loadChildren: () => import('./containers/user/index').then(m => m.UserModule) },
            // { path: 'home', loadChildren: () => import('./containers/home/home-container.module').then(m => m.HomeContainerModule) }
        ]
    },
];