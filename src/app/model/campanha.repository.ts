import { Injectable } from '@angular/core';
import { Campanha } from './campanha.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class CampanhaRepository {
  private dataSource: StaticDataSource;
  private campanhas: Campanha[];
  public campanhaAserEdit: Campanha;

  constructor() {
    this.dataSource = new StaticDataSource();
    this.campanhas = new Array<Campanha>();
    this.dataSource
      .getData()
      .forEach((campanha) => this.campanhas.push(campanha));
  }

  getValorTotalFaturado(): number {
    return Number(
      this.campanhas
        .reduce((valorFaturado, campanha) => {
          return (valorFaturado += Number(campanha.faturamento));
        }, 0)
        .toFixed(2)
    );
  }

  getValorTotalInvestido(): number {
    return Number(
      this.campanhas
        .reduce((valorFaturado, campanha) => {
          return (valorFaturado += Number(campanha.investimento));
        }, 0)
        .toFixed(2)
    );
  }

  getTotalROI(): number {
    const ROI =
      (this.getValorTotalFaturado() - this.getValorTotalInvestido()) /
      this.getValorTotalInvestido();

    return ROI || 0.0;
  }

  getCampanhas(): Campanha[] {
    return this.campanhas;
  }

  getCampanha(camp: Campanha) {
    return this.campanhas.find((campanha) => camp === campanha);
  }

  generateRandomIdCampanha(): number {
    return Math.round(Math.random() * 10000);
  }

  getROICampanha(
    campanhaInvestimento: number,
    campanhaFaturamento: number
  ): number {
    const ROICampnha =
      (campanhaFaturamento - campanhaInvestimento) / campanhaInvestimento;
    console.log(
      'campanhaInvestimento',
      campanhaInvestimento,
      'ROICampnha',
      ROICampnha
    );
    return ROICampnha;
  }

  public cadastrarCampanha(campanha: Campanha) {
    const novaCampanha = new Campanha(
      this.generateRandomIdCampanha(),
      campanha.descCampanha,
      campanha.link,
      campanha.fonte,
      Number(campanha.investimento.toString().replace(',', '.')),
      Number(campanha.faturamento.toString().replace(',', '.')),
      this.getROICampanha(
        Number(campanha.investimento.toString().replace(',', '.')),
        Number(campanha.faturamento.toString().replace(',', '.'))
      ),
      campanha.inicio,
      campanha.termino
    );

    console.log('novaCampanhaCadastrada', novaCampanha);

    this.campanhas.push(novaCampanha);
  }

  editCampanha(campanha: Campanha) {
    this.campanhaAserEdit = campanha;

    console.log(this.campanhaAserEditada);
  }

  campanhaAserEditada(): Campanha {
    return this.campanhaAserEdit;
  }

  campanhaAserExcluida(campanha: Campanha): void {
    const campanhaAserExcluidaIndex = this.campanhas.findIndex(
      (camp) => campanha === camp
    );
    this.campanhas.splice(campanhaAserExcluidaIndex, 1);
  }

  updateCampanha(campanhaNaoEditada: Campanha, campanhaEditada: Campanha) {
    const campanhaNaoEditadaIndex = this.campanhas.findIndex(
      (campanha) => campanhaNaoEditada === campanha
    );

    const campanhaEdit = new Campanha(
      campanhaNaoEditada.id,
      campanhaEditada.descCampanha,
      campanhaEditada.link,
      campanhaEditada.fonte,
      Number(campanhaEditada.investimento.toString().replace(',', '.')),
      Number(campanhaEditada.faturamento.toString().replace(',', '.')),
      this.getROICampanha(
        Number(campanhaEditada.investimento.toString().replace(',', '.')),
        Number(campanhaEditada.faturamento.toString().replace(',', '.'))
      ),
      campanhaEditada.inicio,
      campanhaEditada.termino
    );

    console.log('campanhaNaoEditada', campanhaNaoEditada);
    console.log('campanhaEditada', campanhaEdit);

    this.campanhas[campanhaNaoEditadaIndex] = {
      ...campanhaNaoEditada,
      ...campanhaEdit,
    };
  }
}
