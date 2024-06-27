import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SociosComponent } from './components/socios/socios.component';
import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found-component.component';
import { HomeComponent } from './components/home/home.component';
import { BarcoComponent } from './components/barco/barco.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatronComponent } from './components/patron/patron.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptor } from './auth.interceptor';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { PasswordRecoveryService } from './services/password-recovery.service';
import { ContactComponent } from './components/contact/contact.component';
import { ClubComponent } from './components/club/club.component';
import { GimnasioComponent } from './components/gimnasio/gimnasio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatRadioModule } from '@angular/material/radio';
import { NatacionComponent } from './components/natacion/natacion.component';
import { TenisComponent } from './components/tenis/tenis.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TransparenciaComponent } from './components/transparencia/transparencia.component';


@NgModule({
  declarations: [
    AppComponent,
    SociosComponent,
    PageNotFoundComponent,
    HomeComponent,
    BarcoComponent,
    PatronComponent,
    LoginComponent,
    RegisterComponent,
    PasswordRecoveryComponent,
    ContactComponent,
    ClubComponent,
    GimnasioComponent,
    NatacionComponent,
    TenisComponent,
    NoticiasComponent,
    TransparenciaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    PasswordRecoveryService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
