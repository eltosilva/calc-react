import styles from "./Teclado.module.css";
import { FUNCOES } from "./funcoes-matematicas";

const teclas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let teclaNumerica = false;

let fnAcumulador = fnZero();

export default function Teclado({ fnEntrar }) {
  const fnRender = render(fnEntrar);
  const [valor, setValor] = fnEntrar;

  return (
    <section className={styles.teclado}>
      {teclas.map((tecla) => (
        <button
          onClick={() => {
            const atualValor = teclaNumerica ? valor : 0;

            setValor(atualValor * 10 + tecla);
            teclaNumerica = true;
          }}
        >
          {tecla}
        </button>
      ))}
      {FUNCOES.map((fn, index) => (
        <button style={posicao(index, 3)} onClick={() => fnRender(fn)}>
          {fn.simbolo}
        </button>
      ))}

      <button
        style={posicao(3)}
        onClick={() => {
          fnAcumulador = fnZero();
          teclaNumerica = false;
          setValor(0);
        }}
      >
        C
      </button>
      <button onClick={() => fnRender(fnZero)}>=</button>
    </section>
  );
}

function posicao(linha, coluna = 0) {
  return { gridRowStart: linha + 1, gridColumnStart: coluna + 1};
}

function fnZero() {
  return (num) => num;
}

function render([valor, setValor]) {
  return (fn) => {
    const x = fnAcumulador(valor);
    fnAcumulador = fn(x);
    teclaNumerica = false;
    setValor(x);
  };
}
