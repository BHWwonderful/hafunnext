// Components
import MobileNav from "../../components/semantics/MobileNav"
import Header from "../../components/semantics/Header"
import Main from "../../components/semantics/Main"
import PageTitleBar from "../../components/ui/PageTitleBar"
import DropdownFilter from "../../components/ui/DropdownFilter"
import LessonCard from "../../components/lesson/LessonCard"

// assets
const lessonImg = process.env.NEXT_PUBLIC_IMAGE_LESSONBIG_PATH

// types
import { DropdownItemData } from "../../components/ui/DropdownFilter"

// CSS
import styles from "./LessonPage.module.scss"

const lessonFilterData: DropdownItemData[] = [
  {
    id: "all",
    text: "all"
  },
  {
    id: "beginner",
    text: "beginner"
  },
  {
    id: "intermediate",
    text: "intermediate"
  },
  {
    id: "fluent",
    text: "fluent"
  },
  {
    id: "advanced",
    text: "advanced"
  },
]

export default function LessonPage(){
  return(
    <div>
      <Header
        leftChildren={<PageTitleBar img={lessonImg} title="lesson" />}
      />
      <Main>
        <div className={styles.dropdownFilter}>
          <DropdownFilter
            text="Choose Your Level"
            dropdownItems={lessonFilterData}
          />
        </div>
        <div>
          <div className={styles.lessonCard}>
            <LessonCard title={"text"} text={"test"} progress={66} />
          </div>
          <div className={styles.lessonCard}>
            <LessonCard title={"text"} text={"test"} progress={66} />
          </div>
          <div className={styles.lessonCard}>
            <LessonCard title={"text"} text={"test"} progress={66} />
          </div>
        </div>
      </Main>
      <MobileNav />
    </div>
  )
}