import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { HabitacionesRoutingModule } from './habitaciones-routing.module';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    HabitacionesRoutingModule
  ]
})
export class HabitacionesModule { }
