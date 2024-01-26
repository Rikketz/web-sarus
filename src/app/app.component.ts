import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { JuegosComponent } from './juegos/juegos.component';
import { RelatosComponent } from './relatos/relatos.component';
import { TutorialesComponent } from './tutoriales/tutoriales.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    JuegosComponent,
    RelatosComponent,
    TutorialesComponent,
    UserProfileComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'sarus';
}
