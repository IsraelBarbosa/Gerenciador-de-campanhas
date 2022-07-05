import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formcodigoverificacao',
  templateUrl: './formcodigoverificacao.component.html',
  styleUrls: ['./formcodigoverificacao.component.sass'],
})
export class FormcodigoverificacaoComponent implements OnInit {
  constructor(private router: Router) {}

  formCodigoVerificao: FormGroup = new FormGroup({
    codigoVerificacao: new FormControl('41991', [Validators.required]),
  });

  get codigoVerificacao() {
    return this.formCodigoVerificao.get('codigoVerificacao');
  }

  formatarInput(input: HTMLInputElement) {
    input.value = input.value.replace(/[^0-9]/g, '');
  }

  codigoVerificao(): void {
    console.log(this.formCodigoVerificao.value);
    this.router.navigate(['/redefinirsenha']);
  }

  ngOnInit(): void {}
}
