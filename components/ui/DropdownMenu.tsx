// CSS
import styles from "./DropdownMenu.module.scss";

// hooks
import { useState } from "react";

// components
import Button from "./Button";

interface DropdownItemData {
  id: string,
  text: string,
  onClick?: () => void
}

interface DropdownItemProps {
  title: string,
  dropdownItems: DropdownItemData[],
}

const defaultDropdownItems = [{
  id: "default",
  text: "default",
  onClick: () => {window.alert("default")},
}]

export default function DropdownMenu({ title = "Enter Menu title", dropdownItems = defaultDropdownItems }: DropdownItemProps) {

  const [isClicked, setIsClicked] = useState(false);

  const handleChangeIsClicked = () => {
    setTimeout(() => {
      setIsClicked(true)
    }, 300)
  }

  const handleResetIsClicked = () => {
    setTimeout(() => {
      setIsClicked(false)
    }, 500)
  }

  return (
    <div
      className={styles.dropdownMenu} 
      onMouseLeave={handleResetIsClicked}
      onMouseEnter={handleChangeIsClicked}
    >
      <Button>{title}</Button>
      {isClicked &&
        <ul className={styles.dropdownBox}>
          {dropdownItems.map((item) => {
            return(
              <li key={item.id}>
                <a className={styles.dropdownLink} onClick={item.onClick}>{item.text}</a>
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}
