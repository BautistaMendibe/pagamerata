import { Injectable } from '@angular/core';
import {Participante} from "../../models/participante";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  participantes: Participante[] = [];

  constructor() { }
}
