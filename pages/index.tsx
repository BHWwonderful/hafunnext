// Components
import Header from "../components/semantics/Header"
import Main from "../components/semantics/Main"
import Image from "next/image"
import GoToLevelTest from "../components/home/GoToLevelTest"
import EnglishLevelDescription from "../components/home/EnglishLevelDescription"
import LifeStyleCategoryDescription from "../components/home/LifeStyleCategoryDescription"
import MobileNav from "../components/semantics/MobileNav"
import DropdownFilter from "../components/ui/DropdownFilter"
import DesktopNav from "../components/semantics/DesktopNav"

// hooks
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { changeCurrentLang } from "../store/slices/langSlice"

export default function HomePage() {

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
      <Header
        leftChildren={
          <Image 
            src={process.env.NEXT_PUBLIC_IMAGE_HAFUN_LOGO_PATH}
            alt="logo"
            width={102}
            height={44}
           />
        }
        rightChildren={
          <DropdownFilter
            text={`Language: ${lang}`}
            dropdownItems={langItems}
          />
        }
      />
      <Main>
        <GoToLevelTest />
        <EnglishLevelDescription />
        <LifeStyleCategoryDescription />
      </Main>
      <MobileNav />
    </div>
  )
}