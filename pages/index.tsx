// Components
import Header from "../components/semantics/Header"
import Image from "next/image"
import GoToLevelTest from "../components/home/GoToLevelTest"
import EnglishLevelDescription from "../components/home/EnglishLevelDescription"
import LifeStyleCategoryDescription from "../components/home/LifeStyleCategoryDescription"
import MobileNav from "../components/semantics/MobileNav"
import DesktopNav from "../components/semantics/DesktopNav"
import LanguageSelector from "../components/common/LanguageSelector"

// assets
const hafunLogo = process.env.NEXT_PUBLIC_IMAGE_HAFUN_LOGO_PATH

export default function HomePage() {

  return (
    <div>
      <Header
        leftChildren={
          <Image 
            src={hafunLogo}
            alt="logo"
            width={102}
            height={44}
           />
        }
        rightChildren={
          <>
            <DesktopNav />
            <LanguageSelector />
          </>
        }
      />
      <main>
        <GoToLevelTest />
        <EnglishLevelDescription />
        <LifeStyleCategoryDescription />
      </main>
      <MobileNav />
    </div>
  )
}