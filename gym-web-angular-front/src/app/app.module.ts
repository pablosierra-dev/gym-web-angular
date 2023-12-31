
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { PrivateComponent } from './pages/private/private.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { CoachesComponent } from './pages/coaches/coaches.component';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { FooterComponent } from './shared/component/footer/footer.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CoursesDetailComponent } from './pages/courses-detail/courses-detail.component';
import { CoachesDetailComponent } from './pages/coaches-detail/coaches-detail.component';
import { UsersComponent } from './pages/users/users.component';
// register Swiper custom elements
register();


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    PrivateComponent,
    NavbarComponent,
    CoachesComponent,
    CoachesDetailComponent,
    FooterComponent,
    CoursesComponent,
    CoursesDetailComponent,
    UsersComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
