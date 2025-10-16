import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [title, setTitle] = useState('Введите текст');

    useEffect(() => {
        document.title = title;
        if (!title) {
            document.title = 'Введите текст';
        }
    }, [title]);

    return (
        <>
            <input type="text" onChange={(event) => setTitle(event.currentTarget.value)}/>
        </>
    )
}

export default App
