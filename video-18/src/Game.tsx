import {useState} from "react";
import {Counter} from "./Counter.tsx";
import {Elephant} from "./Elephant.tsx";

export function Game() {

    const [acticePage, setActicePage] = useState('counter')

    const hadleFinish = () => {setActicePage('elephant')}

    return (
        <div>
            {acticePage === 'counter'
                && <Counter onFinish={hadleFinish}/>}
            {acticePage === 'elephant'
                && <Elephant/>}

        </div>
    );
}

