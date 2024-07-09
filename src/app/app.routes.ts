import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'users',title:"Obs App | users", component: UserComponent },
];
