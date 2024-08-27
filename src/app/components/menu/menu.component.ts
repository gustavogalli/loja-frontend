import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private authService: AuthService){}

  usuario: Usuario = new Usuario();

  ngOnInit(){
    const userData = localStorage.getItem('user');
    if (userData) {
      this.usuario = JSON.parse(userData);
    }
  
  }

  isUserLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
