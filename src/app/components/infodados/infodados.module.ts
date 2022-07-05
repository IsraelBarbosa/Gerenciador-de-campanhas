import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfodadosComponent } from './infodados.component';
import { MediaroiComponent } from './mediaroi/mediaroi.component';
import { ValorfaturadoComponent } from './valorfaturado/valorfaturado.component';
import { ValorinvestidoComponent } from './valorinvestido/valorinvestido.component';
// import { ModelModule } from "src/app/model/model.module";

@NgModule({
  declarations: [
    MediaroiComponent,
    ValorfaturadoComponent,
    ValorinvestidoComponent,
    InfodadosComponent,
  ],
  imports: [CommonModule],
  exports: [InfodadosComponent],
})
export class InfodadosModule {}
