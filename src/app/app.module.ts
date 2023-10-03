import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompartidoModule } from './compartido/compartido.module';
import { MaterialModule } from './material/material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { HabitacionesModule } from './pages/habitaciones/habitaciones.module';
import { AppRouterModule } from './app-router.module';
import { JwtInterceptorInterceptor } from './jwt-interceptor.interceptor';


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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true,
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
