import {useText} from "./TextPage.tsx";

export function TitleEditor() {
    const {
        text,
        setText,
        clear,
        toUpperCase,
        toLowerCase
    } = useText("Заголовок статьи");

    const handleToUpperCase = () => {
        toUpperCase();
    };

    const handleToLowerCase = () => {
        toLowerCase();
    };

    const handleNewTitle = () => {
        setText("Новый заголовок");
    };

    const handleReset = () => {
        clear();
    };
    
    return (
        <div>
            <h2>{text}</h2>
            <button onClick={handleToUpperCase}>ВЕРХНИЙ РЕГИСТР</button>
            <button onClick={handleToLowerCase}>нижний регистр</button>
            <button onClick={handleNewTitle}>Изменить на 'Новый заголовок'</button>
            <button onClick={handleReset}>Очистить</button>
        </div>
    );
}