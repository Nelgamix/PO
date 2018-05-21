import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from '../contact/contact.component';
import {AccueilComponent} from '../accueil/accueil.component';
import {ProjetsComponent} from '../projets/projets.component';
import {ExpproComponent} from '../exppro/exppro.component';

const appRoutes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'exppro',  component: ExpproComponent},
  {path: 'projets', component: ProjetsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '',        redirectTo: '/accueil', pathMatch: 'full'},
  {path: '**',      component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
