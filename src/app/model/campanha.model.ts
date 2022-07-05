export class Campanha {
  constructor(
    public id?: number,
    public descCampanha?: string,
    public link?: string,
    public fonte?: string,
    public investimento?: number,
    public faturamento?: number,
    public roi?: number,
    public inicio?: string,
    public termino?: string
  ) {}
}
