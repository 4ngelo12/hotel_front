import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { MaterialModule } from 'src/app/material/material.module';
import { UserService } from 'src/app/services/user.service';
import { HabitacionesRoutingModule } from './habitaciones/habitaciones-routing.module';



@NgModule({
  declarations: [
    PrincipalComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HabitacionesRoutingModule
  ],
  exports: [
    PrincipalComponent
  ],
  providers: [
    UserService
  ]
})
export class HomeModule { }
