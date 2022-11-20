import {Component, OnInit} from '@angular/core';
import {DataService} from "../../components/services/data.service";

@Component({
  selector: 'app-repartir-component',
  templateUrl: './repartir-component.component.html',
  styleUrls: ['./repartir-component.component.css']
})
export class RepartirComponentComponent implements OnInit {

  private total: number;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.total = this.calcularTotal();
  }

  calcularTotal(): number{
    let subTotal = 0;

    this.dataService.participantes.forEach( function (p) {
      subTotal += p.cantidad;
    });

    return subTotal;
  }

}
