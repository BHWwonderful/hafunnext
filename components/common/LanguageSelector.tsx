// hooks
import { useAppDispatch, useAppSelector } from "../../store/hooks"

// actions
import { changeCurrentLang } from "../../store/slices/langSlice"

// components
import DropdownFilter from "../ui/DropdownFilter"

export default function LanguageSelector() {

  const lang = useAppSelector((state) => state.lang.lang)
  const dispatch = useAppDispatch()

  const langItems = [
    {
      id: 'en',
      text: 'English',
      onClick: () => {
        dispatch(changeCurrentLang('en'))
      },
    },
    {
      id: 'kr',
      text: 'Korean',
      onClick: () => {dispatch(changeCurrentLang('kr'))},
    },
    {
      id: 'cn',
      text: 'Chinese',
      onClick: () => {dispatch(changeCurrentLang('cn'))},
    },
  ]

  return (
    <div>
      <DropdownFilter
        text={`Language: ${lang}`}
        dropdownItems={langItems}
      />
    </div>
  )
}
