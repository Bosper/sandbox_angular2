import { provideRouter, RouterConfig } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { DetailComponent } from './detail.component';
import { HomeLocal } from './home.component';
import { OperWorld } from './world.component';

export const routes: RouterConfig = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'tasks', component: DetailComponent },
  { path: 'sweetshop', component: DashboardComponent },
  { path: 'home', component: HomeLocal },
  { path: 'world', component: OperWorld },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'  },
  { path: 'detail/:id', component: DetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];