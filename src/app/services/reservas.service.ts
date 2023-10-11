import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { IReserva } from '../pages/home/reservas/Interfaces/Reserva';
import { Reserva, Respuesta } from '../pages/home/reservas/Interfaces/ReservaRespuesta';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  reserva: IReserva = {} as IReserva;
  resultados: Respuesta[] = [];

  constructor(private http: HttpClient) { }

  public saveReserva(reserva: IReserva) {
    return this.http.post(`${baserUrl}/reserva`, reserva);
  }

  public getReservas(id: number) {
    this.http.get<Reserva>(`${baserUrl}/reserva`, {params: {id: id}})
      .subscribe(response => {
        this.resultados = response.content;
        console.log(response);
        console.log(this.resultados);
      });
  }
}
