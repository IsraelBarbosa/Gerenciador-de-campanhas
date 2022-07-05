import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnlaranjaComponent } from './btnlaranja.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [BtnlaranjaComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [BtnlaranjaComponent],
})
export class BtnlaranjaModule {}
