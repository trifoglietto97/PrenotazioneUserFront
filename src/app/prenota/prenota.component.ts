import {Component, OnInit} from '@angular/core';
import {Prenotazione} from "../prenotazione";
import {PrenotazioneService} from "../prenotazione.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-prenota',
  templateUrl: './prenota.component.html',
  styleUrls: ['./prenota.component.css']
})
export class PrenotaComponent implements OnInit{


  prenotazione: Prenotazione = new Prenotazione();
  submitted = false;

  constructor(private es:PrenotazioneService, private router: Router) {
  }
  ngOnInit(): void {
  }

  save(){
    this.es.creaPrenotazione(this.prenotazione).subscribe(()=>{
      this.prenotazione = new Prenotazione();
      this.gotoList();
    });
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }


  private gotoList() {
    this.router.navigate(['/prenotazione']);

  }
}
