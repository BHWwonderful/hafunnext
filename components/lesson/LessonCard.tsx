// CSS
import styles from "./LessonCard.module.scss"
import 'react-circular-progressbar/dist/styles.css';

// Components
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"


interface LessonCardProps{
  title: string,
  text: string,
  progress: number,
}

export default function LessonCard({title, text, progress}: LessonCardProps) {
  return (
    <div className={styles.lessonCard}>
      <div>
        <h2>{title}</h2>
        <span>{text}</span>
      </div>
      <div className={styles.progressBar}>
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={buildStyles({
            pathColor: `rgba(87, 212, 27, 1)`
          })}
        />
      </div>
    </div>
  )
}
