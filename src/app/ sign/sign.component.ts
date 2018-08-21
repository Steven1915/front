import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  public user = { email : '', password: '' };
  public invalidCredentials : boolean;

  constructor(private auth : AuthService, private router: Router) { }

  ngOnInit() {
    this.invalidCredentials = false;
  }

  login(){
    this.auth.login(this.user.email, this.user.password)
      .subscribe(valid =>{
        if (!valid)
          this.invalidCredentials = true;
        else
          this.router.navigate(['/']);
      });
  }

}
