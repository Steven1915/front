import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn:boolean;
  localuser = {
    email: 'test@tts.com',
    pwd: 'sample123'
  }

  constructor() { }

  login(email, pwd) {
    if(email === this.localuser.email && pwd === this.localuser.pwd) {
      this.isLoggedIn = true;
      return true;
    }
    this.isLoggedIn = false;
    return false;
  }

}
