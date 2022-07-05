import { Component, OnInit, OnChanges } from '@angular/core';
import { Campanha } from 'src/app/model/campanha.model';
import { CampanhaRepository } from 'src/app/model/campanha.repository';

interface displayModalDeExcluirCampanha {
  displayModalDeExcluirCampanha?: boolean;
  campanhaParaExcluir?: Campanha;
}

@Component({
  selector: 'app-todascampanhas',
  templateUrl: './todascampanhas.component.html',
  styleUrls: ['./todascampanhas.component.sass'],
})
export class TodascampanhasComponent implements OnInit {
  // campanhaRepository: CampanhaRepository = new CampanhaRepository();

  displayModalDeExcluirCampanhaETambemExcluirACampanha: displayModalDeExcluirCampanha;

  constructor(private repository: CampanhaRepository) {}

  getCampanhas(): Campanha[] {
    return this.repository.getCampanhas();
  }

  getCampanha(campanha: Campanha) {
    return this.repository.getCampanha(campanha);
  }

  displayModalDeExcluirCampanha(obj: displayModalDeExcluirCampanha): void {
    this.displayModalDeExcluirCampanhaETambemExcluirACampanha = obj;
  }

  ngOnInit(): void {}
}
