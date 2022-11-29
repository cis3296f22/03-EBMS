import Link from 'next/link'
import ContextButton from './ContextButton'
import styles from './ContextButtons.module.css'

export default function ContextButtons ({billboardId}) {
  let route = `/billboard/${billboardId}`

  function copyToClipboard() {
    navigator.clipboard.writeText("http://localhost:3000"+route)
    alert("Copied to clipboard!")
  }

  return (<div className={styles.contextButtonContainer}>
    <ContextButton text="Copy URL" onClick={copyToClipboard}/>
    <Link href={route}>
      <ContextButton text="Fullpage"/>
    </Link>
  </div>)
}