import {useState} from "react";
import {TrackList} from "./TrackList.tsx";
import {TrackDetail} from "./TrackDetail.tsx";


function App() {
    console.log('App component 🚀')

    const [tracks] = useState([
        {id: 1, title: 'Music 1'},
        {id: 2, title: 'Music 1'},
        {id: 3, title: 'Music 1'},
    ])

    const [selectedTrackId, setSelectedTrackId] = useState(1);

    const selectedTrack =
        tracks.find(track => track.id === selectedTrackId);

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <button onClick={() => {setSelectedTrackId(selectedTrackId + 1)}}>Next</button>
            <hr/>
            <TrackList items={tracks}/>
            <hr/>
            <TrackDetail track={selectedTrack}/>
        </div>
    )
}

export default App

