import {useEffect, useState} from "react";

export function TrackList() {
    const [tracks, setTracks] = useState(null);
    const [selectedTrackId, setSelectedTrackId] = useState(null);


    useEffect(() => {
        console.log('effect has bean');
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': import.meta.env.VITE_API_KEY
            }
        }).then(resp => resp.json()).then(data => setTracks(data.data));
    }, [])

    if (tracks === null) {
        return <div>
            <span>Loading 🔃</span>
        </div>
    }

    if (!tracks.length) {
        return <div>
            <span>No tracks :-(</span>
        </div>
    }

    return (
        <ul>
            {
                tracks.map((track) => {
                    return (
                        <li key={track.id} style={ selectedTrackId == track.id ? {border: 'solid 1px gold'} : {}}>

                            <div onClick={ () => {
                                setSelectedTrackId(track.id);
                            }}>
                                {track.attributes.title}
                            </div>
                            <audio controls src={track.attributes.attachments[0].url}></audio>
                        </li>
                    )
                })
            }
        </ul>
    )
}