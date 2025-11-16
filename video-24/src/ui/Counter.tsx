import {useEffect, useState} from "react";

// presentation layer / UI
export function Counter() {
    const {count, inc}  = useCounter();

    return (
        <button onClick={inc}>{count}</button>
    );
}

export function CounterForChildren() {
    const {count, inc}  = useCounter(3);

    return (
        <button onClick={inc}>{count}</button>
    );
}

// bll/state management / custom hook
const useCounter = (startValue: number = 0) => {
    //business rules/ business invariants
    const [count, setCount] = useState(startValue);

    useEffect(() => {
        setInterval(() => {setCount(0)}, 3000)
    }, []);

    // Если вернуть массивом return [ count, setCount ] as [number, (value: number) => void];
    return {
        count,
        inc: () => {
            setCount(count + 1);
        }
    };
};

