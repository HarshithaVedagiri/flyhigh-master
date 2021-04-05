import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) {}
  authenticate(user) {
    return this.http.post('http://localhost:8080/login',user);
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem('email')
  }
}
