import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() primaVoce: string = "Lista Prenotazione";
  @Input() secondaVoce: string = "Add Prenotazione";

  @Output() simone: EventEmitter<string> = new EventEmitter<string>();

  emitSomething() {
    this.simone.emit('ciao');
  }
}
