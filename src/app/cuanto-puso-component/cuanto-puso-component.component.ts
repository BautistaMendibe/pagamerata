import { Component } from '@angular/core';
import { Participante } from "../models/participante";

@Component({
  selector: 'app-cuanto-puso-component',
  templateUrl: './cuanto-puso-component.component.html',
  styleUrls: ['./cuanto-puso-component.component.css']
})
export class CuantoPusoComponentComponent{

  participantesArray : Participante[] = [];

  participanteSeleccionado:Participante = new Participante();

  agregarEditarParticipante(){

    // Ver qué onda esto por qué no funciona
    //if(this.participanteSeleccionado.nombre === null || this.participanteSeleccionado.cantidad === null){
    //  alert("Debe agregar todos los campos")
    //}

    // Si el id=0 no hay ningún empleado seleccionado y se quiere agregar uno
    if(this.participanteSeleccionado.id === 0){
      this.participanteSeleccionado.id = this.participantesArray.length + 1;
      this.participantesArray.push(this.participanteSeleccionado);
    }

    this.participanteSeleccionado = new Participante();
  }

  abrirParaEditar(participante: Participante){
    this.participanteSeleccionado = participante;
  }

  eliminarParticipante(participante:Participante){
    if(confirm("Estás seguro que quieres eliminarlo/a?")){
      this.participantesArray = this.participantesArray.filter(x => x != participante);
      this.participanteSeleccionado = new Participante();
    }

  }
}
