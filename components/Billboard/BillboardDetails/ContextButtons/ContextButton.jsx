import styles from './ContextButtons.module.css'

export default function ContextButton ({text, onClick}) {
  return <div className={styles.contextButton} onClick={onClick}>
      <div className={styles.contextButtonText}>
        {text}
      </div>
    </div>
}