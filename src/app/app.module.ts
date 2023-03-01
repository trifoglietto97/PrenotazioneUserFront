import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrenotaComponent } from './prenota/prenota.component';
import { ModificaPrenotazioneComponent } from './modifica-prenotazione/modifica-prenotazione.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DettagliComponent } from './dettagli/dettagli.component';
import {PrenotazioneListComponent} from "./prenotazione-list/prenotazione-list.component";
import {NgxPaginationModule} from "ngx-pagination";
import { HeaderComponent } from './components/header/header.component';
import {HeaderStandComponent} from "./components/header-stand/header-stand.component";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {NzAutocompleteModule} from "ng-zorro-antd/auto-complete";

registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent,
    PrenotaComponent,
    ModificaPrenotazioneComponent,
    DettagliComponent,
    PrenotazioneListComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxPaginationModule,
    HeaderStandComponent,
    NzAutocompleteModule

  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
