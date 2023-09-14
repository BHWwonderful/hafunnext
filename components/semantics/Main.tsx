// CSS
import styles from "./Main.module.scss"

// Types
import { ReactNode } from "react"

interface mainProps{
  children: ReactNode,
}

export default function Main({children}:mainProps) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}
