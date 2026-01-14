import './App.css'
import {type CSSProperties, useEffect, useState} from "react";

type Attachment = {
    url: string
}

type TrackAttributes = {
    title: string,
    attachments: Attachment[]
}

type Track = {
    id: string,
    attributes: TrackAttributes
}

type TrackDetailsAttributes = {
    title: string,
    lyrics: string,
    attachments: Attachment[]
}

type TrackDetailsResource = {
    id: string,
    attributes: TrackDetailsAttributes
}

const API_KEY = import.meta.env.VITE_API_KEY;

export function App() {

    const [tracks, setTracks] = useState <Track[] | null>(null);
    const [selectedTrackId, setSelectedTrackId] = useState <string | null>(null);
    const [selectedTrack, setSelectedTrack] = useState <TrackDetailsResource | null>(null);

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5', {
            headers: {
                'api-key': API_KEY
            }
        })
            .then(response => response.json())
            .then(json => {
                setTracks(json.data)
            })
    }, []);

    const handleSelectTrack = (trackId: string) => {
        setSelectedTrackId(trackId);

        fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
            headers: {
                'api-key': API_KEY
            }
        })
            .then(response => response.json())
            .then(json => {
                setSelectedTrack(json.data)
            })
    };

    return (
        <>
            <h1>Musicfun Player</h1>
            {tracks === null && <span>Loading...🌌</span>}
            {tracks?.length === 0 && <span>No tracks</span>}
            <ul>
                {tracks?.map(track => {
                    const style:  CSSProperties = {};
                    if (track.id === selectedTrackId) {
                        style.border = '1px solid green';
                        style.borderRadius = '10px'
                    }

                    const handleClick = () => {
                        handleSelectTrack(track.id);
                    };

                    return <li key={track.id} style={style}>
                        <div onClick={handleClick}>{track.attributes.title}</div>
                        <audio controls src={track.attributes.attachments[0].url}></audio>
                    </li>
                })}
            </ul>
            <hr/>
            <h2>Track Details:</h2>
            {!selectedTrackId && <div>Not selected track</div>}
            {selectedTrackId && selectedTrack && selectedTrack.id !== selectedTrackId && <div>Loading...</div>}
            {selectedTrack && selectedTrack.id === selectedTrackId && <div>
                <h4>{selectedTrack.attributes.title}</h4>
                <p>{selectedTrack.attributes.lyrics}</p>
            </div>}
        </>
    )
}
