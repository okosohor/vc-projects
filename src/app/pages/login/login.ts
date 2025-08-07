import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomButton } from '../../shared/custom-button/custom-button';
import { CustomInput } from 'src/app/shared/custom-input/custom-input';
import { AuthService } from 'src/app/entities/auth/auth.service.';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, CustomButton, CustomInput],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loginForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.loginForm = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {

    console.log(this.loginForm.value)

  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }
  const { email = '', password = '' } = this.loginForm.value;
  this.authService.login(email, password).subscribe({
    next: (res) => {
      console.log(res)
      console.log('sec',res.customerAccessToken.accessToken)
      localStorage.setItem('token', res.customerAccessToken.accessToken)
      this.router.navigate(['/projects'])
    },
    error: (err) => {
      console.error('Login failed:', err);
    }
  });
  }
}
