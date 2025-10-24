import {TrackList} from "./TrackList.tsx";
import {TrackDetail} from "./TrackDetail.tsx";
import {useState} from "react";

export function MainPage() {



    const [trackId, setTrackId] = useState(null);

    const handleTrackSelect = (id) => {setTrackId(id)}

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