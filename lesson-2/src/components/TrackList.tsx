import {useEffect, useState} from "react";
import {TrackItem, type TrackListItemOutput} from "./TrackItem.tsx";

type Props = {
    selectedTrackId: string | null
    onTrackSelect: (id: string | null) => void
}

export function TrackList({onTrackSelect, selectedTrackId}: Props) {
    const [tracks, setTracks] = useState< Array<TrackListItemOutput> | null>(null);

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

    const handleClick = (trackId: string) => {
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

