import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Content, Habitaciones } from '../pages/home/habitaciones/interfaces/IHabitaciones';


@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {
  resultados: Content[] = [];

  constructor(private http: HttpClient) { }

  getHabitaciones() {
    //return this.http.get(`${baserUrl}/habitaciones`);
    this.http.get<Habitaciones>(`${baserUrl}/habitaciones`)
      .subscribe(response => {
        this.resultados = response.content;
        console.log(this.resultados);
      });
  }
}
