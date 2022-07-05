import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampanhaComponent } from './campanha/campanha.component';
import { TodascampanhasComponent } from './todascampanhas.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ModelModule } from 'src/app/model/model.module';
import { BtnlaranjaModule } from '../btnlaranja/btnlaranja.module';
import { ModalexcluircampanhaComponent } from './modalexcluircampanha/modalexcluircampanha.component';
import { NenhumacampanhaencontradaComponent } from './nenhumacampanhaencontrada/nenhumacampanhaencontrada.component';

@NgModule({
  declarations: [
    CampanhaComponent,
    TodascampanhasComponent,
    ModalexcluircampanhaComponent,
    NenhumacampanhaencontradaComponent,
  ],
  imports: [CommonModule, AppRoutingModule, ModelModule, BtnlaranjaModule],
  exports: [TodascampanhasComponent],
})
export class TodascampanhasModule {}
