// CSS
import styles from "./Button.module.scss"

// Type
import { ReactNode } from "react"

interface ButtonProps {
  type?: string,
  size?: string,
  children?: ReactNode,
  display?: string,
  onClick?: () => void,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
}

export default function Button ({ type, size, children, display, onClick, onMouseEnter, onMouseLeave }: ButtonProps) {

  const buttonClasses = `${styles.button} ${styles[type]} ${styles[size]} ${styles[display]}`

  return (
    <button onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} onClick={onClick} type="button" className={buttonClasses}>{children}</button>
  )
}
