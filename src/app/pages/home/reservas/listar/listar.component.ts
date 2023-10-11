import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReservasService } from 'src/app/services/reservas.service';
import { Respuesta } from '../Interfaces/ReservaRespuesta';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public page!: number;
  displayedColumns: string[] = ['codReserva', 'checkIn', 'checkOut', 'total', 'habitacion', 'tipoPago'];
  idUsuario = JSON.stringify(localStorage.getItem('user')).split(':')[1].split(',')[0].replace(/['"]+/g, '');

  constructor(private reservaService: ReservasService) { }

  ngOnInit(): void {
    this.reservaService.getReservas(Number(this.idUsuario));
    console.log(this.idUsuario)
  }

  get reservas() {
    return this.reservaService.resultados;
  }

}
