import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/directive/shared/customFormValidator.directive';

@Component({
  selector: 'app-formesqueciminhasenha',
  templateUrl: './formesqueciminhasenha.component.html',
  styleUrls: ['./formesqueciminhasenha.component.sass'],
})
export class FormesqueciminhasenhaComponent implements OnInit {
  constructor(private router: Router) {}

  formEsqueciMinhaSenha: FormGroup = new FormGroup({
    email: new FormControl('meuemail@gmail.com', [
      Validators.required,
      emailValidator(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/),
    ]),
  });

  get email() {
    return this.formEsqueciMinhaSenha.get('email');
  }

  esqueciMinhaSenha(): void {
    console.log(this.formEsqueciMinhaSenha.value, 'ola');
    this.router.navigate(['/codigodeverificacao']);
  }

  ngOnInit(): void {}
}
