// CSS
import styles from "./MobileNav.module.scss"

// components
import Image from "next/image";

// hooks
import { useRouter } from "next/router"

export const navData = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "lesson",
    title: "Lesson",
    path: "/lesson",
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    path: "/lifestyle",
  },
  {
    id: "qna",
    title: "Q&A",
    path: "/qna",
  },
  {
    id: "profile",
    title: "Profile",
    path: "/profile",
  },
]

export default function MobileNav() {

  const router = useRouter();

  const handleChangeRoute = (event: any, path: string) => {
    router.push(`${path}`)
  }

  const getImgSrc = (path: string, id: string): string => {

    if(router.pathname === "/" && id === "home"){
      return "/images/homeActive.svg"
    }

    if(router.pathname.includes(path) && id !== "home"){
      return `/images/${id}Active.svg`
    }

    return `/images/${id}.svg`
  }

  const getTitleClassName = (path: string, id: string) => {
    if(router.pathname === "/" && id === "home"){
      return styles.titleActive;
    }

    if(router.pathname.includes(path) && id !== "home"){
      return styles.titleActive;
    }

    return styles.title;
  }

  return (
    <div className={styles.wrap}>
      <nav className={styles.nav}>
        {navData.map((data) => {
          return (
            <div className={styles.btnBox} key={data.id}>
              <a className={styles.btn} onClick={(event) => handleChangeRoute(event, data.path)}>
                <Image src={getImgSrc(data.path, data.id)} alt={data.id} width={24} height={24} />
                <h2 className={getTitleClassName(data.path, data.id)}>{data.title}</h2>
              </a>
            </div>
          )
        })}
      </nav>
    </div>
  )
}
