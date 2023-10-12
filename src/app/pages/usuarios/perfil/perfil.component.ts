import { Component, OnInit } from '@angular/core';
import { IUsuarioEdit } from '../interfaces/IUsuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: IUsuarioEdit = {} as IUsuarioEdit;
  usuarioActual = JSON.parse(localStorage.getItem('user') || '{}');
  formulario: FormGroup;

  tipoDocumento = [
    { value: 'DNI', name: 'DNI' },
    { value: 'CARNET', name: 'Carnet de Extranjeria' }
  ];

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router, private snack: MatSnackBar) {
    this.formulario = this.fb.group({
      id: [this.usuarioActual.id, Validators.required],
      nombre: [this.usuarioActual.nombre, Validators.required],
      apellido: [this.usuarioActual.apellido, Validators.required],
      fechaNacimiento: [this.usuarioActual.fechaNacimiento, Validators.required],
      tipoDocumento: [this.usuarioActual.tipoDocumento, Validators.required],
      documento: [this.usuarioActual.documento, Validators.required],
      telefono: [this.usuarioActual.telefono, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  guardarCambios() {
    if (this.formulario.valid) {
      this.usuario = this.formulario.value;
      this.userService.updateUser(this.usuario).subscribe(
        (data) => {
          Swal.fire(
            {
              title: 'Datos Actualizados correctamente',
              text: 'Datos del usuario actualizado con éxito',
              icon: 'success',
            }).then(() => {
              this.userService.setUser(data)
              this.router.navigate(['/'])
            });

        }, error => {
          console.log(error.error);
          this.snack.open(error.error[0].error, 'Aceptar', {
            duration: 5000
          });
        }
      );
    }
  }

}
