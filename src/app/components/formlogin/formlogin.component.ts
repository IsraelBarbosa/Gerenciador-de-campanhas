import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/directive/shared/customFormValidator.directive';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.sass'],
})
export class FormloginComponent implements OnInit {
  constructor(private router: Router) {}

  formLoginConta: FormGroup = new FormGroup({
    email: new FormControl('meuemail@gmail.com', [
      Validators.required,
      emailValidator(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/),
    ]),
    senha: new FormControl('minhasenha', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get email() {
    return this.formLoginConta.get('email');
  }

  get senha() {
    return this.formLoginConta.get('senha');
  }

  mostrarSenha(inputSenha: HTMLInputElement): void {
    if (inputSenha.type === 'password') {
      inputSenha.type = 'text';
    } else {
      inputSenha.type = 'password';
    }
  }

  loginConta(): void {
    console.log(this.formLoginConta.value);
    this.router.navigate(['/listagemdecampanhas']);
  }

  ngOnInit(): void {}
}
