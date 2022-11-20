import {Component, OnInit} from '@angular/core';
import {DataService} from "../../components/services/data.service";

@Component({
  selector: 'app-repartir-component',
  templateUrl: './repartir-component.component.html',
  styleUrls: ['./repartir-component.component.css']
})
export class RepartirComponentComponent implements OnInit {

  public total: number;
  private cantidadParticipantes: number;
  private cantidadCadaUno: number;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.total = this.calcularTotal();
    this.cantidadCadaUno = this.calcularCantidadCadaUno(this.total, this.cantidadParticipantes);
    console.log(this.cantidadParticipantes);
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
    return 1;
  }

}
