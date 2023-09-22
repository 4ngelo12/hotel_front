import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { AppRouterModule } from '../app-router.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CompartidoModule { }
