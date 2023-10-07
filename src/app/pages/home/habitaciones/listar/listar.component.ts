import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { HabitacionesService } from 'src/app/services/habitaciones.service';
import { Content } from '../interfaces/IHabitaciones';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ListarComponent implements OnInit {

  public page!: number;
  contenido: Content[] = [];

  constructor(private habitacionService: HabitacionesService, private router: Router) { }

  ngOnInit(): void {
    this.habitacionService.getHabitaciones();
  }

  realizarReserva(id: number) {
    this.router.navigate(['/home/reservas/crear', id]);
  }

  get habitaciones() {
    return this.habitacionService.resultados;
  }

  size() {
    return this.habitacionService.size;
  }

  get total() {
    return this.habitacionService.total;
  }
}
