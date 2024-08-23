import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  usuario: Usuario = new Usuario();

  ngOnInit(){
    const userData = localStorage.getItem('user');
    if (userData) {
      this.usuario = JSON.parse(userData);
      console.log("=============================")
      console.log(this.usuario)
    }
  
  }

}
