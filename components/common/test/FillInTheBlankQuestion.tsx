// CSS
import styles from "./FillInTheBlankQuestion.module.scss"

// types
import { TestData } from "../../../store/slices/testSlice";

// components
import Button from "../../ui/Button";

// actions
import { changeClickedChoiceIndex, changeCurrentChoice, changeIsCorrect, goToNextQuestion } from "../../../store/slices/testSlice";

// hooks
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useRouter } from "next/router";

interface FillInTheBlankQuestionProp {
  currentQuestionData: TestData,
}

export default function FillInTheBlankQuestion({currentQuestionData}: FillInTheBlankQuestionProp) {

  const clickedChoiceIndex = useAppSelector((state) => state.test.clickedChoiceIndex)
  const totalTestData = useAppSelector((state) => state.test.totalTestData)
  const currentTestIndex = useAppSelector((state) => state.test.currentTestIndex)
  const isCorrect = useAppSelector((state) => state.test.isCorrect)
  const dispatch = useAppDispatch();

  const router = useRouter()

  const isClicked = (index: number) => {
    if(clickedChoiceIndex === index){
      return "primary"
    }
  }

  const isAnyChoiceClicked = () => {
    if(isCorrect === false){
      return "negative"
    }

    if(typeof clickedChoiceIndex === "number"){
      return "positive"
    }

    return null
  }

  const handleChangeChoiceAndIndex = (whatUserChoose: string, index: number) => {
    dispatch(changeCurrentChoice(whatUserChoose))
    dispatch(changeClickedChoiceIndex(index))
  }

  const handleIsCorrect = (): void => {
    dispatch(changeIsCorrect());
  }

  const handleGoToNextQuestion = (): void => {
    if(currentTestIndex === totalTestData.length-1){
      router.push("/")
      return ;
    }

    dispatch(goToNextQuestion())
  }

  return (
    <section className={styles.wrap}>
      <div className={styles.titleBox}>
        <h2><strong>Fill in</strong> the blank</h2>
      </div>
      <div className={styles.questionBox}>
        <p>{currentQuestionData.question}</p>
      </div>
      <div className={styles.choiceBox}>
        {currentQuestionData.choices.map((data, index) => {
          return(
            <Button 
              key={index}
              type={isClicked(index)}
              onClick={() => {
                handleChangeChoiceAndIndex(data, index)
              }}
            >
              {data}
            </Button>
          )
        })}
      </div>
      <div className={styles.submitBox}>
        <div className={styles.submitButtonBox}>
          <Button onClick={isCorrect === null ? handleIsCorrect : handleGoToNextQuestion} display={"block"} type={isAnyChoiceClicked()}>Submit</Button>
        </div>
        {
          isCorrect !== null ?
            isCorrect ? 
              <div className={styles.correct}>
                <h2>Well done!</h2>
              </div>
            :
              <div className={styles.wrong}>
                <h2>Sorry!</h2>
              </div>
          : null
        }
      </div>
    </section>
  )
}
