import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService, private router: Router){}

  onRegister(){
    console.log(this.usuario)
    this.authService.register(this.usuario).subscribe(resp => {
      this.router.navigate(['/home']);
    })
  }
  
}
