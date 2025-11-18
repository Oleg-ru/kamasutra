import {useToggle} from "./TogglePage.tsx";

export function VisibilityToggle() {

    const {isOn, toggle, setIsOn} = useToggle(false);

    const handleVieMessage = () => {
        setIsOn(true);
    };

    const handleHideMessage = () => {
        setIsOn(false);
    };

    return (
        <div>
            <h1>Security message 🔒</h1>
            <button onClick={handleVieMessage}>Показать</button>
            <button onClick={handleHideMessage}>Скрыть</button>
            <div>{isOn ? '🎉 Это секретное сообщение!' : ''}</div>
        </div>
    );
}