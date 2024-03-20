import { Component } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, TitleCasePipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import swal from 'sweetalert2';

import { AuthService } from '../auth/auth.service';
import { UserService } from '../shared/services/user.service';
import { User } from '../model/user';
import { genderOpt } from '../shared/data/options.data';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgFor, TitleCasePipe, ReactiveFormsModule, MatFormField, MatInputModule, MatIconModule, MatButtonModule, MatSelectModule, MatDatepickerModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class ProfileComponent {

  user = this.authService.currentUser as User;
  genderOptions = genderOpt;
  userProfileForm = this.fb.group({
    firstName: [this.user.firstName, Validators.required],
    lastName: [this.user.lastName, Validators.required],
    gender: [this.user.gender, Validators.required],
    dob: [this.user.dob, Validators.required],
    phoneNumber: [this.user.phoneNumber],
    email: [this.user.email, [Validators.required, Validators.email]],
    password: [this.user.password, Validators.required],
    addressLine1: [this.user.addressLine1, Validators.required],
    addressLine2: [this.user.addressLine2],
  });
  passwordHidden = true;

  constructor(
    private fb: NonNullableFormBuilder, private authService: AuthService,
    private userService: UserService) { }

  save() {
    const userDetails = this.userProfileForm.value;

    swal.fire({
      text: 'Updating your profile...',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: false,
    })

    setTimeout(() => {
      this.userService.updateUser(this.user.id, userDetails);
      swal.close();
    }, 3000);

  }

  reset() {
    this.userProfileForm.reset(this.user);
  }
}
