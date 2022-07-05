import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Campanha } from 'src/app/model/campanha.model';
import { CampanhaRepository } from 'src/app/model/campanha.repository';
import { ModalexcluircampanhaService } from 'src/app/services/modalexcluircampanha.service';

@Component({
  selector: 'app-campanha',
  templateUrl: './campanha.component.html',
  styleUrls: ['./campanha.component.sass'],
})
export class CampanhaComponent implements OnInit {
  containerBotoesEditarEexcluirOculto = true;

  @Input() campanha: Campanha;

  constructor(
    private repository: CampanhaRepository,
    private modalexcluircampanha: ModalexcluircampanhaService
  ) {}

  campanhaParaSerEditada(campanha: Campanha) {
    return this.repository.editCampanha(campanha);
  }

  displayModalExcluirCampanha(displayModalExcluirCampanha: boolean) {
    this.modalexcluircampanha.setDisplayModalExcluirCampanha(
      displayModalExcluirCampanha
    );

    this.setCampanhaASerExcluida();
  }

  setCampanhaASerExcluida(): void {
    this.modalexcluircampanha.setCampanhaASerExcluida(this.campanha);
  }

  campanhaAserExcluida(campanha: Campanha): void {
    this.repository.campanhaAserExcluida(campanha);
  }

  exibirBotoesEditarEexcluir(btnEditar: HTMLButtonElement): void {
    // console.log(`.${btnEditar.classList[1]} .btn-editar__container-botoes`);

    const containerBotoesEditarEexcluirDOM = <HTMLDivElement>(
      document.querySelector(
        `.${btnEditar.classList[1]} .btn-editar__container-botoes`
      )
    );

    if (this.containerBotoesEditarEexcluirOculto) {
      this.containerBotoesEditarEexcluirOculto = false;
      containerBotoesEditarEexcluirDOM.style.display = 'block';
    } else {
      this.containerBotoesEditarEexcluirOculto = true;
      containerBotoesEditarEexcluirDOM.style.display = 'none';
    }
  }

  classeBtn(): string {
    return `campanha__btn-editar btn-editar${this.campanha.id}`;
  }

  ngOnInit(): void {}
}
