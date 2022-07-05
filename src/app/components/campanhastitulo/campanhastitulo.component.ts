import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campanhastitulo',
  templateUrl: './campanhastitulo.component.html',
  styleUrls: ['./campanhastitulo.component.sass'],
})
export class CampanhastituloComponent implements OnInit {
  constructor() {}

  @Input() subTitulo = 'Gerencie suas campanhas';

  ngOnInit(): void {}
}
