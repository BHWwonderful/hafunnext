// CSS
import styles from "./DropdownFilter.module.scss";

// components
import Button from "./Button";

// hooks
import { useState, useRef, useEffect } from "react";

interface DropdownFilterProp{
  text?: string,
  dropdownItems?: DropdownItemData[],
}

interface DropdownItemData {
  id: string,
  text: string,
  onClick?: () => void
}

const defaultDropdownItems = [
  {
    id: "default",
    text: "default",
    onClick: () => {window.alert("default")},
  },
  {
    id: "test",
    text: "default",
    onClick: () => {window.alert("default")},
  },
  {
    id: "test2",
    text: "default",
    onClick: () => {window.alert("default")},
  },
]

export default function DropdownFilter({text = "default", dropdownItems = defaultDropdownItems}: DropdownFilterProp) {

  const [isClicked, setIsClicked] = useState(false);
  const detectRef = useRef(null);

  useEffect(() => {
    function handleDetectOutsideClick(event) {
      if (detectRef.current && !detectRef.current.contains(event.target)){
        setIsClicked(false);
      }
    }

    document.addEventListener('mousedown', handleDetectOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleDetectOutsideClick)
    }
  }, [])

  const handleChangeIsClicked = () => {
    isClicked ? setIsClicked(false) : setIsClicked(true);
  }

  return (
    <div ref={detectRef} className={styles.dropdownFilter}>
      <Button onClick={handleChangeIsClicked} type={isClicked ? "primary" : "default"}>{text}</Button>
      {isClicked && 
        <ul className={styles.list}>
          {dropdownItems.map((item) => {
            return(
              <li className={styles.listItem} key={item.id}>
                <a onClick={item.onClick} className={styles.link}>{item.text}</a>
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}
