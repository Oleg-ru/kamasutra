import React, {type CSSProperties, useEffect, useState} from "react";
import type {Track, TrackDetailsResource} from "../types.ts";

type Props = {
    selectedTrackId: string | null,
    onTrackSelect: (trackId: string | null) => void
}

export function Playlist(props: Props) {

    const [tracks, setTracks] = useState<Track[] | null>(null);

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5', {
            headers: {
                'api-key': import.meta.env.VITE_API_KEY
            }
        })
            .then(response => response.json())
            .then(json => {
                setTracks(json.data)
            })
    }, []);

    return (
        <>
            {tracks === null && <span>Loading...🌌</span>}
            {tracks?.length === 0 && <span>No tracks</span>}
            <ul>
                {tracks?.map(track => {
                    const style: CSSProperties = {};
                    if (track.id === props.selectedTrackId) {
                        style.border = '1px solid green';
                        style.borderRadius = '10px'
                    }

                    const handleClick = () => {
                        props.onTrackSelect(track.id);
                    };

                    return <li key={track.id} style={style}>
                        <div onClick={handleClick}>{track.attributes.title}</div>
                        <audio controls src={track.attributes.attachments[0].url}></audio>
                    </li>
                })}
            </ul>
        </>
    );
}