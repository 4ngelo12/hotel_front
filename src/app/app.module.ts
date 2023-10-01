import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompartidoModule } from './compartido/compartido.module';
import { AppRouterModule } from './app-router.module';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { HabitacionesModule } from './pages/habitaciones/habitaciones.module';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CompartidoModule,
    MaterialModule,
    HttpClientModule,
    UsuariosModule,
    HabitacionesModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
