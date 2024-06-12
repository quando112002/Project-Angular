import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenService } from '../authen.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Corrected styleUrls property name
})
export class LoginComponent {
  formLogin: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(12),
    ]),
    password: new FormControl('', Validators.required),
  });

  error: string | null = null;
  tokena: string | null = null;

  constructor(private authService: AuthenService, private router: Router) {}

  get f() {
    return this.formLogin.controls;
  }
  onLogin(): void {
    // Corrected the method signature
    if (this.formLogin.invalid) {
      return;
    }

    const email = this.formLogin.value.email;
    const password = this.formLogin.value.password;

    this.error = null;

    // Dang nhap
    this.authService.signIn(email, password).subscribe(
      (res:any) => {
        if(res){
          sessionStorage.setItem('login',JSON.stringify(res))
          this.authService.setToken(res);
          console.log(res);
          this.router.navigate(['/task']);
        }else{
          this.error = "Bạn không có quyền truy cập";
        }

      },
      (error) => {
        console.log(error);
        this.error ="Tài khoản hoặc mật khẩu không đúng";
      }
    );
    // end dang nhap
  }
}
