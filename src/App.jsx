import { useState } from 'react';
import styles from './App.module.css';
import Teclado from './componentes/Teclado';
import Visor from './componentes/Visor';

function App() {
  const valor = useState(0)

  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <Visor valor={valor[0]}/>
        <Teclado fnEntrar={valor} />
      </main>
    </div>
  );
}

export default App;
