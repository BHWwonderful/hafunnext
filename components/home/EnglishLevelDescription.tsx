// CSS
import styles from "./EnglishLevelDescription.module.scss"

// Components
import Image from "next/image"

const EnglishLevelData = [
  {
    id: "beginner",
    title : "Beginner",
    text: "Learning basics",
    img: process.env.NEXT_PUBLIC_IMAGE_LEVEL_CATEGORY_BEGINNER_PATH,
  },
  {
    id: "intermediate",
    title : "Intermediate",
    text: "Simple English for every day",
    img: process.env.NEXT_PUBLIC_IMAGE_LEVEL_CATEGORY_INTERMEDIATE_PATH,
  },
  {
    id: "fluent",
    title : "Fluent",
    text: "Becoming fluent",
    img: process.env.NEXT_PUBLIC_IMAGE_LEVEL_CATEGORY_FLUENT_PATH,
  },
  {
    id: "advanced",
    title : "Advanced",
    text: "Speaking like a native",
    img: process.env.NEXT_PUBLIC_IMAGE_LEVEL_CATEGORY_ADVANCED_PATH,
  },
]

export default function EnglishLevelDescription() {

  const mobileImageHeight = 105;
  const mobileImageWidth = 96;

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
          <div className={styles.categoryContainer}>
            {EnglishLevelData.map((levelData) => {
              return (
                <div
                  key={levelData.id}
                  className={styles.levelCard}
                  style={{ height: `${mobileImageHeight + "px"}`}}
                >
                <Image 
                  src={levelData.img}
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
        </div>
      </div>
    </section>
  )
}
