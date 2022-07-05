import { NgModule } from '@angular/core';
import { CampanhaRepository } from './campanha.repository';
import { StaticDataSource } from './static.datasource';

@NgModule({
  providers: [CampanhaRepository, StaticDataSource],
})
export class ModelModule {}
