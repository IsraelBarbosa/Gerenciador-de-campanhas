import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from 'src/app/directive/shared/customFormValidator.directive';

@Component({
  selector: 'app-formredefinirsenha',
  templateUrl: './formredefinirsenha.component.html',
  styleUrls: ['./formredefinirsenha.component.sass'],
})
export class FormredefinirsenhaComponent implements OnInit {
  public formRedefinirSenha: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private router: Router) {
    this.formRedefinirSenha = fb.group(
      {
        senha: ['minhasenha', [Validators.required, Validators.minLength(6)]],
        confirmarsenha: [
          'minhasenha',
          [Validators.required, Validators.minLength(6)],
        ],
      },
      { validator: ConfirmedValidator('senha', 'confirmarsenha') }
    );
  }

  get f() {
    return this.formRedefinirSenha.controls;
  }

  get passwordMatchError() {
    return (
      this.formRedefinirSenha.getError('mismatch') &&
      this.formRedefinirSenha.get('confirmarsenha')?.dirty
    );
  }

  mostrarSenha(inputSenha: HTMLInputElement): void {
    if (inputSenha.type === 'password') {
      inputSenha.type = 'text';
    } else {
      inputSenha.type = 'password';
    }
  }

  redefinirSenha(): void {
    console.log(this.formRedefinirSenha.value);
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {}
}
