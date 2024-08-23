import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.onSubmit();
    }
  }

  onSubmit() {
    this.authService.login(this.loginForm).subscribe(
      resp => {
        alert('Login realizado com sucesso!');
        localStorage.setItem('user', JSON.stringify(resp));
        this.router.navigate(['/home']);
      },
      err => console.error('Credenciais inválidas.')
    );
  }
}