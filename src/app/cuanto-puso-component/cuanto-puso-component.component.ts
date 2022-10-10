import { Component } from '@angular/core';
import { Participante } from "../models/participante";

@Component({
  selector: 'app-cuanto-puso-component',
  templateUrl: './cuanto-puso-component.component.html',
  styleUrls: ['./cuanto-puso-component.component.css']
})
export class CuantoPusoComponentComponent{

  participantesArray : Participante[] = [
    {id: 1, nombre: "Bauti", cantidad:100},
    {id: 2, nombre: "Juan", cantidad:1000},
    {id: 3, nombre: "Claudio", cantidad:1000},
    {id: 4, nombre: "San Migel de Astirias", cantidad:1000},
    {id: 5, nombre: "Claudia", cantidad:1000},
    {id: 6, nombre: "Vero", cantidad:1000},
  ];

  participanteSeleccionado:Participante = new Participante();

  agregarEditarParticipante(){
    this.participanteSeleccionado.id = this.participantesArray.length + 1;
    this.participantesArray.push(this.participanteSeleccionado);

    this.participanteSeleccionado = new Participante();
  }

}
