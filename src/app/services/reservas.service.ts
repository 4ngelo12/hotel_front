import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { IReserva } from '../pages/home/reservas/Interfaces/Reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private http: HttpClient) { }

  public saveReserva(reserva: IReserva) {
    return this.http.post(`${baserUrl}/reserva`, reserva);
  }
}
