import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'workshop',
    loadComponent: () => import('./components/workshop/workshop.component').then(m => m.WorkshopComponent)
  },
  {
    path: 'trainingen',
    loadComponent: () => import('./components/trainingen/trainingen.component').then(m => m.TrainingenComponent)
  },
  {
    path: 'maps',
    loadComponent: () => import('./components/maps/maps.component').then(m => m.MapsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent)
  },
  { path: '**', redirectTo: 'home' }
];
