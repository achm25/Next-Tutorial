import Image from 'next/image'
import styles from './page.module.css'
import variables from './variables.module.scss'
import Header from "@/components/header/index";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  )
}
