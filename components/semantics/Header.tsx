// CSS
import styles from "./Header.module.scss"

// Type
import { ReactNode } from "react"

interface HeaderProps{
  leftChildren?: ReactNode,
  centerChildren?: ReactNode,
  rightChildren?: ReactNode,
}

export default function Header({leftChildren, centerChildren, rightChildren}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div>
        {leftChildren}
      </div>
      <div className={styles.centerChild}>
        {centerChildren}
      </div>
      <div className={styles.rightChild}>
        {rightChildren}
      </div>
    </header>
  )
}
