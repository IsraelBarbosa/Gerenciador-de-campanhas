export interface FormatarDinheiroOpcoes {
  acceptNumberNegative?: boolean;
}

export default class Mascara {
  constructor() {}

  formatarDinheiro(
    input: HTMLInputElement,
    opcObject?: FormatarDinheiroOpcoes
  ): void {
    let opcoesObject: FormatarDinheiroOpcoes = {
      acceptNumberNegative:
        opcObject != undefined ? opcObject.acceptNumberNegative : false,
    };

    let numberNegative: boolean = false;
    if (opcoesObject.acceptNumberNegative) {
      if (/-/g.test(input.value)) {
        numberNegative = true;
      }
    }

    let inputValueOnlyNumbers: string = input.value.replace(/\D/g, "");
    let inputLength: number = inputValueOnlyNumbers.length;

    if (inputLength === 1) {
      if (!numberNegative) {
        input.value = inputValueOnlyNumbers.replace(/(\d{1})/g, "R$ 0,0$1");
      } else {
        input.value = inputValueOnlyNumbers.replace(/(\d{1})/g, "R$ -0,0$1");
      }
    } else if (inputLength === 2) {
      if (!numberNegative) {
        input.value = inputValueOnlyNumbers.replace(/(\d{2})/g, "R$ 0,$1"); // 0,99
      } else {
        input.value = inputValueOnlyNumbers.replace(/(\d{2})/g, "R$ -0,$1"); // 0,99
      }
    } else if (inputLength === 3 && /0\d{2}/g.test(inputValueOnlyNumbers)) {
      if (!numberNegative) {
        input.value = inputValueOnlyNumbers.replace(/0(\d{2})/g, "R$ 0,$1"); // 0,99
      } else {
        input.value = inputValueOnlyNumbers.replace(/0(\d{2})/g, "R$ -0,$1"); // -0,99
      }
    } else if (
      inputLength === 4 &&
      /0(\d{1})\d{2}/g.test(inputValueOnlyNumbers)
    ) {
      if (!numberNegative) {
        input.value = inputValueOnlyNumbers.replace(
          /0(\d{1})(\d{2})/g,
          "R$ $1,$2"
        ); // 09,99 => 9,99
      } else {
        input.value = inputValueOnlyNumbers.replace(
          /0(\d{1})(\d{2})/g,
          "R$ -$1,$2"
        ); // -09,99 => -9,99
      }
    } else if (inputLength === 3) {
      if (!numberNegative) {
        input.value = inputValueOnlyNumbers.replace(/(\d)(\d{2})/, "R$ $1,$2"); // 9,99
      } else {
        input.value = inputValueOnlyNumbers.replace(/(\d)(\d{2})/, "R$ -$1,$2"); // -9,99
      }
    } else if (inputLength === 4) {
      if (!numberNegative) {
        input.value = inputValueOnlyNumbers.replace(
          /(\d{2})(\d{2})/,
          "R$ $1,$2"
        ); // 99,99
      } else {
        input.value = inputValueOnlyNumbers.replace(
          /(\d{2})(\d{2})/,
          "R$ -$1,$2"
        ); // -99,99
      }
    } else if (inputLength === 5) {
      if (!numberNegative) {
        input.value = inputValueOnlyNumbers.replace(
          /(\d{3})(\d{2})/,
          "R$ $1,$2"
        ); // 999,99
      } else {
        input.value = inputValueOnlyNumbers.replace(
          /(\d{3})(\d{2})/,
          "R$ -$1,$2"
        ); // -999,99
      }
    } else if (inputLength === 6) {
      if (!numberNegative) {
        input.value = inputValueOnlyNumbers.replace(
          /(\d{1})(\d{3})(\d{2})/,
          "R$ $1.$2,$3"
        ); // 9.999,99
      } else {
        input.value = inputValueOnlyNumbers.replace(
          /(\d{1})(\d{3})(\d{2})/,
          "R$ -$1.$2,$3"
        ); // -9.999,99
      }
    } else if (inputLength === 7) {
      if (!numberNegative) {
        input.value = inputValueOnlyNumbers.replace(
          /(\d{2})(\d{3})(\d{2})/,
          "R$ $1.$2,$3"
        ); // 99.999,99
      } else {
        input.value = inputValueOnlyNumbers.replace(
          /(\d{2})(\d{3})(\d{2})/,
          "R$ -$1.$2,$3"
        ); // -99.999,99
      }
    } else if (inputLength === 8) {
      if (!numberNegative) {
        input.value = inputValueOnlyNumbers.replace(
          /(\d{3})(\d{3})(\d{2})/,
          "R$ $1.$2,$3"
        ); // 99.999,99
      } else {
        input.value = inputValueOnlyNumbers.replace(
          /(\d{3})(\d{3})(\d{2})/,
          "R$ -$1.$2,$3"
        ); // -99.999,99
      }
    } else if (inputLength === 9) {
      if (!numberNegative) {
        input.value = inputValueOnlyNumbers.replace(
          /(\d{1})(\d{3})(\d{3})(\d{2})/,
          "R$ $1.$2.$3,$4"
        ); // 9.999.999,99
      } else {
        input.value = inputValueOnlyNumbers.replace(
          /(\d{1})(\d{3})(\d{3})(\d{2})/,
          "R$ -$1.$2.$3,$4"
        ); // -9.999.999,99
      }
    } else {
      if (!numberNegative) {
        input.value = inputValueOnlyNumbers.replace(
          /(\d{1})(\d{3})(\d{3})(\d{2})\d/,
          "R$ $1.$2.$3,$4"
        ); // 9.999.999,99
      } else {
        input.value = inputValueOnlyNumbers.replace(
          /(\d{1})(\d{3})(\d{3})(\d{2})\d/,
          "R$ -$1.$2.$3,$4"
        ); // -9.999.999,99
      }
    }
  }
}
