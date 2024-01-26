import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JuegosComponent } from './juegos/juegos.component';
import { RelatosComponent } from './relatos/relatos.component';
import { TutorialesComponent } from './tutoriales/tutoriales.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'juegos',
    component: JuegosComponent,
    title: 'Juegos page'
  },
  {
    path: 'relatos',
    component: RelatosComponent,
    title: 'Relatos page'
  },
  {
    path: 'tutoriales',
    component: TutorialesComponent,
    title: 'Tutoriales page'
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    title: 'Profile page'
  }
];

