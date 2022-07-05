import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/directive/shared/customFormValidator.directive';

@Component({
  selector: 'app-formcriarconta',
  templateUrl: './formcriarconta.component.html',
  styleUrls: ['./formcriarconta.component.sass'],
})
export class FormcriarcontaComponent implements OnInit {
  constructor(private router: Router) {}

  formCadastroConta: FormGroup = new FormGroup({
    nome: new FormControl('João da Silva', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('meuemail@gmail.com', [
      Validators.required,
      emailValidator(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/),
    ]),
    senha: new FormControl('minhasenha', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get nome() {
    return this.formCadastroConta.get('nome');
  }

  get email() {
    return this.formCadastroConta.get('email');
  }

  get senha() {
    return this.formCadastroConta.get('senha');
  }

  formatarValueOnlyLettersSpaces(input: HTMLInputElement): void {
    input.value = input.value.replace(/[^A-zÀ-ÿ\s]/g, '');
  }

  mostrarSenha(inputSenha: HTMLInputElement): void {
    if (inputSenha.type === 'password') {
      inputSenha.type = 'text';
    } else {
      inputSenha.type = 'password';
    }
  }

  cadastrarConta(): void {
    console.log(this.formCadastroConta.value);
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {}
}
