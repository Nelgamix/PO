import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ExpproComponent } from './exppro/exppro.component';
import { ProjetsComponent } from './projets/projets.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {MarkdownModule} from 'ngx-markdown';
import {MomentModule} from 'ngx-moment';
import { TechnologieDescriptionComponent } from './technologie-description/technologie-description.component';
import { FilterProjetPipe } from './filter-projet.pipe';
import {FormsModule} from '@angular/forms';
import { FilterExperiencePipe } from './filter-experience.pipe';
import { TechnologiesComponent } from './technologies/technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AccueilComponent,
    ExpproComponent,
    ProjetsComponent,
    TechnologieDescriptionComponent,
    FilterProjetPipe,
    FilterExperiencePipe,
    TechnologiesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MomentModule,
    MDBBootstrapModule.forRoot(),
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
