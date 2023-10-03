import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/usuarios/login/login.component';
import { SingupComponent } from './pages/usuarios/singup/singup.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones/habitaciones.component';
import { UserGuardGuard } from './user-guard.guard';

const routes: Routes = [
  {
    path: '', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'register', component: SingupComponent, pathMatch: 'full'
  },
  {
    path: 'habitaciones', component: HabitacionesComponent, pathMatch: 'full', canActivate: [UserGuardGuard]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
