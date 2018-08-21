import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //isLoggedIn: boolean;
  localuser = {
    email: 'stevenlucio1915@gmail.com',
    pwd: 'Steven15'
  }

  constructor() { }

  login(email, pwd) {
    if (email === this.localuser.email && pwd === this.localuser.pwd) {
      this.setToken('VALIDTOKEN');
      return of(true);
    }
    return of (false);
  }

  public isLoggedIn(){
    let t = this.getToken();
    if (t == null)
      return false;
    else
      return true;
  }

  public logout(){
    localStorage['token'] = null;
  }

  private setToken(Token:string){
    localStorage['token'] = Token;
  }

  private getToken(){
    return localStorage['token'];
  }

}
