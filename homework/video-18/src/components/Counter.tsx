export function Counter(props) {
    return (
        <div>
            <h1>Нажми кнопку 4 раза, что бы увидеть дракона</h1>
            <button onClick={() => props.setCount(props.count + 1)}>+1</button>
        </div>
    );
}