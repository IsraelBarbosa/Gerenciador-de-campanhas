import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrodecampanhaComponent } from './pages/cadastrodecampanha/cadastrodecampanha.component';
import { CodigodeverificacaoComponent } from './pages/codigodeverificacao/codigodeverificacao.component';
import { CriarcontaComponent } from './pages/criarconta/criarconta.component';
import { EditarcampanhaComponent } from './pages/editarcampanha/editarcampanha.component';
import { EsqueciminhasenhaComponent } from './pages/esqueciminhasenha/esqueciminhasenha.component';
import { ListagemdecampanhasComponent } from './pages/listagemdecampanhas/listagemdecampanhas.component';
import { LoginComponent } from './pages/login/login.component';
import { RedefinirsenhaComponent } from './pages/redefinirsenha/redefinirsenha.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastrodecampanha', component: CadastrodecampanhaComponent },
  { path: 'listagemdecampanhas', component: ListagemdecampanhasComponent },
  { path: 'editarcampanha', component: EditarcampanhaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'esqueciminhasenha', component: EsqueciminhasenhaComponent },
  { path: 'criarconta', component: CriarcontaComponent },
  { path: 'codigodeverificacao', component: CodigodeverificacaoComponent },
  { path: 'redefinirsenha', component: RedefinirsenhaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
