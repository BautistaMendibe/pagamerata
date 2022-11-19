import {Component, Input, OnInit} from '@angular/core';
import {Participante} from "../../models/participante";

@Component({
  selector: 'app-repartir-component',
  templateUrl: './repartir-component.component.html',
  styleUrls: ['./repartir-component.component.css']
})
export class RepartirComponentComponent implements OnInit {

  @Input() participantes: Participante[];

  constructor() { }

  ngOnInit(): void {
  }

}
