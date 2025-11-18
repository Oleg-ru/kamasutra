import {useState} from "react";
import {TitleEditor} from "./TitleEditor.tsx";
import {GreetingCard} from "./GreetingCard.tsx";

export function useText(initialText: string = "") {
    const [text, setText] = useState(initialText);

    function clear() {
        setText("")
    }

    function toUpperCase() {
        setText(text.toUpperCase())
    }

    function toLowerCase() {
        setText(text.toLowerCase())
    }

    return {
        text,
        setText,
        clear,
        toUpperCase,
        toLowerCase
    }
}

export function TextPage() {

    return (
        <div>
            <TitleEditor />
            <GreetingCard />
        </div>
    );
}