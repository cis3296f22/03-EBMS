import styles from './ContextButtons.module.css'

export default function ContextButton ({text, onClick, callToAction}) {
  const className = `${styles.contextButton} ${callToAction ? styles.buy : ""}`

  return <div className={className} onClick={onClick}>
      <div className={styles.contextButtonText}>
        {text}
      </div>
    </div>
}