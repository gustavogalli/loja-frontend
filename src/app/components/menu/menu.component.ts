import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private authService: AuthService){}

  customerUsername: string | null = null;

  ngOnInit(){
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.customerUsername = user.username;

  }

  isUserLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
