import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertacampanhacadastradaService } from 'src/app/services/alertacampanhacadastrada.service';

@Component({
  selector: 'app-alertacampanhacadastrada',
  templateUrl: './alertacampanhacadastrada.component.html',
  styleUrls: ['./alertacampanhacadastrada.component.sass'],
})
export class AlertacampanhacadastradaComponent implements OnInit, OnDestroy {
  setTimeoutAlertaCampanhaCriada: ReturnType<typeof setTimeout>;

  constructor(
    private exibirAlertaCampCadastrada: AlertacampanhacadastradaService
  ) {}

  public getDisplayAlertaCampanhaCadastrada(): boolean {
    return this.exibirAlertaCampCadastrada.getDisplayAlertaCampanhaCadastrada();
  }

  public fecharAlerta(svgClose: SVGElement): void {
    svgClose.parentElement.parentElement.style.display = 'none';
  }

  public fecharAlertaSetTimeout(): void {
    this.setTimeoutAlertaCampanhaCriada = setTimeout(() => {
      (<HTMLDivElement>(
        document.querySelector('.alerta-campanha-criada')
      )).style.display = 'none';
    }, 3000);
  }

  ngOnInit(): void {
    if (this.getDisplayAlertaCampanhaCadastrada()) {
      this.fecharAlertaSetTimeout();
    }
  }

  ngOnDestroy(): void {
    this.exibirAlertaCampCadastrada.setDisplayAlertaCampanhaCadastrada(false);

    clearTimeout(this.setTimeoutAlertaCampanhaCriada);
  }
}
