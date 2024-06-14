import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; // Importar HomeComponent
import { SociosComponent } from './components/socios/socios.component';
import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found-component.component';
import { BarcoComponent } from './components/barco/barco.component';
import { PatronComponent } from './components/patron/patron.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'socios', component: SociosComponent },
  { path: 'barcos', component: BarcoComponent },
  { path: 'patrones', component: PatronComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
