import {useText} from "./TextPage.tsx";

export function GreetingCard() {

    const {
        text,
        setText,
        clear,
        toUpperCase,
        toLowerCase
    } = useText("Привет! 😉");

    const handleLoudly = () => {
        toUpperCase();
    };
    const handleQuietly = () => {
        toLowerCase();
    };
    const handleSayWelcome = () => {
        setText("Добро пожаловать!");
    };
    const handleKeepSilent = () => {
        clear();
        setText("🤐");
    };

    return (
        <div>
            <div>💬 {text}</div>
            <button onClick={handleLoudly}>ГРОМКО</button>
            <button onClick={handleQuietly}>тихо</button>
            <button onClick={handleSayWelcome}>Сказать 'Добро пожаловать!'</button>
            <button onClick={handleKeepSilent}>Молчать</button>
        </div>
    );
}