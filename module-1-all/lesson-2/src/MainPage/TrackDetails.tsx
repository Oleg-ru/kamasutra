import React, {useEffect, useState} from "react";
import type {Track, TrackDetailsResource} from "../types.ts";

type Props = {
    selectedTrackId: string | null
}

export function TrackDetails(props: Props) {
    const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null);

    useEffect(() => {
        if (!props.selectedTrackId) {
            return;
        }

        fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${props.selectedTrackId}`, {
            headers: {
                'api-key': import.meta.env.VITE_API_KEY
            }
        })
            .then(response => response.json())
            .then(json => {
                setSelectedTrack(json.data)
            })
    }, [props.selectedTrackId]);

    return (
        <>
            <h2>Track Details:</h2>
            {!props.selectedTrackId && <div>Not selected track</div>}
            {props.selectedTrackId && selectedTrack && selectedTrack.id !== props.selectedTrackId && <div>Loading...</div>}
            {selectedTrack && selectedTrack.id === props.selectedTrackId && <div>
                <h4>{selectedTrack.attributes.title}</h4>
                <p>{selectedTrack.attributes.lyrics}</p>
            </div>}
        </>
    );
}