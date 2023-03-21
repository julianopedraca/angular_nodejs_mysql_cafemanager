import { ForgotPasswordComponent } from './../forgot-password/forgot-password.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog:MatDialog,
    private router:Router,
    private userServices: UserService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
      this.userServices.checkToken().subscribe({
        next:(response:any)=>{
          this.router.navigate(['/cafe/dashboard'])
        },
        error:(error)=>{
          console.log(error)
        }
      })
    }
  }

  signupAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    this.dialog.open(SignupComponent, dialogConfig)
  }

  forgotPasswordAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    this.dialog.open(ForgotPasswordComponent, dialogConfig);
  }

  loginAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    this.dialog.open(LoginComponent, dialogConfig)
  }
}
