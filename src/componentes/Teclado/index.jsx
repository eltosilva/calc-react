import styles from "./Teclado.module.css";

const teclas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let teclaNumerica = false;
let acumulador = 0;
let ultimoSinal = null;

export default function Teclado({ fnEntrar }) {
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
      {["/", "*", "-", "+"].map((tecla, index) => (
        <button
          style={posicao(index + 1, 4)}
          onClick={() => {
            igual(valor);
            ultimoSinal = tecla;
            setValor(acumulador);
          }}
        >
          {tecla}
        </button>
      ))}

      <button
        style={posicao(4, 1)}
        onClick={() => {
          acumulador = 0;
          ultimoSinal = null;
          setValor(0);
        }}
      >
        C
      </button>
      <button
        onClick={() => {
          igual(valor);
          
          setValor(acumulador);
        }}
      >
        =
      </button>
    </section>
  );
}

function posicao(linha, coluna) {
  return { gridRowStart: linha, gridColumnStart: coluna };
}

function igual(num) {
  if (ultimoSinal) {
    eval(`acumulador = ${acumulador} ${ultimoSinal} ${num}`);
  } else acumulador = num;

  ultimoSinal = null;
  teclaNumerica = false;
}
