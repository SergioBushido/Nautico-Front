import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SociosComponent } from './components/socios/socios.component';
import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found-component.component';
import { HomeComponent } from './components/home/home.component';
import { BarcoComponent } from './components/barco/barco.component';
import { FormsModule } from '@angular/forms';
import { PatronComponent } from './components/patron/patron.component';

@NgModule({
  declarations: [
    AppComponent,
    SociosComponent,
    PageNotFoundComponent,
    HomeComponent,
    BarcoComponent,
    PatronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
