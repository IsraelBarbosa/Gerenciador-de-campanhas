import { Component, OnInit } from '@angular/core';
import { CampanhaRepository } from 'src/app/model/campanha.repository';

@Component({
  selector: 'app-mediaroi',
  templateUrl: './mediaroi.component.html',
  styleUrls: ['./mediaroi.component.sass'],
})
export class MediaroiComponent implements OnInit {
  constructor(private repository: CampanhaRepository) {}

  getTotalROI(): number {
    return this.repository.getTotalROI();
  }

  ngOnInit(): void {}
}
