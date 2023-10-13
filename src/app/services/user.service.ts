import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { IUsuario, IUsuarioEdit } from '../pages/usuarios/interfaces/IUsuario';
import { ILogin } from '../pages/usuarios/interfaces/ILogin';
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  public saveUser(user: IUsuario) {
    return this.http.post(`${baserUrl}/auth/register`, user);
  }

  public login(user: ILogin) {
    return this.http.post(`${baserUrl}/auth/login`, user);
  }

  public updateUser(user: IUsuarioEdit) {
    return this.http.put(`${baserUrl}/user`, user);
  }

  //iniciamos sesión y establecemos el token en el localStorage
  public loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  public getCurrentUser() {
    return this.http.get(`${baserUrl}/auth/usuario`);
  }

  //cerranis sesion y eliminamos el token del localStorage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('habitacion');
    return true;
  }

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  public getUserRole() {
    let user = this.getUser();
    return user.role;
  }

  private loggedIn = new BehaviorSubject(false);

  validateToken(): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      this.loggedIn.next(false);
      return false;
    }

    try {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if (helper.isTokenExpired(token)) {
        this.loggedIn.next(false);
        localStorage.clear();
        return false;
      }
      if (!decodedToken) {
        localStorage.clear();
        this.loggedIn.next(false);
        return false;
      }
    } catch (error) {
      localStorage.removeItem('token');
      this.loggedIn.next(false);
      return false;
    }
    this.loggedIn.next(true);
    return true;
  }
}

