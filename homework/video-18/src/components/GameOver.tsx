import './GameEnd.css'

export function GameOver({setCount}) {
    return (
        <div>
            <h2>У твоего дракоши заболел живот и вместо того чтобы играть со своими друзьями он пошел к врачу. В следующий раз корми дракона правильной пищей, чтобы дракоша был здоров</h2>
            <button onClick={() => setCount(0)}>Давай сыграем еще раз</button>
            <p className='smile'>😥</p>
        </div>
    );
}