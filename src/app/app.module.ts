import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ExpproComponent } from './exppro/exppro.component';
import { ProjetsComponent } from './projets/projets.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {MarkdownModule} from 'ngx-markdown';
import {MomentModule} from 'ngx-moment';
import { TechnologieDescriptionComponent } from './technologie-description/technologie-description.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AccueilComponent,
    ExpproComponent,
    ProjetsComponent,
    TechnologieDescriptionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MomentModule,
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
