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
  habitacionData: Habitacion = {
    id: 0,
    numero: 0,
    disponible: false,
    descripcion: '',
    numCamas: 0,
    precio: 0,
    idTipoHabitacion: 0
  };

  constructor(private habitacionService: HabitacionesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.parametro = this.route.snapshot.paramMap.get('parametro')!;
    console.log(this.parametro);
    this.habitacionData = this.habitacion(Number(this.parametro));
  }

  habitacion(number: number) {
    this.habitacionService.getHabitacion(number);
    return this.habitacionService.habitacion;
  }

}
