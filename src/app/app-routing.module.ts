import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/auth/cadastrar/cadastrar.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProdutosComponent } from './components/produtos/produtos.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},

  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'login', component: LoginComponent},

  {path: 'home', component: HomeComponent},
  {path: 'produtos', component: ProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
