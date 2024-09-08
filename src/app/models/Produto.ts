import { Usuario } from "./Usuario";

export class Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    categoria: string;
    comprador?: Usuario;
    vendedor?: Usuario;
  }