import {useState} from 'react'
import './App.css'

function App() {
    const [tracks] = useState([/*{id: 1}, {id: 2}, {id: 3}, {id: 4}*/]);
    const [selectedTrackId] = useState(1);
    const [selectedTrack] = useState({id: 1})

    return (
        <div>
            <div>
                <h2>Details</h2>
                {selectedTrackId && !selectedTrack && <span>loading...🎞</span>}
                {selectedTrackId && selectedTrack && selectedTrackId != selectedTrack.id && <span>loading track...</span>}
                {selectedTrack && <div>Selected: {selectedTrack.id}</div>}

            </div>
            <div>
                <h3>List</h3>
                <ul>
                    {!!tracks.length && tracks.map(track => <li key={track.id}
                                             style={{color: track.id === selectedTrackId ? 'green' : 'white'}}>{track.id}</li>)

                    }
                </ul>
            </div>
        </div>
    )
}

export default App
