import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.form).subscribe(
      resp => {
        alert('Login realizado com sucesso!');
        localStorage.setItem('user', JSON.stringify(resp));
        this.router.navigate(['/home']);
      },
      err => console.error('Credenciais inválidas.')
    );
  }
}