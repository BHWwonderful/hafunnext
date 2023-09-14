// CSS
import styles from "./Footer.module.scss"

// Types
import { ReactNode } from "react"

interface FooterProps{
  children: ReactNode,
}

export default function Footer({children}:FooterProps) {
  return (
    <footer className={styles.footer}>
      {children}
    </footer>
  )
}
