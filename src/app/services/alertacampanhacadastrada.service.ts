import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertacampanhacadastradaService {
  private displayAlertaCampanhaCadastrada = false;

  constructor() {}

  getDisplayAlertaCampanhaCadastrada() {
    return this.displayAlertaCampanhaCadastrada;
  }

  setDisplayAlertaCampanhaCadastrada(displayAlertaCampanhaCadastrada: boolean) {
    this.displayAlertaCampanhaCadastrada = displayAlertaCampanhaCadastrada;
  }
}
