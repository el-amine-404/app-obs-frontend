import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NAVBAR_CONFIGURATIONS } from './navbar.configuration';
import { NAVBAR_ROUTES_CONFIGURATION } from './navbar.routes.configuration';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navbarConfiguration=NAVBAR_CONFIGURATIONS;
  navbarRouteConfiguration=NAVBAR_ROUTES_CONFIGURATION;

}
