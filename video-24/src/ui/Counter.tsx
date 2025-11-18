import {useEffect, useState} from "react";

// presentation layer / UI
export function Counter() {
    const {count, inc, dec, reset, changeStep}  = useCounter(0, 1, 3);

    return (
        <>
            <h3>⏰ Автосброс через 3 сек</h3>
            <h2>{count}</h2>
            <button onClick={inc}>Увеличить</button>
            <button onClick={dec}>Уменьшить</button>
            <button onClick={reset}>Сбросить</button>
            <button onClick={() => {changeStep(5)}}>Установить шаг 5</button>
        </>
    );
}

export function CounterWithoutAutoReset() {
    const {count, inc, dec, reset, changeStep}  = useCounter(5, 5, 0);

    return (
        <>
            <h3>😁 Без автосброса, но с шагом 5</h3>
            <h2>{count}</h2>
            <button onClick={inc}>Увеличить</button>
            <button onClick={dec}>Уменьшить</button>
            <button onClick={reset}>Сбросить</button>
            <button onClick={() => {changeStep(5)}}>Установить шаг 5</button>
        </>
    );
}

export function CounterForChildren() {
    const {count, inc}  = useCounter(3);

    return (
        <h2 onClick={inc}>{count}</h2>
    );
}

// bll/state management / custom hook
const useCounter = (startValue: number = 0, startStep: number = 1, autoResetTime: number = 0) => {
    //business rules/ business invariants
    const [count, setCount] = useState(startValue);
    const [step, setStep] = useState(startStep)

    useEffect(() => {
        if (autoResetTime <= 0) {
            return;
        }
        const intervalId =  setInterval(() => {setCount(0)}, autoResetTime * 1000);

        //Очистка перед повторным монтирование компонента, нужно, что бы, к примеру, закрывало соединение при повторном монтировании. Подробнее: https://react.dev/learn/synchronizing-with-effects#step-3-add-cleanup-if-needed
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const inc = () => {
        setCount(count + step);
    };

    const dec = () => {
        setCount(count - step);
    };

    const reset = () => {
        setCount(startValue);
    };

    const changeStep = (value: number) => {
        setStep(value);
        alert("Шаг изменен на 5")
    };

    // Если вернуть массивом return [ count, setCount ] as [number, (value: number) => void];
    return {
        count,
        inc,
        dec,
        reset,
        changeStep
    };
};

