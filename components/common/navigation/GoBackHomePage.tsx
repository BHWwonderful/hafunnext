// CSS
import styles from "./NavigationButton.module.scss"

// hooks
import { useRouter } from "next/router"

// assets
const cancelImg = process.env.NEXT_PUBLIC_IMAGE_CANCEL_PATH

export default function GoBackHomePage() {

  const router = useRouter();

  const handleGoBackToHomePage = () => {
    router.push("/");
  }

  return (
    <a className={styles.button} onClick={handleGoBackToHomePage}>
      <img src={cancelImg} alt="Go back to home" />
    </a>
  )
}
