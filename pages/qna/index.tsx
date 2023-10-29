// CSS

// Components
import Header from "../../components/semantics/Header"
import PageTitleBar from "../../components/ui/PageTitleBar"
import MobileNav from "../../components/semantics/MobileNav"

// assets
const qnaImg = process.env.NEXT_PUBLIC_IMAGE_QNABIG_PATH

export default function QnaPage(){
  return(
    <div>
      <Header
        leftChildren={<PageTitleBar img={qnaImg} title="Q&A" />}
      />
      <MobileNav />
    </div>
  )
}