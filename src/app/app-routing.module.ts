import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  {path:'', redirectTo: '/landing', pathMatch: 'full'},
  {path:'landing',component:LandingComponent, data: {}},

  {path:'blog',component:BlogComponent, data: {}},

  {path:'home',component:HomeComponent, data: {}},
  
  {path:'login',component:LoginComponent, data: {}},
  {path:'register',component:RegisterComponent, data: {}},

  {path:'404',component:PagenotfoundComponent, data: {}},
  {path:'**',redirectTo: '/404', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
