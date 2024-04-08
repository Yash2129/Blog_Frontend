import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  itemForm: FormGroup;
  formModel: any = { role: null, email: '', password: '', name: '', repassword: ''};
  showMessage: boolean = false;
  confirmPassword: any;
  responseMessage: any;
  responseError: any;
  showError: boolean = false;
  userModel: any = { role: '', email: '', password: '', name: '' };
  showPass: boolean = false;
  showRepass: boolean = false;

  constructor(public router: Router,private formBuilder: FormBuilder) {

    this.itemForm = this.formBuilder.group({
      email: [this.formModel.email, [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: [this.formModel.password, [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$#!%*?&])[A-Za-z\d$@$!%*?&].{7,}$")]],
      role: [this.formModel.role, [Validators.required]],
      name: [this.formModel.username, [Validators.required]],
      repassword: [this.formModel.repassword, [Validators.required]],
    },
      {
        validator: this.matchPassword
      },
    );
  }

  ngOnInit(): void {
  }


  matchPassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const repassword = control.get('repassword');
    if (password?.value === repassword?.value) {
      return null;
    } else {
      return { notMatch: true };
    }
  }

  togglePassword() {
    const password = document.getElementById('password');
    const type = password?.getAttribute('type') === 'password' ? 'text' : 'password';
    password?.setAttribute('type', type);
  }

  toggleRepassword() {
    const repassword = document.getElementById('repassword');
    const type = repassword?.getAttribute('type') === 'password' ? 'text' : 'password';
    repassword?.setAttribute('type', type);
  }

  onRegister() {
    if (this.itemForm.valid) {
      this.userModel.role = this.itemForm.value.role;
      this.userModel.email = this.itemForm.value.email;
      this.userModel.username = this.itemForm.value.username;
      this.userModel.password = this.itemForm.value.password;

      this.showMessage = false;
      this.showMessage = false;
    }
    else {
      this.itemForm.markAllAsTouched();
    }
  }
}