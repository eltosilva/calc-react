somar.simbolo = '+'
function somar(num1) {
  return (num2) => num1 + num2
}

subtrair.simbolo = '-'
function subtrair(num1) {
  return (num2) => num1 - num2
}

multiplicar.simbolo = 'x'
function multiplicar(num1) {
  return (num2) => num1 * num2
}

dividir.simbolo = '/'
function dividir(num1) {
  return (num2) => num1 / num2
}

export const FUNCOES = [dividir, multiplicar, subtrair, somar]