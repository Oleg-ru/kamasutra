import { useState } from "react"
import {VisibilityToggle} from "./VisibilityToggle.tsx";
import {NotificationSwitch} from "./NotificationSwitch.tsx";

//Custom hooks:
export function useToggle(initialValue: boolean) {
    const [isOn, setIsOn] = useState(initialValue)

    const toggle = () => {
        setIsOn(!isOn)
    }

    const reset = () => {
        setIsOn(initialValue);
    };

    return {isOn, toggle, setIsOn, reset};
}

export const LightSwitch = () => {

    const {isOn, toggle} = useToggle(false);

    return (
        <div>
            <h1>Выключатель света</h1>
            <h2>{isOn ? "💡 Свет включен" : "🌙 Свет выключен"}</h2>
            <button onClick={toggle}>Переключить свет</button>
        </div>
    )
}

export const TogglePage = () => {
    return (
        <div>
            <LightSwitch />
            <VisibilityToggle />
            <NotificationSwitch />
        </div>
    )
}