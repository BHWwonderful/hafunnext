// CSS
import styles from "./DesktopNav.module.scss"

// hooks
import usePageNavigation from "../../hooks/usePageNavigation"

// assets
import { navData } from "./MobileNav"

export default function DesktopNav() {

  const pagination = usePageNavigation()

  return (
    <nav className={styles.desktopNav}>
      {navData.map((data) => {
        return(
          <a key={data.id} onClick={(event) => pagination(event, data.path)}>
            {data.title}
          </a>
        )
      })}
    </nav>
  )
}
