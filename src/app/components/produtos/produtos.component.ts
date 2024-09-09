import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Produto } from 'src/app/models/Produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  produtos: Produto[] = [];
  produtosFiltrados: Produto[] = [];

  categorias: string[] = [];
  categoriaSelecionada: string = '';

  constructor(private service: ProdutosService){}

  ngOnInit(){
    this.getProdutos();
  }

  getProdutos(){
    this.service.getProdutos().subscribe(resp => {
      this.produtos = resp;
      this.produtosFiltrados = this.produtos;
      this.getCategorias();
    })
  }

  getCategorias(){
    const allCategorias = new Set<string>();

    this.produtos.forEach(produto => {
      allCategorias.add(produto.categoria);
    })

    this.categorias = Array.from(allCategorias).sort();
  }

  
  onCategoriaSelecionada(categoriaSelecionada: string){
    this.categoriaSelecionada = categoriaSelecionada;
    this.filtrarProdutos();
  }

  filtrarProdutos(){
    if(this.categoriaSelecionada) {
      this.produtosFiltrados = this.produtos.filter(produto => produto.categoria == this.categoriaSelecionada);
    } else {
      this.produtosFiltrados = this.produtos;
    }
  }

}
