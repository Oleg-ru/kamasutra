import {useState} from "react";

export function TrackItem(props) {
    console.log('🏴‍☠️TrackItem: ' + props.item.id)
    const [count, setCount] = useState(0);

    return (
        <li>
            {props.item.id} - <b>{props.item.title}</b> - <button onClick={() => {setCount(count + 1)}}>likes ❤: </button> {count}
        </li>
    );
}