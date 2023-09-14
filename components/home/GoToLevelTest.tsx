// CSS
import styles from "./GoToLevelTest.module.scss"

// components
import Button from "../ui/Button"

export default function GoToLevelTest() {

  console.log(process.env.IMAGE_LEVELTEST_BANNER_PATH)

  return (
    <section 
      className={styles.wrap}
      style={{ 
        backgroundImage : `url(${process.env.NEXT_PUBLIC_IMAGE_LEVELTEST_BANNER_PATH})`,
        backgroundRepeat : "no-repeat",
        backgroundSize: "cover",
      }}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>
            <strong>Have fun</strong> learning useful English for everyday life
          </h2>
        </div>
        <div className={styles.buttonBox}>
          <Button type="primary" display="block" size="large">Level Test</Button>
        </div>
      </div>
    </section>
  )
}
