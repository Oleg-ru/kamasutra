import {useEffect, useState} from "react";

export function TrackDetail() {

    const [selectedTrack, setSelectedTrack] = useState(null);
    const selectedTrackId = '196e9939-2311-4dbf-bb51-d3c0676e8bfd';

    useEffect(() => {
        if (!selectedTrackId) {
            return;
        }
        fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
            headers: {
                'api-key': import.meta.env.VITE_API_KEY
            }
        }).then(resp => resp.json()).then(json => setSelectedTrack(json.data));
    }, [selectedTrackId])

    return (

        <div style={{
            border: '2px solid green',
            height: 'max-content',
            padding: '0.5rem'
        }}>
            <h2>Details</h2>
            {!selectedTrack && !selectedTrackId && 'Track is not selected'}
            {!selectedTrack && selectedTrackId && 'Loading...🏀'}
            {selectedTrack && selectedTrackId && selectedTrack.id !== selectedTrackId && 'Loading...⚽'}
            {selectedTrack && <div>
                <h4>{selectedTrack.attributes.title}</h4>
                <h5>Lyrics</h5>
                {selectedTrack === null || selectedTrack?.id != selectedTrackId
                    ? <p>Loading... ⏳</p>
                    : <p>{selectedTrack.attributes.lyrics ?? 'Not lyrics'}</p>}

            </div>
            }
        </div>
    )
}