import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PrivateComponent } from './pages/private/private.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { authGuard2 } from './shared/guards/auth2.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },{
    path:'login', component: LoginComponent
  },{
    path: 'register', component: RegisterComponent
  },{
    path: 'private', component: PrivateComponent, canActivate: [authGuard2]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
