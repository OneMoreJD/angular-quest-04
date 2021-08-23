import { Routes } from "@angular/router";
import { UserProfileComponent } from '../pages/user-profile/user-profile.component';
import { SignUpComponent } from '../pages/sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';

const ROUTES: Routes = [
  { path: '', component: UserProfileComponent},
  { path: 'user', component: UserProfileComponent },
  { path: 'sign-up', component: SignUpComponent },
];

export { ROUTES };
