import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {Prenotazione} from "./prenotazione";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

  private url= 'http://localhost:8080/api/pageOf';
  private url1 = 'http://localhost:8080/api/prenotazione';

  private url2 = 'http://localhost:8080/api/search';

  constructor(private http: HttpClient) { }

  getPrenotazioneList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  deletePrenotazione(id: number)  {
    return this.http.delete(`${this.url1}/${id}`);
  }

  creaPrenotazione(prenotazione: Prenotazione): Observable<any>{
    return this.http.post(`${this.url1}`, prenotazione);

  }

  filter(name: string): Observable<Prenotazione[]> {
    let params = new HttpParams().set('filter', name);
    return this.http.get<Prenotazione[]>(`${this.url2}/${name}`, {params: params});
  }


}
