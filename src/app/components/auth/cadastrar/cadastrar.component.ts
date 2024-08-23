import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  form: any = {};

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => console.log('Usuário cadastrado com sucesso.'),
      err => console.error('Erro ao cadastrar usuário.')
    );
  }
}
