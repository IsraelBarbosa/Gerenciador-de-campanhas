import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListagemdecampanhasComponent } from './pages/listagemdecampanhas/listagemdecampanhas.component';
import { InfodadosModule } from './components/infodados/infodados.module';
import { CampanhastituloComponent } from './components/campanhastitulo/campanhastitulo.component';
import { TodascampanhasModule } from './components/todascampanhas/todascampanhas.module';
import { EditarcampanhaComponent } from './pages/editarcampanha/editarcampanha.component';

import { BtnlaranjaModule } from './components/btnlaranja/btnlaranja.module';

import { CadastrodecampanhaComponent } from './pages/cadastrodecampanha/cadastrodecampanha.component';
import { CampanhastituloebtnlaranjaComponent } from './components/campanhastituloebtnlaranja/campanhastituloebtnlaranja.component';
import { FormCadastrodecampanhaComponent } from './components/formcadastrodecampanha/formcadastrodecampanha.component';
import { AlertacampanhacadastradaComponent } from './components/alertacampanhacadastrada/alertacampanhacadastrada.component';
import { FormcriarcontaComponent } from './components/formcriarconta/formcriarconta.component';
import { CriarcontaComponent } from './pages/criarconta/criarconta.component';
import { EduzzcampaignmanagerComponent } from './components/eduzzcampaignmanager/eduzzcampaignmanager.component';
import { LoginComponent } from './pages/login/login.component';
import { FormloginComponent } from './components/formlogin/formlogin.component';
import { EsqueciminhasenhaComponent } from './pages/esqueciminhasenha/esqueciminhasenha.component';
import { FormesqueciminhasenhaComponent } from './components/formesqueciminhasenha/formesqueciminhasenha.component';
import { CodigodeverificacaoComponent } from './pages/codigodeverificacao/codigodeverificacao.component';
import { FormcodigoverificacaoComponent } from './components/formcodigoverificacao/formcodigoverificacao.component';
import { RedefinirsenhaComponent } from './pages/redefinirsenha/redefinirsenha.component';
import { FormredefinirsenhaComponent } from './components/formredefinirsenha/formredefinirsenha.component';

// Moeda
registerLocaleData(ptBr);

// ngx-mask
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListagemdecampanhasComponent,
    CampanhastituloComponent,
    EditarcampanhaComponent,
    FormCadastrodecampanhaComponent,
    CadastrodecampanhaComponent,
    CampanhastituloebtnlaranjaComponent,
    AlertacampanhacadastradaComponent,
    FormcriarcontaComponent,
    CriarcontaComponent,
    EduzzcampaignmanagerComponent,
    LoginComponent,
    FormloginComponent,
    EsqueciminhasenhaComponent,
    FormesqueciminhasenhaComponent,
    CodigodeverificacaoComponent,
    FormcodigoverificacaoComponent,
    RedefinirsenhaComponent,
    FormredefinirsenhaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfodadosModule,
    TodascampanhasModule,
    BtnlaranjaModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
