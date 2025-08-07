import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomButton } from '../../shared/custom-button/custom-button';
import { CustomInput } from 'src/app/shared/custom-input/custom-input';
import { AuthService } from 'src/app/entities/auth/auth.service.';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, CustomButton, CustomInput],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  registerForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
    firstName: FormControl<string>;
    lastName: FormControl<string>;
  }>;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.registerForm = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      firstName: ['', [Validators.required, Validators.minLength(1)]],
    },{validators: (group: AbstractControl): ValidationErrors | null => {
      const password = group.get('password')?.value;
      const confirmPassword = group.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { passwordMismatch: true };
    }});
  }

  onSubmit() {


  if (this.registerForm.invalid) {
    this.registerForm.markAllAsTouched();
    return;
  }
  const { email = '', password = '', firstName = '', lastName = '' } = this.registerForm.value;
  this.authService.register({email, password, firstName, lastName, acceptsMarketing: true}).subscribe({
    next: (res) => {
      console.log(res)
      // console.log('sec',res.customerAccessToken.accessToken)
      // localStorage.setItem('token', res.customerAccessToken.accessToken)
      this.router.navigate(['/login'])
    },
    error: (err) => {
      console.error('Register failed:', err);
    }
  });
  }
}
