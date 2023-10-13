import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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

  usuario: IUsuario = {} as IUsuario;
  formulario: FormGroup;


  constructor(private userService: UserService, private router: Router, private snack: MatSnackBar, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      documento: ['', [Validators.required, Validators.minLength(8)]],
      telefono: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      idRole: [3, Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

  formSubmit() {
    if (this.formulario.valid) {
      this.usuario = this.formulario.value;
      if (this.formulario.value.password !== this.formulario.value.confirmPassword) {
        this.snack.open('Las contraseñas no coinciden', 'Aceptar', {
          duration: 5000
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
          if (typeof error.error == 'string') {
            this.snack.open(error.error, 'Aceptar', {
              duration: 5000
            });
          } else {
            this.snack.open(error.error[0].error, 'Aceptar', {
              duration: 5000
            });
          }
        }
      );
    }

  }

}
