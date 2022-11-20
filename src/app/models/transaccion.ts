import {Participante} from "./participante";

export class Transaccion {
  de: Participante;
  a: Participante;
  cantidad: number;

  constructor(de: Participante, a: Participante, cantidad: number) {
    this.de = de;
    this.a = a;
    this.cantidad = cantidad;
  }

}
