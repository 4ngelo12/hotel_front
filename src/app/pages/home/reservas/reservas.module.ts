import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './registrar/registrar.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservasService } from 'src/app/services/reservas.service';
import { HabitacionesService } from 'src/app/services/habitaciones.service';
import { ListarComponent } from './listar/listar.component';



@NgModule({
  declarations: [
    RegistrarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReservaRoutingModule
  ],
  providers: [
    ReservasService,
    HabitacionesService
  ]
})
export class ReservasModule { }
