import './GameEnd.css'

export function Congratulations({setCount}) {
    return (
        <>
            <h2>🎉 Поздравляю! Твой дракон наелся здоровой пищи и с улыбкой полетел играть с другими дракошами🎉</h2>
            <button onClick={() => setCount(0)}>Давай сыграем еще раз</button>
            <p className='smile'>😊</p>
        </>
    );
}