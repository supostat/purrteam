import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from "./login/login.component";

const routes:Routes = [
  {path: '', component: LoginComponent},
  {path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes);
