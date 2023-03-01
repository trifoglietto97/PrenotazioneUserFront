import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Prenotazione} from "../prenotazione";
import {PrenotazioneService} from "../prenotazione.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-prenotazione-list',
  templateUrl: './prenotazione-list.component.html',
  styleUrls: ['./prenotazione-list.component.css'],
})
export class PrenotazioneListComponent implements OnInit {

  prenotazione: Observable<Prenotazione[]>;
  o: Prenotazione [];
  p: number = 1;

  inputValue: string = '';
  filteredOptions: string[] = [];


  constructor(private es: PrenotazioneService, private router: Router) {
  }


  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.es.getPrenotazioneList().subscribe(
      (res: any) => {
        this.o = res.content;
      }
    );
  }

  deletePrenotazione(id: number) {
    this.es.deletePrenotazione(id).subscribe((a: any) => {
      this.reload();
    });
  }

  dettagliPrenotazione(id: number) {
    this.router.navigate(['dettagli', id]);
  }

  onChange(value: string): void {
    console.log(this.inputValue);
   if(this.inputValue.length < 1){
     this.reload();
   }
   else {
     this.es.filter(value).subscribe(list => {
       this.filteredOptions = list.map(prenotazione => prenotazione.nomePrenotazione);
       this.o = list;

     });
   }
  }

}
