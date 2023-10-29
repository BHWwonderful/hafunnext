// CSS

// Components
import Header from "../../components/semantics/Header"
import MobileNav from "../../components/semantics/MobileNav"
import PageTitleBar from "../../components/ui/PageTitleBar"

// assets
const lifestyleImg = process.env.NEXT_PUBLIC_IMAGE_LIFESTYLEBIG_PATH

export default function LifeStylePage(){
  return(
    <div>
      <Header
        leftChildren={<PageTitleBar img={lifestyleImg} title="Lifestyle" />}
      />
      <MobileNav />
    </div>
  )
}