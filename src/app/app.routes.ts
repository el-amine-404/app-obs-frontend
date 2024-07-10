import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home',title:"Obs App | Home", component: HomeComponent },
  { path: 'users',title:"Obs App | Users", component: UserComponent },
  { path: 'about',title:"Obs App | About", component: AboutComponent },
  { path: 'login',title:"Obs App | Login", component: LoginComponent },
  { path: '**', component: PageNotFoundComponent},
];
