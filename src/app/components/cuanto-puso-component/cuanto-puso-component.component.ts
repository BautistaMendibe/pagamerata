import { Component } from '@angular/core';
import { Participante } from "../../models/participante";

@Component({
  selector: 'app-cuanto-puso-component',
  templateUrl: './cuanto-puso-component.component.html',
  styleUrls: ['./cuanto-puso-component.component.css']
})
export class CuantoPusoComponentComponent{

  participantesArray : Participante[] = [];

  participanteSeleccionado:Participante = new Participante();

  agregarEditarParticipante(){
    if(this.participanteSeleccionado.nombre == null){
      alert("Debe agregarle un nombre")
    } else {

      // Si la cantidad es nula poner como 0
      if(this.participanteSeleccionado.cantidad == null){
        this.participanteSeleccionado.cantidad = 0;
      }

      // Si el id=0 no hay ningún empleado seleccionado y se quiere agregar uno
      if(this.participanteSeleccionado.id === 0){
        this.participanteSeleccionado.id = this.participantesArray.length + 1;
        this.participantesArray.push(this.participanteSeleccionado);
      }

      this.participanteSeleccionado = new Participante();
    }
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
