import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private apiUrl = 'http://localhost:8080/api/produto';

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.apiUrl}`, { withCredentials: true });
  }

  getCategorias(): Observable<string[]>{
    return this.http.get<string[]>(`${this.apiUrl}/categoria`, { withCredentials: true });
  }

  // getProdutosByCategoria(categoria: string): Observable<Produto[]>{
  //   return this.http.get<Produto[]>(`${this.apiUrl}/categoria/${categoria}`, { withCredentials: true });
  // }
}
