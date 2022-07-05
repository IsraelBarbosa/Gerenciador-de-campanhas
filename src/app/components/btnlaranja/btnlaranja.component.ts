import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CampanhaRepository } from 'src/app/model/campanha.repository';
import { AlertacampanhacadastradaService } from 'src/app/services/alertacampanhacadastrada.service';
import { ModalexcluircampanhaService } from 'src/app/services/modalexcluircampanha.service';

@Component({
  selector: 'app-btnlaranja',
  templateUrl: './btnlaranja.component.html',
  styleUrls: ['./btnlaranja.component.sass'],
})
export class BtnlaranjaComponent implements OnInit {
  @Input() buttonType = 'button';
  @Input() formInvalid = false;
  @Input() routLink: string;
  @Input() displayIcon = true;
  @Input() btnBig = false;
  @Input() innerText = 'Cadastrar nova Campanha';
  @Input() btnSmallAtivar = false;
  @Input() exibirAlertaCampanhaCadastrada = false;

  // campanha
  @Input() excluirCampanha = false;

  constructor(
    private repository: CampanhaRepository,
    private modalexcluircampanha: ModalexcluircampanhaService,
    private exibirAlertaCampCadastrada: AlertacampanhacadastradaService
  ) {}

  public clickEvent(): void {
    if (this.excluirCampanha) {
      this.modalexcluircampanha.setDisplayModalExcluirCampanha(false);
      this.repository.campanhaAserExcluida(
        this.modalexcluircampanha.getCampanhaASerExcluida()
      );
    }

    if (this.exibirAlertaCampanhaCadastrada) {
      this.exibirAlertaCampCadastrada.setDisplayAlertaCampanhaCadastrada(true);
    }
  }

  public setDisplayModalExcluirCampanha(
    displayModalExcluirCampanha: boolean
  ): void {
    this.modalexcluircampanha.setDisplayModalExcluirCampanha(
      displayModalExcluirCampanha
    );
  }

  ngOnInit(): void {}
}
