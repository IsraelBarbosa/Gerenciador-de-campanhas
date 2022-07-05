import { Injectable } from '@angular/core';
import { Campanha } from '../model/campanha.model';

@Injectable({
  providedIn: 'root',
})
export class ModalexcluircampanhaService {
  private displayModalExcluirCampanha = false;
  private campanhaASerExcluida: Campanha;

  constructor() {}

  public getDisplayModalExcluirCampanha(): boolean {
    return this.displayModalExcluirCampanha;
  }

  public setDisplayModalExcluirCampanha(
    displayModalExcluirCampanha: boolean
  ): void {
    this.displayModalExcluirCampanha = displayModalExcluirCampanha;
  }

  public getCampanhaASerExcluida(): Campanha {
    return this.campanhaASerExcluida;
  }

  public setCampanhaASerExcluida(campanhaASerExcluida: Campanha): void {
    this.campanhaASerExcluida = campanhaASerExcluida;
  }
}
