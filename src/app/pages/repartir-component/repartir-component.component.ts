import {Component, OnInit} from '@angular/core';
import {DataService} from "../../components/services/data.service";

@Component({
  selector: 'app-repartir-component',
  templateUrl: './repartir-component.component.html',
  styleUrls: ['./repartir-component.component.css']
})
export class RepartirComponentComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
