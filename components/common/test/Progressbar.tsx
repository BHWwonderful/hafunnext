// CSS
import styles from "./Progressbar.module.scss"

// hooks
import { useAppSelector } from "../../../store/hooks"

export default function Progressbar() {

  const totalTestData = useAppSelector((state) => state.test.totalTestData)
  const currentIndex = useAppSelector((state) => state.test.currentTestIndex)

  const progressPercentage = (currentIndex + 1) / totalTestData.length * 100;

  return (
    <div className={styles.progressbar}>
      <div className={styles.progress} style={{width:`${progressPercentage}%`}}></div>
    </div>
  )
}
