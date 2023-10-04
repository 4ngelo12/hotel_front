import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { HabitacionesRoutingModule } from './habitaciones-routing.module';
import { HabitacionesService } from 'src/app/services/habitaciones.service';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    HabitacionesRoutingModule,
    MaterialModule
  ],
  providers: [
    HabitacionesService
  ]
})
export class HabitacionesModule { }
