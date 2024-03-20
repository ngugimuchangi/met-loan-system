import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormControls } from '../../shared/types/form-controls.types';
import { AuthService } from '../auth.service';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


interface LoginFormModel {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf, ReactiveFormsModule, MatButtonModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup<FormControls<LoginFormModel>>;
  isInvalidCredentials = false;

  constructor(private fb: NonNullableFormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const { email = '', password = '' } = this.loginForm.value;
    try {
      this.authService.login(email, password);
    } catch {
      this.isInvalidCredentials = true;
    }
  }
}
