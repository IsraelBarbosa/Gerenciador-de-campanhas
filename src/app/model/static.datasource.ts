import { Injectable } from '@angular/core';
import { Campanha } from './campanha.model';

@Injectable()
export class StaticDataSource {
  private data: Campanha[] = [];

  constructor() {
    this.data = new Array<Campanha>(
      new Campanha(
        this.generateRandomIdCampanha(),
        'Descrição da campanha',
        'https://www.google.com',
        'facebook',
        100.54,
        800000.54,
        this.getROICampanha(100.54, 800000.54),
        '20/04/2021',
        '14/09/2021'
      ),
      new Campanha(
        this.generateRandomIdCampanha(),
        'Dia das mães',
        'https://www.google.com',
        'facebook',
        100.54,
        500.54,
        this.getROICampanha(100.54, 500.54),
        '20/04/2021',
        '14/09/2021'
      ),
      new Campanha(
        this.generateRandomIdCampanha(),
        'Ação social',
        'https://www.google.com',
        'facebook',
        100.54,
        600.54,
        this.getROICampanha(100.54, 600.54),
        '20/04/2021',
        '14/09/2021'
      ),
      new Campanha(
        this.generateRandomIdCampanha(),
        'Dia dos pais',
        'https://www.google.com',
        'facebook',
        200.54,
        400.54,
        this.getROICampanha(200.54, 400.54),
        '20/04/2021',
        '14/09/2021'
      ),
      new Campanha(
        this.generateRandomIdCampanha(),
        'Evento 1',
        'https://www.google.com',
        'facebook',
        400.54,
        500.54,
        this.getROICampanha(400.54, 500.54),
        '20/04/2021',
        '14/09/2021'
      )
    );
  }

  generateRandomIdCampanha(): number {
    let idCampRandom: number;

    let idCampanhaRandom = () => {
      idCampRandom = Math.round(Math.random() * 10000);

      const campanhaIdJaExiste = this.data.some((campanha) => {
        campanha.id === idCampRandom;
      });

      if (campanhaIdJaExiste) {
        idCampanhaRandom();
      }
    };
    idCampanhaRandom();

    return idCampRandom;
  }

  getROICampanha(
    campanhaInvestimento: number,
    campanhaFaturamento: number
  ): number {
    const ROICampnha =
      (campanhaFaturamento - campanhaInvestimento) / campanhaInvestimento;
    return ROICampnha;
  }

  getData(): Campanha[] {
    return this.data;
  }
}
