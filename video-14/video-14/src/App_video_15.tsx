import {useEffect, useState} from 'react'
import './App.css'

function App_video_15() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0)
    const effectArr = [count]

    if (count === 2) {
        effectArr.push(count)
    }
    if (count === 3) {
        effectArr.pop()
    }

    if (count === 6) {
        effectArr.pop();
        effectArr.push(count2)
    }
    console.log(effectArr)

    useEffect(() => {
        console.log('Effect is been 😘' + count);
        document.title = count;
    }, effectArr)

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Счетчик {count}</button>
            <button onClick={() => setCount2(count2 + 1)}>Счетчик {count2}</button>
        </>
    )
}

export default App_video_15
