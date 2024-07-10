import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: 'users',title:"Obs App | Users", component: UserComponent },
  { path: '**', component: PageNotFoundComponent},
];
