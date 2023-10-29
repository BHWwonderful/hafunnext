// hooks
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

export interface TestData {
  id: string,
  answer: string,
  choices: string[],
  question: string,
  type: string,
  img?: string,
}

interface InitialTestState {
  totalTestData: TestData[],
  currentChoice: string,
  currentTestIndex: number,
  clickedChoiceIndex: number | null,
  isCorrect: boolean | null,
}

const initialState: InitialTestState  = {
  totalTestData: [
    {
      id: "1",
      answer: "from",
      choices: ["not", "to", "become", "from"],
      question: "Hopefully being a woman won't prevent me ____ having a successful career",
      type: "fill"
    },
    {
      id: "2",
      answer: "between",
      choices: ["in", "between", "beside", "under"],
      question: "The dog is _______ the bowls",
      type: "fill"
    },
    {
      id: "3",
      answer: "frog",
      choices: ["cat", "fish", "dog", "frog"],
      question: "This is a ____",
      type: "fill"
    },
  ],
  currentChoice: "",
  currentTestIndex: 0,
  clickedChoiceIndex: null,
  isCorrect: null,
}

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    resetTestData(state: InitialTestState){
      state.totalTestData = [
        {
          id: "1",
          answer: "from",
          choices: ["not", "to", "become", "from"],
          question: "Hopefully being a woman won't prevent me ____ having a successful career",
          type: "fill"
        },
        {
          id: "2",
          answer: "between",
          choices: ["in", "between", "beside", "under"],
          question: "The dog is _______ the bowls",
          type: "fill"
        },
        {
          id: "3",
          answer: "frog",
          choices: ["cat", "fish", "dog", "frog"],
          question: "This is a ____",
          type: "fill"
        },
      ]
      state.currentChoice = ""
      state.currentTestIndex = 0
      state.clickedChoiceIndex = null,
      state.isCorrect = null
    },
    changeClickedChoiceIndex(state: InitialTestState, action: PayloadAction<number>){
      state.clickedChoiceIndex = action.payload
    },
    changeCurrentChoice(state: InitialTestState, action: PayloadAction<string>){
      state.currentChoice = action.payload
    },
    changeIsCorrect(state: InitialTestState){
      state.currentChoice === state.totalTestData[state.currentTestIndex].answer ?
        state.isCorrect = true 
      :
        state.isCorrect = false
    },
    goToNextQuestion(state: InitialTestState){
      state.currentTestIndex++
      state.currentChoice = ""
      state.isCorrect = null
      state.clickedChoiceIndex = null
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload)
      return {
        ...state,
        ...action.payload.test,
      }
    }
  }
})

export const { resetTestData, changeClickedChoiceIndex, changeCurrentChoice, changeIsCorrect, goToNextQuestion } = testSlice.actions

export const testReducer = testSlice.reducer