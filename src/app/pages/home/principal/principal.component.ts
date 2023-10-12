import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  usuario = JSON.parse(localStorage.getItem('user') || '{}');

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  editarPerfil() {
    this.router.navigate(['/home/usuario']);
  }

}
