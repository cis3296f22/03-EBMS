import Link from 'next/link'
import { useRouter } from 'next/router'
import ContextButton from './ContextButton'
import styles from './ContextButtons.module.css'

export default function ContextButtons ({billboardId}) {
  const router = useRouter()

  let route = `/billboard/${billboardId}`

  function copyToClipboard() {
    navigator.clipboard.writeText("http://localhost:3000"+route)
    alert("Copied to clipboard!")
  }

  return (<div className={styles.contextButtonContainer}>
    {/* <ContextButton text={mapOpen ? "Close Map" : "View Map"} onClick={() => setMapOpen((map) => !map)}/> */}
    <Link href="/">
      <ContextButton text="Buy Space" callToAction={"buy"}/>
    </Link>
    <ContextButton text="Copy URL" onClick={copyToClipboard}/>
    {
      router.pathname != '/' ? "" :
      <Link href={route}>
        <ContextButton text="Fullpage"/>
      </Link>
    }
  </div>)
}