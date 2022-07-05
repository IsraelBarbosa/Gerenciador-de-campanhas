import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function dinheiroValidator(value: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // console.log(control.value);

    const forbidden = Number(control.value) <= Number(value);
    return forbidden ? { forbiddenDinheiro: { value: control.value } } : null;
  };
}

export function linkValidator(valueReg: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // console.log(control.value);

    const forbidden = !valueReg.test(control.value);
    return forbidden ? { forbiddenLink: { value: control.value } } : null;
  };
}

export function dataValidator(valueReg: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // console.log(control.value);

    const forbidden = !valueReg.test(control.value);
    return forbidden ? { forbiddenData: { value: control.value } } : null;
  };
}

export function emailValidator(valueReg: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // console.log(control.value);

    const forbidden = !valueReg.test(control.value);
    return forbidden ? { forbiddenEmail: { value: control.value } } : null;
  };
}

export function ConfirmedValidator(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
