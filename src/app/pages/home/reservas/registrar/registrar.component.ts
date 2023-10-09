import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitacionesService } from 'src/app/services/habitaciones.service';
import { ReservasService } from 'src/app/services/reservas.service';
import { IReserva } from '../Interfaces/Reserva';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  parametro?: string;
  tiposPago = [
    { value: '1', name: 'Tarjeta' },
    { value: '2', name: 'Efectivo' }
  ];
  reserva: IReserva = {} as IReserva;

  constructor(private habitacionService: HabitacionesService, private reservaService: ReservasService,
    private route: ActivatedRoute, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.parametro = this.route.snapshot.paramMap.get('parametro')!;
    this.habitacionService.getHabitacion(Number(this.parametro));
    this.reserva.habitacionId = Number(this.parametro);
  }

  reservar() {
    if (this.reserva.checkIn === null) {
      this.snack.open('La fecha de ingreso es requerida', 'Aceptar', {
        duration: 4000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right'
      });
      return;
    } if (this.reserva.checkOut === null) {
      this.snack.open('La fecha de salida es requerida', 'Aceptar', {
        duration: 4000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right'
      });
      return;
    }

    this.reservaService.saveReserva(this.reserva).subscribe(
      (data) => {
        console.log(data);
        Swal.fire(
          {
            title: 'Reserva realizada',
            text: 'Reserva registrada con éxito',
            icon: 'success',
          }).then(() => {
            this.router.navigate(['/home/habitaciones']);
            localStorage.removeItem('habitacion');
          });
      }, error => {
        console.log(error);
      }
    );
  }

  get habitacion() {
    return JSON.parse(localStorage.getItem('habitacion')!);
  }
}
