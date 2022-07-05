import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  dataValidator,
  linkValidator,
  dinheiroValidator,
} from 'src/app/directive/shared/customFormValidator.directive';
import { Campanha } from 'src/app/model/campanha.model';
import { CampanhaRepository } from 'src/app/model/campanha.repository';

@Component({
  selector: 'app-editarcampanha',
  templateUrl: './editarcampanha.component.html',
  styleUrls: ['./editarcampanha.component.sass'],
})
export class EditarcampanhaComponent implements OnInit {
  public formCampanha: FormGroup;
  public campanhaAntiga: Campanha;
  public campanhaEditada: Campanha;
  public formEditarCampanha: FormGroup;

  constructor(private repository: CampanhaRepository, private router: Router) {}

  private createFormEditarCampanha(campanha: Campanha): void {
    this.formEditarCampanha = new FormGroup({
      descCampanha: new FormControl(campanha.descCampanha, [
        Validators.required,
        Validators.minLength(3),
      ]),
      link: new FormControl(campanha.link, [
        Validators.required,
        Validators.minLength(8),
        linkValidator(
          /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
        ),
      ]),
      fonte: new FormControl(campanha.fonte.toLowerCase(), [
        Validators.required,
      ]),
      investimento: new FormControl(
        campanha.investimento.toString().replace('.', ','),
        dinheiroValidator('0.00')
      ),
      faturamento: new FormControl(
        campanha.faturamento.toString().replace('.', ',')
      ),
      inicio: new FormControl(
        campanha.inicio,
        dataValidator(
          /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
        )
      ),
      termino: new FormControl(
        campanha.termino,
        dataValidator(
          /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
        )
      ),
    });
  }

  get descCampanha() {
    return this.formEditarCampanha.get('descCampanha');
  }

  get link() {
    return this.formEditarCampanha.get('link');
  }

  get fonte() {
    return this.formEditarCampanha.get('fonte');
  }

  get investimento() {
    return this.formEditarCampanha.get('investimento');
  }

  get faturamento() {
    return this.formEditarCampanha.get('faturamento');
  }

  get inicio() {
    return this.formEditarCampanha.get('inicio');
  }

  get termino() {
    return this.formEditarCampanha.get('termino');
  }

  changeFonteCampanha(fonteCampanha: HTMLSelectElement): void {
    const optionDefault: HTMLOptionElement = document.querySelector(
      `.${fonteCampanha.classList[0]} > option`
    );

    if (!optionDefault.disabled) {
      optionDefault.disabled = true;
    }

    this.formEditarCampanha.patchValue({
      fonteCampannha: fonteCampanha.value,
    });
  }

  formatarValueOnlyLettersSpaces(input: HTMLInputElement): void {
    input.value = input.value.replace(/[^A-zÀ-ÿ\s]/g, '');
  }

  editarCampanha() {
    this.repository.updateCampanha(
      this.campanhaAntiga,
      this.formEditarCampanha.value
    );
    this.router.navigate(['/listagemdecampanhas']);
  }

  campanhaASerEditada(): void {
    this.createFormEditarCampanha(this.repository.campanhaAserEditada());
    this.campanhaAntiga = this.repository.campanhaAserEditada();
  }

  ngOnInit(): void {
    if (this.repository.campanhaAserEditada() === undefined) {
      this.router.navigate(['/listagemdecampanhas']);
    } else {
      this.campanhaASerEditada();
    }
  }
}
