import {Component, Input} from '@angular/core';
import {CommonModule, JsonPipe} from '@angular/common';
import {debounceTime, distinctUntilChanged, map, Observable, OperatorFunction} from "rxjs";
import {FormsModule} from "@angular/forms";
import {NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {PrenotazioneService} from "../../prenotazione.service";
import {Prenotazione} from "../../prenotazione";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-stand',
  standalone: true,
  imports: [CommonModule, NgbTypeaheadModule, FormsModule, JsonPipe],
  templateUrl: './header-stand.component.html',
  styles: [
    `
			.form-control {
				width: 300px;
			}
		`,
  ],
})
export class HeaderStandComponent {
  public model: any;
  o:Prenotazione [];


 // public model: any;

  @Input() nomeLista: Prenotazione[];

  constructor(private es: PrenotazioneService, private router: Router) {
  }

  s: Observable<any> = this.es.getPrenotazioneList();




  reload() {
    this.es.getPrenotazioneList().subscribe(
      (res: any) => {
        this.nomeLista = res.content;

      }
    );
  }





}
