import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Usuario } from '../pages/usuarios/interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public saveUser(user: Usuario) {
    return this.http.post(`${baserUrl}/auth/register`, user);
  }
}
