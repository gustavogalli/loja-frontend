import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from 'src/app/models/Usuario';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private authService: AuthService, private dialog: MatDialog){}

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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px'
    });
  
    dialogRef.afterClosed().subscribe(resp => {
      if (resp) {
        this.logout();
      }
    });
  }

  logout(){
    this.authService.logout()
  }

}
