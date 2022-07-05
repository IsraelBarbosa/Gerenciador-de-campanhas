import { Component, OnInit } from '@angular/core';
import { CampanhaRepository } from 'src/app/model/campanha.repository';

@Component({
  selector: 'app-valorfaturado',
  templateUrl: './valorfaturado.component.html',
  styleUrls: ['./valorfaturado.component.sass'],
})
export class ValorfaturadoComponent implements OnInit {
  constructor(private repository: CampanhaRepository) {}

  getValorTotalFaturado(): number {
    return this.repository.getValorTotalFaturado();
  }

  ngOnInit(): void {}
}
