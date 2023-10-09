import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HabitacionesService } from 'src/app/services/habitaciones.service';
import { Habitacion } from '../../habitaciones/interfaces/IHabitaciones';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  parametro?: string;

  constructor(private habitacionService: HabitacionesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.parametro = this.route.snapshot.paramMap.get('parametro')!;
    this.habitacionService.getHabitacion(Number(this.parametro));
  }

  get habitacion() {
    return JSON.parse(localStorage.getItem('habitacion')!);
  }
}
