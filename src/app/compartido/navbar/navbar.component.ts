import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isTrue?: boolean;
  token = localStorage.getItem('token');
  constructor(private userService : UserService) { }

  public logout(){
    this.userService.logout();
    window.location.reload();
  }

  ngOnInit(): void {
    if (this.token) {
      this.isTrue = true;
      console.log(this.isTrue);
    }
  }

}
