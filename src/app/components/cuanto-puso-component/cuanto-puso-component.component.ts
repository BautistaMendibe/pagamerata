import { Component } from '@angular/core';
import { Participante } from '../../models/participante';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuanto-puso-component',
  templateUrl: './cuanto-puso-component.component.html',
  styleUrls: ['./cuanto-puso-component.component.css'],
})
export class CuantoPusoComponentComponent {
  constructor(private dataService: DataService, private router: Router) {}

  participantesArray: Participante[] = [];

  participanteSeleccionado: Participante = new Participante();

  agregarEditarParticipante() {
    if (this.participanteSeleccionado.nombre == null) {
      alert('Debe agregarle un nombre');
    } else if (this.participanteSeleccionado.cantidad < 0) {
      alert('La cantidad no puede ser negativa');
    } else {
      // Si la cantidad es nula poner como 0
      if (this.participanteSeleccionado.cantidad == null) {
        this.participanteSeleccionado.cantidad = 0;
      }

      // Si el id=0 no hay ningún empleado seleccionado y se quiere agregar uno
      if (this.participanteSeleccionado.id === 0) {
        this.participanteSeleccionado.id = this.participantesArray.length + 1;
        this.participantesArray.push(this.participanteSeleccionado);
      }

      this.participanteSeleccionado = new Participante();
    }
  }

  abrirParaEditar(participante: Participante) {
    this.participanteSeleccionado = participante;
  }

  eliminarParticipante(participante: Participante) {
    if (confirm('Estás seguro que quieres eliminarlo/a?')) {
      this.participantesArray = this.participantesArray.filter(
        (x) => x != participante
      );
      this.participanteSeleccionado = new Participante();
    }
  }

  validarCantidad(event: any) {
    const valor = event.target.value;
    // Si el valor es negativo, lo convertimos a 0
    if (valor < 0) {
      this.participanteSeleccionado.cantidad = 0;
      event.target.value = 0;
    }
  }

  enviarParticipantes() {
    if (this.participantesArray.length < 2) {
      alert('Debe agregar al menos 2 participantes.');
    } else {
      this.dataService.participantes = this.participantesArray;
      this.router.navigate(['/repartir']);
    }
  }
}
