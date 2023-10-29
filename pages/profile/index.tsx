// CSS

// Components
import Header from "../../components/semantics/Header"
import PageTitleBar from "../../components/ui/PageTitleBar"
import MobileNav from "../../components/semantics/MobileNav"

// assets
const profileImg = process.env.NEXT_PUBLIC_IMAGE_PROFILEBIG_PATH

export default function ProfilePage(){
  return(
    <div>
      <Header
        leftChildren={<PageTitleBar img={profileImg} title="Profile" />}
      />
      <MobileNav />
    </div>
  )
}