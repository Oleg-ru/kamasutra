import './Dragon.css'
import {useState} from "react";
import {Congratulations} from "./Congratulations.tsx";
import {GameOver} from "./GameOver.tsx";

export function Dragon({setCount}) {
    const [weight, setWeight] = useState(100);
    console.log(weight)
    console.log(weight > 0 && weight < 100)

    return (
        <>
            {
                weight > 0 && weight <= 200 &&
                    <div>
                        <h1>Цель: Накормить дракона</h1>
                        <p>Какую едой покормишь дракона?</p>
                        <button onClick={() => setWeight(weight + 20)}>Полезная еда 🐄</button>
                        <button onClick={() => setWeight(weight - 20)}>Вредная еда 🍬</button>
                        <p style={{fontSize: `${weight}px`}}>🐲</p>
                    </div>

            }
            {weight > 200 && <Congratulations setCount={setCount}/>}
            {weight <= 0 && <GameOver setCount={setCount}/>}
        </>
    );
}