// CSS
import styles from "./PageTitleBar.module.scss";

interface PageTitleBarProps {
  img: string,
  title: string,
}

export default function PageTitleBar({img, title}: PageTitleBarProps) {
  return (
    <div className={styles.content}>
      <img src={img} alt={title} />
      <h2 className={styles.title}>{title}</h2>
    </div>
  )
}
