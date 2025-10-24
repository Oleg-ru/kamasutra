import {useEffect, useState} from "react";

export function TrackDetail({trackId}) {

    const [selectedTrack, setSelectedTrack] = useState(null);

    useEffect(() => {
        if (!trackId) {
            setSelectedTrack(null)
            return;
        }
        fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
            headers: {
                'api-key': import.meta.env.VITE_API_KEY
            }
        }).then(resp => resp.json()).then(json => setSelectedTrack(json.data));
    }, [trackId])

    return (

        <div style={{
            border: '2px solid green',
            height: 'max-content',
            padding: '0.5rem'
        }}>
            <h2>Details</h2>
            {!selectedTrack && !trackId && 'Track is not selected'}
            {!selectedTrack && trackId && 'Loading...🏀'}
            {selectedTrack && trackId && selectedTrack.id !== trackId && 'Loading...⚽'}
            {selectedTrack && <div>
                <h3>{selectedTrack.attributes.title}</h3>
                <h4>Lyrics</h4>
                {selectedTrack === null || selectedTrack?.id != trackId
                    ? <p>Loading... ⏳</p>
                    : <p>{selectedTrack.attributes.lyrics ?? 'Not lyrics'}</p>}

            </div>
            }
        </div>
    )
}