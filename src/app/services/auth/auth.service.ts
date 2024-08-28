import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn(): boolean{
    return !!localStorage.getItem('user');
  }

  register(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/cadastrar`, user);
  }

  login(credentials: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, credentials);
  }

  logout() {
    this.http.get(`${this.apiUrl}/logout`, { withCredentials: true }).subscribe(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
  }
  
}