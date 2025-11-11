import {useEffect, useState} from 'react'
import './App.css'

function App() {


  return (
    <>
        <Counter />
        <Age />
    </>
  )
}

function useCounter(initValue: number, ms: number) {
    const [value, setValue] = useState(initValue);
    useEffect(() => {
        setInterval(() => {
            setValue(initValue)
        }, ms)
    }, []);
    return {value, setValue};
}

function Counter() {
    const {value, setValue} = useCounter(3, 2000)

    return (
        <div onClick={() => {
            setValue(value + 1)
        }}>
            {value}
        </div>
    );
}

function Age() {
    const {value, setValue} = useCounter(69, 10000)

    return (
        <div >
            age: {value}
            <button onClick={() => {
                setValue(value + 1)
            }}>+1</button>
        </div>
    );
}

export default App
