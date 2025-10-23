import { useState } from 'react'
import './Game.css'
import {Counter} from "./Counter.tsx";
import {Dragon} from "./Dragon.tsx";

function Game() {
  const [count, setCount] = useState(1)

  return (
    <>

      {count <=4 && <p>Текущее число: {count}</p> && <Counter count={count} setCount={setCount}/>}
      {count === 5 && <Dragon setCount={setCount}/>}
    </>
  )
}

export default Game
