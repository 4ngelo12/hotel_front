import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { HabitacionesService } from 'src/app/services/habitaciones.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ListarComponent implements OnInit {

  public page!: number;

  constructor(private habitacionService: HabitacionesService) { }

  ngOnInit(): void {
    this.habitacionService.getHabitaciones();
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
