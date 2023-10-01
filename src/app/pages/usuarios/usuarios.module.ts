import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from 'src/app/material/material.module';
import { UserService } from 'src/app/services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRouterModule } from 'src/app/app-router.module';


@NgModule({
  declarations: [
    SingupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRouterModule
  ],
  exports: [
    SingupComponent,
    LoginComponent
  ],
  providers: [
    UserService
  ]
})
export class UsuariosModule { }
