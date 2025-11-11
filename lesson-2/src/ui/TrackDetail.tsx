import {useEffect, useState} from "react";
import {getTrack, type GetTrackDetailsOutputData} from "../dal/api.ts";

type Props = {
    trackId: string | null
}

export function TrackDetail({trackId}: Props) {

    const [selectedTrack, setSelectedTrack] = useState<GetTrackDetailsOutputData | null>(null);

    useEffect(() => {
        if (!trackId) {
            setSelectedTrack(null)
            return;
        }

        getTrack(trackId)
            .then(json => setSelectedTrack(json.data));
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
                {selectedTrack?.id != trackId
                    ? <p>Loading... ⏳</p>
                    : <p>{selectedTrack.attributes.lyrics ?? 'Not lyrics'}</p>}

            </div>
            }
        </div>
    )
}