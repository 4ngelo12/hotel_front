import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Content, Habitaciones } from '../pages/home/habitaciones/interfaces/IHabitaciones';


@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {
  resultados: Content[] = [];
  size: number = 0;

  constructor(private http: HttpClient) { }

  getHabitaciones() {
    //return this.http.get(`${baserUrl}/habitaciones`);
    this.http.get<Habitaciones>(`${baserUrl}/habitaciones?page=0`)
      .subscribe(response => {
        this.resultados = response.content;
        this.size = response.size;
        console.log(response.size);
      });
  }
}
