import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  title = 'MICDS Sports Network';
  currentUser: User;

  username = '';
  password = '';
  remember = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.auth$.subscribe(
      user => {
        this.currentUser = user;
      }
    );
  }

  login() {
    // this.authService.login(this.username, this.password, this.remember).subscribe(

    // );
  }

}
