import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  mostrarNavPerfil = 'none';
  @Input() displayHeaderPerfil = true;

  constructor() {}

  mostrarOuOcultarNavPerfil() {
    this.mostrarNavPerfil = this.mostrarNavPerfil === 'none' ? 'block' : 'none';
  }

  ngOnInit(): void {}
}
