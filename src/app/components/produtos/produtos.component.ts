import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  produtos: Produto[] = [];

  constructor(private service: ProdutosService){}

  ngOnInit(){
    this.service.getProdutos().subscribe(resp => {
      this.produtos = resp;
    })
  }

}
