import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PrenotazioneListComponent} from "./prenotazione-list/prenotazione-list.component";
import {DettagliComponent} from "./dettagli/dettagli.component";
import {PrenotaComponent} from "./prenota/prenota.component";

const routes: Routes = [
  {path: '', redirectTo: 'prenotazione', pathMatch: 'full'},
  {path: 'prenotazione', component: PrenotazioneListComponent},
  {path: 'dettagli/:id', component: DettagliComponent},
  {path: 'add', component: PrenotaComponent}

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
