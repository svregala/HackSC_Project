import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupUsers:any[]=[];
  signUpObj:any={
    userName:'',
    email:'',
    password:''
  };
  
  loginObj:any={
    userName:'',
    password:''
  };
constructor(private router: Router){

}
  
  ngOnInit():void{
    const localData=localStorage.getItem('signUpUsers');
    if (localData!=null)
    {
      this.signupUsers=JSON.parse(localData);
    }
  
  }
  
  onSignUp(){
  this.signupUsers.push(this.signUpObj);
  localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
  this.signUpObj={
    userName:'',
    email:'',
    password:''
  };
  alert('Profile Created');  

  }
  
  onLogin(){
   
    const isUserExist =this.signupUsers.find(m=>m.userName==this.loginObj.userName && m.password==this.loginObj.password);
    
    if(isUserExist!=undefined){
      this.router.navigateByUrl('home');
    }
    else{
      alert('wrong credential');  
    }
  
    this.loginObj={
      userName:'',
      email:'',
      password:''
    };
  
  }
  


}
