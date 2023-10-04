// CSS
import styles from "./EnglishLevelDescription.module.scss"

// Components
import Image from "next/image"

// hooks
import { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"

const EnglishLevelData = [
  {
    id: "beginner",
    title : "Beginner",
    text: "Learning basics",
    mobileImg: process.env.NEXT_PUBLIC_IMAGE_LEVEL_CATEGORY_BEGINNER_PATH,
    tabletImg: process.env.NEXT_PUBLIC_IMAGE_TABLET_BEGINNER_PATH,
  },
  {
    id: "intermediate",
    title : "Intermediate",
    text: "Simple English for every day",
    mobileImg: process.env.NEXT_PUBLIC_IMAGE_LEVEL_CATEGORY_INTERMEDIATE_PATH,
    tabletImg: process.env.NEXT_PUBLIC_IMAGE_TABLET_INTERMEDIATE_PATH
  },
  {
    id: "fluent",
    title : "Fluent",
    text: "Becoming fluent",
    mobileImg: process.env.NEXT_PUBLIC_IMAGE_LEVEL_CATEGORY_FLUENT_PATH,
    tabletImg: process.env.NEXT_PUBLIC_IMAGE_TABLET_FLUENT_PATH
  },
  {
    id: "advanced",
    title : "Advanced",
    text: "Speaking like a native",
    mobileImg: process.env.NEXT_PUBLIC_IMAGE_LEVEL_CATEGORY_ADVANCED_PATH,
    tabletImg: process.env.NEXT_PUBLIC_IMAGE_TABLET_ADVANCED_PATH
  },
]

const mobileImageHeight = 105;
const mobileImageWidth = 96;
const tabletImageHeight = 125;
const tabletImageWidth = 180;

export default function EnglishLevelDescription() {

  const isTablet = useMediaQuery({
    query: "(max-width : 768px)"
  })

  const [tablet, setTablet] = useState(false);

  useEffect(() => {
    setTablet(isTablet)
  }, [isTablet])

  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>
            Learn
            <strong> step by step</strong>
          </h2>
        </div>
        <div className={styles.categoryWrap}>
          {tablet ?
            <div className={styles.categoryContainer}>
              {EnglishLevelData.map((levelData) => {
                return (
                  <div
                    key={levelData.id}
                    className={styles.levelCard}
                    style={{ height: `${mobileImageHeight + "px"}`}}
                  >
                    <Image 
                      src={levelData.mobileImg}
                      alt={levelData.id} width={mobileImageWidth}
                      height={mobileImageHeight}
                      unoptimized
                    />
                    <div className={styles.levelCardTitleBox}>
                      <h3>{levelData.title}</h3>
                      <span>{levelData.text}</span>
                    </div>
                  </div> 
                )
              })}
            </div>
          :
            <div className={styles.categoryContainer}>
              {EnglishLevelData.map((levelData) => {
                return (
                  <div
                    key={levelData.id}
                    className={styles.levelCard}
                    style={{ height: `${tabletImageHeight + "px"}`}}
                  >
                    <Image 
                      src={levelData.tabletImg}
                      alt={levelData.id} width={tabletImageWidth}
                      height={tabletImageHeight}
                      unoptimized
                    />
                    <div className={styles.levelCardTitleBox}>
                      <h3>{levelData.title}</h3>
                      <span>{levelData.text}</span>
                    </div>
                  </div> 
                )
              })}
            </div>
          }
        </div>
      </div>
    </section>
  )
}
