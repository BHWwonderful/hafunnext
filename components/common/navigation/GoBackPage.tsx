// CSS
import styles from "./NavigationButton.module.scss"

// hooks
import { useRouter } from "next/router"

// assets
const backImg = process.env.NEXT_PUBLIC_IMAGE_BACK_PATH

export default function GoBackPage() {

  const router = useRouter()

  const handleGoBackPage = () => {
    router.back();
  }

  return (
    <a className={styles.button} onClick={handleGoBackPage}>
      <img src={backImg} alt="Go to back page" />
    </a>
  )
}
