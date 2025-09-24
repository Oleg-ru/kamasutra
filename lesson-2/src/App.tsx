// const tracks = null;

import {useState} from "react";

const tracks = [
    {id: 1, title: 'Soundtrack 1 js', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
    {id: 2, isSelected: true, title: 'Soundtrack 2 js', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'},
];

function App() {

    const [selectedTrackId, setSelectedTrackId] = useState(null);


    if (tracks === null) {
        return <div>
            <h1>Musicfun</h1>
            <span>Loading 🔃</span>
        </div>
    }

    if (!tracks.length) {
        return <div>
            <h1>Musicfun</h1>
            <span>No tracks :-(</span>
        </div>

    }

  return (
    <div>
        <h1>Musicfun</h1>
        <button onClick={()=> setSelectedTrackId(null)}>Сбросить</button>
        <ul>
            {
                tracks.map((track) => {
                    return (
                        <li key={track.id} style={ selectedTrackId == track.id ? {border: 'solid 1px gold'} : {}}>

                            <div onClick={ () => {
                                setSelectedTrackId(track.id)
                            }}>
                                {track.title}
                            </div>
                            <audio controls src={track.url}></audio>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default App;