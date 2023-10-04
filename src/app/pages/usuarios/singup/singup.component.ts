import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUsuario } from '../interfaces/IUsuario';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  tipoDocumento = [
    { value: 'DNI', name: 'DNI' },
    { value: 'CARNET', name: 'Carnet de Extranjeria' }
  ];

  usuario: IUsuario = {
    nombre: '',
    apellido: '',
    email: '',
    fechaNacimiento: new Date(),
    tipoDocumento: '',
    documento: '',
    telefono: '',
    idRole: 3,
    password: '',
  };

  constructor(private userService: UserService, private router: Router, private snack: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  formSubmit() {
    if (this.usuario.email == "" || this.usuario.email === null) {
      this.snack.open('El email es requerido', 'Aceptar', {
        duration: 4000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right'
      });
      return;
    }

    this.userService.saveUser(this.usuario).subscribe(
      (data) => {
        console.log(data);
        Swal.fire(
          {
            title: 'Usuario registrado',
            text: 'Usuario registrado con éxito',
            icon: 'success',
          }).then(() => this.router.navigate(['/login']));

      }, error => {
        this.snack.open(error.error[0].error, 'Aceptar', {
          duration: 5000
        });
      }
    );
  }

}
