import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; // Importar HomeComponent
import { SociosComponent } from './components/socios/socios.component';
import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found-component.component';
import { BarcoComponent } from './components/barco/barco.component';
import { PatronComponent } from './components/patron/patron.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth.guard';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { ContactComponent } from './components/contact/contact.component';
import { ClubComponent } from './components/club/club.component';
import { GimnasioComponent } from './components/gimnasio/gimnasio.component';
import { NatacionComponent } from './components/natacion/natacion.component';
import { TenisComponent } from './components/tenis/tenis.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { TransparenciaComponent } from './components/transparencia/transparencia.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'socios', component: SociosComponent },
  { path: 'barcos', component: BarcoComponent },
  { path: 'patrones', component: PatronComponent },
  { path: 'login', component: LoginComponent },
  { path: 'password-recovery', component: PasswordRecoveryComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'club', component: ClubComponent },
  { path: 'gimnasio', component: GimnasioComponent },
  { path: 'natacion', component: NatacionComponent },
  { path: 'tenis', component: TenisComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'transparencia', component: TransparenciaComponent },
  { path: 'cita', component: ClubComponent },


  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
