import {Component, OnInit} from '@angular/core';
import {DataService} from "../../components/services/data.service";
import {Participante} from "../../models/participante";
import {Transaccion} from "../../models/transaccion";

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
  public transacciones: Transaccion[] = [];

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.total = this.calcularTotal();
    this.cantidadCadaUno = this.calcularCantidadCadaUno(this.total, this.cantidadParticipantes);
    this.separarParticipantesSegunCantidad(this.cantidadCadaUno, this.siPusieron, this.noPusieron);
    this.repartir(this.transacciones, this.siPusieron, this.noPusieron);
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
    let cadaUno:number = total/cantidadParticipantes;
    return Number(cadaUno.toFixed(2));
  }

  separarParticipantesSegunCantidad(cantidadCadaUno: number, siPusieron: Participante[], noPusieron: Participante[]){
    // Separamos a los participantes que pusieron más que la cantidad que cada uno tiene que poner de los que no
    this.dataService.participantes.forEach( function (p) {
      p.neto = p.cantidad - cantidadCadaUno;
      if( p.neto >= 0){
        siPusieron.push(p);
      } else {
        noPusieron.push(p);
      }
    });
  }

  repartir(transacciones: Transaccion[], siPusieron: Participante[], noPusieron: Participante[]){
    noPusieron.forEach((function (noPuso){
      siPusieron.forEach((function (siPuso) {
        if(siPuso.neto > noPuso.neto*(-1)){
          let cantidadDevuelta: number = noPuso.neto*(-1);
          siPuso.neto = siPuso.neto + noPuso.neto;
          noPuso.neto = 0;
          let transaccion: Transaccion = new Transaccion(noPuso, siPuso, cantidadDevuelta);
          transacciones.push(transaccion);
        } else {
          if(siPuso.neto == 0){
            return;
          } else {
            let cantidadDevuelta: number = siPuso.neto;
            noPuso.neto = siPuso.neto + noPuso.neto;
            siPuso.neto = 0;
            let transaccion: Transaccion = new Transaccion(noPuso, siPuso, cantidadDevuelta);
            transacciones.push(transaccion);
          }
        }
      }))
    }))
  }
}
