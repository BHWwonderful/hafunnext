// CSS
import styles from "./LifeStyleCategoryDescription.module.scss";

// components
import Image from "next/image";

const lifeStyleCategoryData = [
  {
    id: "life_and_culture",
    title: "Life & Culture",
    img: process.env.NEXT_PUBLIC_IMAGE_LIFESTYLE_CATEGORY_LIFEANDCULTURE_PATH,
  },
  {
    id: "phrases",
    title: "Phrases",
    img: process.env.NEXT_PUBLIC_IMAGE_LIFESTYLE_CATEGORY_PHRASES_PATH,
  },
  {
    id: "accents",
    title: "Accents",
    img: process.env.NEXT_PUBLIC_IMAGE_LIFESTYLE_CATEGORY_ACCENTS_PATH,
  },
  {
    id: "where_to_get_help",
    title: "Where to get help",
    img: process.env.NEXT_PUBLIC_IMAGE_LIFESTYLE_CATEGORY_WHERETOGETHELP_PATH,
  },
]

export default function LifeStyleCategoryDescription() {
  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>
            <strong>Life </strong>
            in Britain
          </h2>
        </div>
        <div className={styles.categoryBox}>
          {lifeStyleCategoryData.map((categoryData) => {
            return(
              <div className={styles.categoryCard} key={categoryData.id}>
                <Image src={categoryData.img} alt={categoryData.id} width={240} height={240} />
                <h3 className={styles.categoryCardTitle}>{categoryData.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
