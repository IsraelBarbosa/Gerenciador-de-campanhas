import { Component, OnInit } from '@angular/core';
import { CampanhaRepository } from 'src/app/model/campanha.repository';

@Component({
  selector: 'app-valorinvestido',
  templateUrl: './valorinvestido.component.html',
  styleUrls: ['./valorinvestido.component.sass'],
})
export class ValorinvestidoComponent implements OnInit {
  constructor(private repository: CampanhaRepository) {}

  getValorTotalInvestido(): number {
    return this.repository.getValorTotalInvestido();
  }

  ngOnInit(): void {}
}
