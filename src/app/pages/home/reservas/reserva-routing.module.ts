import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListarComponent } from './listar/listar.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'crear/:parametro', component: RegistrarComponent },
      {path:'listar', component: ListarComponent},
      { path: '**', redirectTo: 'listar', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ReservaRoutingModule { }
