import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {
  userIsLoggedIn: boolean = true;
  username: string = 'Sarus';

  changeTest(){
    this.userIsLoggedIn = !this.userIsLoggedIn;
  }

}
