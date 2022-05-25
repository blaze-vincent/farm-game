import { useEffect, useState, useRef } from "react";

export default function Controller(){
  
  const keysRef = useRef([])
  const [keys, setKeys] = useState(keysRef.current)

  //key events
  useEffect(_ => {
    const keyDown = e => {
      setKeys(new Set(Array.from(keysRef.current).concat([e.key])))
    }
    document.addEventListener('keydown', keyDown)

    const keyUp =  e => {
      setKeys(new Set(Array.from(keysRef.current).filter(i => i != e.key)))
    }
    document.addEventListener('keyup', keyUp)

    return _ => {
      document.removeEventListener('keydown', keyDown);
      document.removeEventListener('keyup', keyUp);
    }
  }, [])

  //persist keys across renders
  useEffect(_ => {
    keysRef.current = keys
  }, [keys])

  return <div>{keys}</div>
}