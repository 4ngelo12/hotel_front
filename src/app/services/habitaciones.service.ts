import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Content, Habitacion, Habitaciones } from '../pages/home/habitaciones/interfaces/IHabitaciones';


@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {
  resultados: Content[] = [];
  habitacion: Habitacion = {} as Habitacion;
  size: number = 0;
  total: number = 0;

  constructor(private http: HttpClient) { }

  getHabitaciones() {
    //return this.http.get(`${baserUrl}/habitaciones`);
    this.http.get<Habitaciones>(`${baserUrl}/habitaciones`)
      .subscribe(response => {
        this.resultados = response.content;
        this.size = response.size;
        this.total = response.totalPages;
      });
  }

  getHabitacion(id: number) {
    //return this.http.get(`${baserUrl}/habitaciones/${id}`);
    this.http.get<Habitacion>(`${baserUrl}/habitaciones/${id}`)
      .subscribe(response => {
        this.habitacion = response;
        console.log(this.habitacion);
      });
  }
}
