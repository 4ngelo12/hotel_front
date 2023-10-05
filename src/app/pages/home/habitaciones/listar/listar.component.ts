import { Component, OnInit } from '@angular/core';
import { HabitacionesService } from 'src/app/services/habitaciones.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  resulados: any[] = [];

  constructor(private habitacionService: HabitacionesService) { }

  ngOnInit(): void {
    this.habitacionService.getHabitaciones();
    this.resulados = this.habitacionService.resultados;

  }

  get habitaciones() {
    return this.habitacionService.resultados;
  }

  get size() {
    return this.habitacionService.size;
  }
}
