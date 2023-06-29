import styles from './Visor.module.css'

export default function Visor({valor}) {
  return (
    <section className={styles.container}>
      <input type="text" name="" id="" value={valor} disabled />
    </section>
  )
}
