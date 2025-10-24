import {useEffect, useState} from "react";
import {TrackItem} from "./TrackItem.tsx";

export function TrackList({onTrackSelect, selectedTrackId}) {
    const [tracks, setTracks] = useState(null);

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

    const handleResetClick = () => {
        onTrackSelect?.(null);
    }

    const handleClick = (trackId) => {
        onTrackSelect?.(trackId);
    }

    return (
        <div>
            <button onClick={handleResetClick}>reset</button>
            <hr/>
            <ul>
                {
                    tracks.map((track) => {
                                                return (
                            <TrackItem
                                key={track.id}
                                track={track}
                                isSelected={track.id === selectedTrackId}
                                onSelect={handleClick}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

