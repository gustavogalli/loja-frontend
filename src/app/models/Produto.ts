import { UserModel } from "./UserModel";

export interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    comprador?: UserModel;
    vendedor?: UserModel;
  }