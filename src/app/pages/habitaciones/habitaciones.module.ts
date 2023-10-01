import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    HabitacionesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HabitacionesComponent
  ]
})
export class HabitacionesModule { }
