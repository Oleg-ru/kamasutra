import {useState} from "react";

export function Counter(props) {
    const [value, setValue] = useState(1);

    const handleClick = () => {
        setValue(value + 1);
        if (value + 1 === 5 && props.onFinish) {
            props.onFinish();
        }
    }

    return (
        <div>
            <button onClick={handleClick}>+ {value}</button>
        </div>
    );
}