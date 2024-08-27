import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(){
    localStorage.clear();
  }

  onSubmit() {
    this.authService.login(this.usuario).subscribe(
      resp => {
        alert('Login realizado com sucesso!');
        localStorage.setItem('user', JSON.stringify(resp));
        this.router.navigate(['/home']);
      },
      err => console.error('Credenciais inválidas.')
    );
  }
}