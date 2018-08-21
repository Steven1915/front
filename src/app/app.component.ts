import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isLoggedIn : boolean;
  constructor(private auth: AuthService ){

  }

  ngOnInit(){
    this.isLoggedIn = this.auth.isLoggedIn();
  }
  
  logout(){
    console.log('logged out');
    this.auth.logout();
    this.isLoggedIn = false;
  }
}
