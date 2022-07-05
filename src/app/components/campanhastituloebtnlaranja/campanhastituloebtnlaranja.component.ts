import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campanhastituloebtnlaranja',
  templateUrl: './campanhastituloebtnlaranja.component.html',
  styleUrls: ['./campanhastituloebtnlaranja.component.sass'],
})
export class CampanhastituloebtnlaranjaComponent implements OnInit {
  @Input() link: string;

  constructor() {}

  ngOnInit(): void {}
}
