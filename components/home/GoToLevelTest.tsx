// CSS
import styles from "./GoToLevelTest.module.scss"

// components
import Button from "../ui/Button"

// hooks
import { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"
import { useRouter } from "next/router"

// assets
const desktopImg = process.env.NEXT_PUBLIC_IMAGE_LEVELTEST_FUN_PATH
const mobileImg = process.env.NEXT_PUBLIC_IMAGE_LEVELTEST_BANNER_PATH

export default function GoToLevelTest() {

  const router = useRouter();

  const handleGoToLevelTestPage = () => {
    router.push("/leveltest")
  }

  const [desktop, setDesktop] = useState(false);

  const backgroundImg = {
    backgroundImage : `url(${mobileImg})`,
    backgroundRepeat : "no-repeat",
    backgroundSize: "cover",
  }

  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)"
  })

  useEffect(() => {
    setDesktop(isDesktop)
  }, [isDesktop])

  return (
    <section className={styles.wrap}>
      <div
        className={styles.goToLevelTest}
        style={desktop ? null : backgroundImg}>
        <div className={styles.container}>
          <div className={styles.titleBox}>
            <h2 className={styles.title}>
              <strong>Have fun</strong> learning<br /> Useful English for everyday life
            </h2>
          </div>
          <div className={styles.buttonBox}>
            <Button
              type="primary"
              size="large"
              onClick={handleGoToLevelTestPage}
            >
              Level Test
            </Button>
          </div>
        </div>
      </div>
      {desktop && 
        <img className={styles.desktopImg} src={desktopImg} alt={"fun"} />
      }
    </section>
  )
}
