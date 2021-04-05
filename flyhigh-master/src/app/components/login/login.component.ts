import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'flyhigh'
  password = ''
  invalidLogin = false
  user = {}
  email
  constructor(private router: Router,
    private loginservice: LoginService) { }

  ngOnInit() {
  }

  checkLogin() {
    this.user={
      email:this.username,
      password:this.password
    }
    this.loginservice.authenticate(this.user).subscribe((res:any)=>{
      if(res){
        sessionStorage.setItem('email',res.email);
        this.router.navigate(['']);
      }
      else{
        this.invalidLogin = true;
      }
    })
  }
  onKeyUp(event) {
    if (event.keyCode === 13) {
        this.checkLogin();
    }    
}

}