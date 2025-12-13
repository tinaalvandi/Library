import { Conditional } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  router=inject(Router);
  massage:string='';
loginForm:loginForm={
  username:'',
  password:'',
  keepMe:false,
};
check(){
if(this.loginForm.username=='tina' && this.loginForm.password=='1234'){
  sessionStorage.setItem('auth-token','ssddfgg');
  if(this.loginForm.keepMe==true){
localStorage.setItem('aut-token','ssddfgg');
  }
  this.router.navigateByUrl('private');
}

else{

this.massage='نام کاربری یا کلمه عبور صحیح نیست';
}
}
}

interface loginForm {
username:string;
password:string;
keepMe:boolean;
}