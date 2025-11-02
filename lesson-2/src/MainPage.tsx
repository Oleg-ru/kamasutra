import {TrackList} from "./components/TrackList.tsx";
import {TrackDetail} from "./components/TrackDetail.tsx";
import {useState} from "react";

export function MainPage() {



    const [trackId, setTrackId] = useState<string | null>(null);

    const handleTrackSelect = (id: string | null): void => {setTrackId(id)}

    return (
        <div>
            <div style={{display: 'flex', gap: '40px'}}>
                <TrackList
                    selectedTrackId={trackId}
                    onTrackSelect={handleTrackSelect}
                />
                <TrackDetail trackId={trackId}/>
            </div>
        </div>
    )
}