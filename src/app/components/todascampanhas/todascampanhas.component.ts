import { Component, OnInit, OnChanges } from '@angular/core';
import { Campanha } from 'src/app/model/campanha.model';
import { CampanhaRepository } from 'src/app/model/campanha.repository';

@Component({
  selector: 'app-todascampanhas',
  templateUrl: './todascampanhas.component.html',
  styleUrls: ['./todascampanhas.component.sass'],
})
export class TodascampanhasComponent implements OnInit {
  constructor(private repository: CampanhaRepository) {}

  getCampanhas(): Campanha[] {
    return this.repository.getCampanhas();
  }

  getCampanha(campanha: Campanha) {
    return this.repository.getCampanha(campanha);
  }

  trackByMethod(index: number, campanha: Campanha): number {
    return campanha.id;
  }

  ngOnInit(): void {}
}
