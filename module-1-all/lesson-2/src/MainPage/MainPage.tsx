import React, {useState} from 'react';
import {PageTitle} from "./PageTitle.tsx";
import {Playlist} from "./Playlist.tsx";
import {TrackDetails} from "./TrackDetails.tsx";

export function MainPage() {

    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);

    return (
        <>
            <PageTitle value={'Musicfun Player'}/>
            <Playlist selectedTrackId={selectedTrackId} onTrackSelect={setSelectedTrackId}/>
            <hr/>
            <TrackDetails selectedTrackId={selectedTrackId}/>
        </>
    );
}

