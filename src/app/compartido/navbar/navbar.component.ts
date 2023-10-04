import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isTrue?: boolean;
  tokenStr: any = localStorage.getItem('token');
  constructor(private userService : UserService) { }

  public logout(){
    this.userService.logout();
    window.location.reload();
  }

  ngOnInit(): void {
    if (this.tokenStr == undefined || this.tokenStr == '' || this.tokenStr == null) {
      this.isTrue = false;
    } else {
      this.isTrue = true;
    }
  }

}
