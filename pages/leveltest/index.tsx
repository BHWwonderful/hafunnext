// CSS
import styles from "./LevelTestPage.module.scss";

// components
import Header from "../../components/semantics/Header"
import ShowCurrentQuestion from "../../components/common/ShowCurrentQuestion"
import GoBackHomePage from "../../components/common/navigation/GoBackHomePage";
import Progressbar from "../../components/common/test/Progressbar";

// hooks
import { useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";

// actions
import { resetTestData } from "../../store/slices/testSlice";

export default function LevelTestPage() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(resetTestData())
  }, [])

  return (
    <div className={styles.wrap}>
      <Header
        leftChildren={<GoBackHomePage />}
        centerChildren={<Progressbar />}
      />
      <main className={styles.main}>
        <ShowCurrentQuestion />
      </main>
    </div>
  )
}
