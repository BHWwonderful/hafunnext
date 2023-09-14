// hooks
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

interface InitialLangState {
  lang: string,
}

const initialState: InitialLangState = {
  lang: "en"
}

// PayloadAction에 제네릭을 사용하여 해당 payload의 타입을 선언한다.
const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changeCurrentLang: (state: InitialLangState, action: PayloadAction<string>) => {
      state.lang = action.payload
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload)
      return {
        ...state,
        ...action.payload.lang,
      }
    }
  }
})

export const { changeCurrentLang } = langSlice.actions

export const langReducer = langSlice.reducer





