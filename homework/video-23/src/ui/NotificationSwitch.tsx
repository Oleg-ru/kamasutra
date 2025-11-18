import {useToggle} from "./TogglePage.tsx";

export function NotificationSwitch() {

    const {isOn, toggle, setIsOn, reset} = useToggle(true);


    const handleSwitch = () => {
        toggle();
    };

    const handleOn = () => {
        setIsOn(true);
    };

    const handleReset = () => {
        reset();
    };


    return (
        <div>
            <h1>Настройки уведомлений</h1>
            <div>{isOn ? '🔔 Уведомления включены' : '🔕 Уведомления выключены'}</div>
            <button onClick={handleSwitch}>Переключить</button>
            <button onClick={handleOn}>Включить</button>
            <button onClick={handleReset}>Сбросить по умолчанию</button>
        </div>
    );
}