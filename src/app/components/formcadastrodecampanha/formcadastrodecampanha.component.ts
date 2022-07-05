import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  dataValidator,
  linkValidator,
  dinheiroValidator,
} from 'src/app/directive/shared/customFormValidator.directive';
import { CampanhaRepository } from 'src/app/model/campanha.repository';

@Component({
  selector: 'app-formcadastrodecampanha',
  templateUrl: './formcadastrodecampanha.component.html',
  styleUrls: ['./formcadastrodecampanha.component.sass'],
})
export class FormCadastrodecampanhaComponent implements OnInit {
  @Output() exibirAlertaCampanhaCadastradaEvent = new EventEmitter<boolean>();

  constructor(private repository: CampanhaRepository, private router: Router) {}

  public formCadastroCampanha: FormGroup = new FormGroup({
    descCampanha: new FormControl('campanha do facebook', [
      Validators.required,
      Validators.minLength(3),
    ]),
    link: new FormControl('www.facebook.com', [
      Validators.required,
      Validators.minLength(8),
      linkValidator(
        /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
      ),
    ]),
    fonte: new FormControl('instagram', [Validators.required]),
    investimento: new FormControl('320,47', dinheiroValidator('0.00')),
    faturamento: new FormControl('150,26'),
    inicio: new FormControl(
      '10/10/2020',
      dataValidator(
        /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
      )
    ),
    termino: new FormControl(
      '10/12/2020',
      dataValidator(
        /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
      )
    ),
  });

  get descCampanha() {
    return this.formCadastroCampanha.get('descCampanha');
  }

  get link() {
    return this.formCadastroCampanha.get('link');
  }

  get fonte() {
    return this.formCadastroCampanha.get('fonte');
  }

  get investimento() {
    return this.formCadastroCampanha.get('investimento');
  }

  get faturamento() {
    return this.formCadastroCampanha.get('faturamento');
  }

  get inicio() {
    return this.formCadastroCampanha.get('inicio');
  }

  get termino() {
    return this.formCadastroCampanha.get('termino');
  }

  changeFonteCampanha(fonteCampanha: HTMLSelectElement): void {
    const optionDefault: HTMLOptionElement = document.querySelector(
      `.${fonteCampanha.classList[0]} > option`
    );

    if (!optionDefault.disabled) {
      optionDefault.disabled = true;
    }

    this.formCadastroCampanha.patchValue({
      fonteCampannha: fonteCampanha.value,
    });
  }

  formatarValueOnlyLettersSpaces(input: HTMLInputElement): void {
    input.value = input.value.replace(/[^A-zÀ-ÿ\s]/g, '');
  }

  cadastrarCampanha() {
    this.repository.cadastrarCampanha(this.formCadastroCampanha.value);
    console.log(
      'this.formCadastroCampanha.value',
      this.formCadastroCampanha.value
    );
    this.router.navigate(['/listagemdecampanhas']);
  }

  exibirAlertaCampanhaCadastrada(event: boolean) {
    this.exibirAlertaCampanhaCadastradaEvent.emit(event);
  }

  ngOnInit(): void {}
}
