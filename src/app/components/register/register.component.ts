import { Component, OnInit } from '@angular/core';
import { RegisterService} from '../../service/register.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstName = ''
  lastName = ''
  email =''
  password=''
  passwordConfirm=''
  isRegistrationSuccessful=false;
  user={}
  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
  }
  register(){
    this.isRegistrationSuccessful=false;
    this.user={
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      password:this.password
    }
    this.registerService.register(this.user).subscribe(res=>{
      this.isRegistrationSuccessful = true;
    })
  }
  onKeyUp(event) {
    if (event.keyCode === 13) {
        this.register();
    }    
}
}
