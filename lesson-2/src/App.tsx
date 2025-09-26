// const tracks = null;

import {useEffect, useState} from "react";

function App() {

    const [selectedTrackId, setSelectedTrackId] = useState(null);
    const [tracks, setTracks] = useState(null);

    useEffect(() => {
        console.log('effect has bean');
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': 'he-he ^_^'
            }
        }).then(resp => resp.json()).then(data => setTracks(data.data));
        setTracks([]);
    }, [])


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
                                {track.attributes.title}
                            </div>
                            <audio controls src={track.attributes.attachments[0].url}></audio>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default App;