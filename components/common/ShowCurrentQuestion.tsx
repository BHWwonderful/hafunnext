// components
import FillInTheBlankQuestion from "./test/FillInTheBlankQuestion"
import GuessTheImageQuestion from "./test/GuessTheImageQuestion"

// hooks
import { useAppSelector } from "../../store/hooks"

export default function ShowCurrentQuestion() {

  const totalTestData = useAppSelector((state) => state.test.totalTestData);
  const currentTestIndex = useAppSelector((state) => state.test.currentTestIndex)

  const currentTestData = totalTestData[currentTestIndex]

  if(currentTestData.type === "fill"){
    return(
      <FillInTheBlankQuestion
        currentQuestionData={currentTestData}
      />
    )
  }

  if(currentTestData.type === "guess"){
    return(
      <GuessTheImageQuestion
        currentQuestionData={currentTestData}
      />
    )
  }

  return (
    <div>
      No data :(
    </div>
  )
}
