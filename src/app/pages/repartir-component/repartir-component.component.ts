import {Component, OnInit} from '@angular/core';
import {DataService} from "../../components/services/data.service";
import {Participante} from "../../models/participante";

@Component({
  selector: 'app-repartir-component',
  templateUrl: './repartir-component.component.html',
  styleUrls: ['./repartir-component.component.css']
})
export class RepartirComponentComponent implements OnInit {

  public total: number;
  private cantidadParticipantes: number;
  private cantidadCadaUno: number;
  private noPusieron: Participante[] = [];
  private siPusieron: Participante[] = [];

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.total = this.calcularTotal();
    this.cantidadCadaUno = this.calcularCantidadCadaUno(this.total, this.cantidadParticipantes);
    this.separarParticipantesSegunCantidad(this.cantidadCadaUno, this.siPusieron, this.noPusieron);

  }

  calcularTotal(): number{
    let subTotal = 0;
    let cantidadParticipantes = 0;

    this.dataService.participantes.forEach( function (p) {
      subTotal += p.cantidad;
      cantidadParticipantes ++;
    });

    this.cantidadParticipantes = cantidadParticipantes;
    return subTotal;
  }

  calcularCantidadCadaUno(total: number, cantidadParticipantes: number): number{
    return Math.round(total/cantidadParticipantes);
  }

  separarParticipantesSegunCantidad(cantidadCadaUno: number, siPusieron: Participante[], noPusieron: Participante[]){
    // Separamos a los participantes que pusieron más que la cantidad que cada uno tiene que poner de los que no
    this.dataService.participantes.forEach( function (p) {
      if(p.cantidad > cantidadCadaUno){
        siPusieron.push(p);
      } else {
        noPusieron.push(p);
      }
    });
  }



}
