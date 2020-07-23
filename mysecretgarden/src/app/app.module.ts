import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// import { Authinterceptor } from './shared/interceptors/authinterceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './shared/classes/profile/profile.component';
import { CardContainerComponent } from './shared/classes/card-container/card-container.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    CardContainerComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  // providers: [{ provide: HTTP_INTERCEPTORS, useClass: Authinterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
