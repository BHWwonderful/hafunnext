// CSS
import styles from "./GuessTheImageQuestion.module.scss"

// types
import { TestData } from "../../../store/slices/testSlice"

interface GuessTheImageQuestionProp {
  currentQuestionData: TestData,
}

export default function GuessTheImageQuestion({currentQuestionData}: GuessTheImageQuestionProp) {

  console.log(currentQuestionData)

  return (
    <section className={styles.wrap}>
      <div>
        <h2>Guess the image</h2>
      </div>
    </section>
  )
}
