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

const API_KEY = import.meta.env.VITE_API_KEY;

export function App() {

    const [tracks, setTracks] = useState <Track[] | null>(null);
    const [selectedTrackId, setSelectedTrackId] = useState <string | null>(null);

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': API_KEY
            }
        })
            .then(response => response.json())
            .then(json => {
                setTracks(json.data)
            })
    }, []);

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

                    return <li key={track.id} style={style}>
                        <div onClick={() => {
                            setSelectedTrackId(track.id)
                        }}>{track.attributes.title}</div>
                        <audio controls src={track.attributes.attachments[0].url}></audio>
                    </li>
                })}
            </ul>
        </>
    )
}
