
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PrivateComponent } from './pages/private/private.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { authGuard2 } from './shared/guards/auth2.guard';
import { CoursesComponent } from './pages/courses/courses.component';
import { CoursesDetailComponent } from './pages/courses-detail/courses-detail.component';
import { CoachesDetailComponent } from './pages/coaches-detail/coaches-detail.component';
import { CoachesComponent } from './pages/coaches/coaches.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },{
    path:'', component: LoginComponent
  },{
    path: 'register', component: RegisterComponent
  },{
    path: 'private', component: PrivateComponent, canActivate: [authGuard2]
  },{
    path: 'coaches', component: CoachesComponent
  },{
    path: 'coaches/:id', component: CoachesDetailComponent
  },{
    path: 'class', component: CoursesComponent
  },{
    path: 'class/:id', component: CoursesDetailComponent
  },{
    path: 'users', component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
