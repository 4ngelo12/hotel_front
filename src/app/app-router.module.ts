import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/usuarios/login/login.component';
import { SingupComponent } from './pages/usuarios/singup/singup.component';
import { UserGuardGuard } from './user-guard.guard';
import { PrincipalComponent } from './pages/home/principal/principal.component';
import { PerfilComponent } from './pages/usuarios/perfil/perfil.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'register', component: SingupComponent, pathMatch: 'full'
  },
  {
    path: 'home', component: PrincipalComponent, pathMatch: 'full', canActivate: [UserGuardGuard]
  },
  {
    path: 'home/usuario', component: PerfilComponent, pathMatch: 'full', canActivate: [UserGuardGuard]
  },
  {
    path: 'home/habitaciones', loadChildren: () => import('./pages/home/habitaciones/habitaciones.module')
      .then(m => m.HabitacionesModule), canActivate: [UserGuardGuard]
  },
  {
    path: 'home/reservas', loadChildren: () => import('./pages/home/reservas/reservas.module')
      .then(m => m.ReservasModule), canActivate: [UserGuardGuard]
  },

  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
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
