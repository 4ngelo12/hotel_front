import { Component, OnInit } from '@angular/core';
import { ILogin } from '../interfaces/ILogin';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: ILogin = {
    username: '',
    password: ''
  }

  constructor(private userService: UserService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  loginSubmit() {
    if (this.usuario.username.trim() == "" || this.usuario.username.trim() === null) {
      this.snack.open('El nombre de usuario es requerido', 'Aceptar', {
        duration: 4000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right'
      });
      return;
    } if (this.usuario.password.trim() == "" || this.usuario.password.trim() === null) {
      this.snack.open('La constraseña es requerida', 'Aceptar', {
        duration: 4000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right'
      });
      return;
    }

    this.userService.login(this.usuario).subscribe(
      (data: any) => {
        this.userService.loginUser(data.jwTtoken);
        this.userService.getCurrentUser().subscribe(
          (user: any) => {
            this.userService.setUser(user);

            if (this.userService.getUserRole() == 'ADMIN') {
              console.log('ADMIN');
            } else if (this.userService.getUserRole() == 'EMPLEADO') {
              console.log('EMPLEADO');
            } else if (this.userService.getUserRole() == 'HUESPED') {
              console.log('HUESPED');
            }

            this.router.navigate(['/home']).then(() => {
              window.location.reload();
            });

          }
        );
        //this.router.navigate(['/habitaciones']);
      }, error => {
        console.log(error);
        this.snack.open(
          "El usuario o la contraseña no es correcto", 'Aceptar',
          {
            duration: 10000
          });
      }
    );
  }

}
