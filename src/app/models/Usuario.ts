import { Produto } from "./Produto";

export class Usuario {
    id: number;
    username: string;
    password: string;
    nome: string;
    email: string;
    foto: string;
    carrinho: Produto[];
    produtosComprados: Produto[];
    estoque?: Produto[];
    produtosVendidos?: Produto[];
  }