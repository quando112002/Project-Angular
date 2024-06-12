import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenService } from '../authen.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formRegister: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(12),
    ]),
    password: new FormControl('', Validators.required),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  error: string | null = null;

  constructor(private authen:AuthenService,private router: Router) {}

  get f() {
    return this.formRegister.controls;
  }

  onRegister(): void {
    if (this.formRegister.invalid) {
      return;
    }

    const email = this.formRegister.value.email;
    const password = this.formRegister.value.password;
    const username = this.formRegister.value.username;

    this.error = null;

    this.authen.signUp(email, password, username).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(['/task']);
      },
      (error: any) => {
        console.log(error);
        this.error = error.error.message;
      }
    );

    this.formRegister.reset();
  }
}
