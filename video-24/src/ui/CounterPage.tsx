import {Counter, CounterWithoutAutoReset} from "./Counter.tsx";

export function CounterPage() {
    return (
        <>
            <Counter/>
            <CounterWithoutAutoReset/>
        </>
    );
}